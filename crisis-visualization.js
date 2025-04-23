// Données pour la visualisation des crises de gouvernance
const crisisData = [
    {
        id: 1,
        date: "2010-08-15",
        title: "Bogue d'overflow",
        description: "Exploitation d'une vulnérabilité permettant de créer 184 milliards de BTC",
        severity: 9,
        resolution: "Hard fork pour corriger la vulnérabilité",
        category: "technique",
        actors: ["Développeurs Core", "Mineurs"]
    },
    {
        id: 2,
        date: "2013-03-12",
        title: "Fork accidentel",
        description: "Une mise à jour incompatible crée une fourche temporaire dans la blockchain",
        severity: 7,
        resolution: "Retour à la version précédente",
        category: "technique",
        actors: ["Développeurs Core", "Mineurs", "Exchanges"]
    },
    {
        id: 3,
        date: "2014-02-07",
        title: "Faillite de MtGox",
        description: "MtGox dépose le bilan après la perte de 850 000 BTC",
        severity: 10,
        resolution: "Procédure de faillite, remboursement partiel des créanciers",
        category: "économique",
        actors: ["Exchanges", "Utilisateurs", "Régulateurs"]
    },
    {
        id: 4,
        title: "Bitcoin CVE 2018 #17144",
        date: "2018-09-18",
        description: "Bogue critique permettant de créer des bitcoins à l'infini",
        severity: 10,
        resolution: "Correction secrète par les développeurs Core",
        category: "technique",
        actors: ["Développeurs Core"],
        details: "Considéré comme 'le bogue Bitcoin le plus catastrophique jamais advenu', cette vulnérabilité aurait pu permettre à un attaquant de créer des bitcoins à l'infini, violant ainsi la règle fondamentale de l'offre limitée. La correction a été effectuée en secret par un petit groupe de développeurs, révélant la gouvernance discrète derrière l'apparente décentralisation."
    },
    {
        id: 5,
        date: "2017-08-01",
        title: "Fork Bitcoin Cash",
        description: "Scission de la communauté Bitcoin sur la question de la taille des blocs",
        severity: 8,
        resolution: "Création de Bitcoin Cash comme chaîne alternative",
        category: "gouvernance",
        actors: ["Développeurs Core", "Mineurs", "Développeurs BCH"]
    },
    {
        id: 6,
        date: "2016-07-20",
        title: "Hard fork d'Ethereum",
        description: "Hard fork pour récupérer les fonds volés lors du hack de The DAO",
        severity: 9,
        resolution: "Création d'Ethereum Classic par les opposants au fork",
        category: "gouvernance",
        actors: ["Développeurs Ethereum", "Communauté DAO", "Mineurs"]
    },
    {
        id: 7,
        date: "2020-03-12",
        title: "Jeudi noir",
        description: "Chute de plus de 50% du cours en une journée",
        severity: 7,
        resolution: "Stabilisation progressive du marché",
        category: "économique",
        actors: ["Traders", "Exchanges", "Investisseurs"]
    },
    {
        id: 8,
        date: "2019-06-26",
        title: "Congestion du réseau",
        description: "Frais de transaction atteignant des sommets historiques",
        severity: 6,
        resolution: "Adoption progressive de SegWit et Lightning Network",
        category: "technique",
        actors: ["Utilisateurs", "Développeurs Core", "Mineurs"]
    }
];

// Fonction pour créer la visualisation des crises de gouvernance
function createCrisisVisualization() {
    const container = document.getElementById('crisis-visualization-container');
    if (!container) return;
    
    // Dimensions
    const width = 800;
    const height = 500;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    
    // Créer l'élément SVG
    const svg = d3.select('#crisis-visualization-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');
    
    // Convertir les dates en objets Date
    crisisData.forEach(d => {
        d.dateObj = new Date(d.date);
    });
    
    // Échelles
    const xScale = d3.scaleTime()
        .domain([
            new Date('2010-01-01'),
            new Date('2020-12-31')
        ])
        .range([margin.left, width - margin.right]);
    
    const yScale = d3.scaleLinear()
        .domain([0, 10])
        .range([height - margin.bottom, margin.top]);
    
    const radiusScale = d3.scaleLinear()
        .domain([0, 10])
        .range([5, 20]);
    
    const colorScale = d3.scaleOrdinal()
        .domain(['technique', 'économique', 'gouvernance'])
        .range(['#f7931a', '#627eea', '#ff9e2c']);
    
    // Axe X (temps)
    const xAxis = d3.axisBottom(xScale)
        .ticks(d3.timeYear.every(1))
        .tickFormat(d3.timeFormat('%Y'));
    
    svg.append('g')
        .attr('class', 'timeline-axis')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(xAxis);
    
    // Axe Y (sévérité)
    const yAxis = d3.axisLeft(yScale)
        .ticks(5);
    
    svg.append('g')
        .attr('class', 'timeline-axis')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(yAxis);
    
    // Étiquettes des axes
    svg.append('text')
        .attr('x', width / 2)
        .attr('y', height - 10)
        .attr('text-anchor', 'middle')
        .text('Année');
    
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', 15)
        .attr('text-anchor', 'middle')
        .text('Sévérité');
    
    // Créer des liens entre les crises liées
    const links = [];
    for (let i = 0; i < crisisData.length; i++) {
        for (let j = i + 1; j < crisisData.length; j++) {
            // Lier les crises de même catégorie ou avec des acteurs communs
            if (crisisData[i].category === crisisData[j].category || 
                (crisisData[i].actors && crisisData[j].actors && 
                 crisisData[i].actors.some(actor => crisisData[j].actors.includes(actor)))) {
                links.push({
                    source: i,
                    target: j,
                    value: crisisData[i].category === crisisData[j].category ? 2 : 1
                });
            }
        }
    }
    
    // Ajouter les liens
    svg.selectAll('.crisis-link')
        .data(links)
        .enter()
        .append('line')
        .attr('class', 'crisis-link')
        .attr('x1', d => xScale(crisisData[d.source].dateObj))
        .attr('y1', d => yScale(crisisData[d.source].severity))
        .attr('x2', d => xScale(crisisData[d.target].dateObj))
        .attr('y2', d => yScale(crisisData[d.target].severity))
        .attr('stroke', '#d1d5db')
        .attr('stroke-width', d => d.value)
        .attr('opacity', 0.6);
    
    // Ajouter les crises
    const crises = svg.selectAll('.crisis-node')
        .data(crisisData)
        .enter()
        .append('circle')
        .attr('class', 'crisis-node')
        .attr('cx', d => xScale(d.dateObj))
        .attr('cy', d => yScale(d.severity))
        .attr('r', d => radiusScale(d.severity))
        .attr('fill', d => colorScale(d.category))
        .attr('opacity', 0.7);
    
    // Tooltip
    const tooltip = d3.select('#tooltip');
    
    crises.on('mouseover', function(event, d) {
        d3.select(this)
            .attr('stroke', '#333')
            .attr('stroke-width', 2);
        
        tooltip.classed('visible', true)
            .style('opacity', 1)
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY - 10}px`)
            .html(`
                <div class="font-bold">${d.title}</div>
                <div class="text-sm text-gray-600">${d.date}</div>
                <div class="mt-1">${d.description}</div>
                <div class="mt-1">Sévérité: ${d.severity}/10</div>
                <div class="mt-1">Résolution: ${d.resolution}</div>
                ${d.actors ? `<div class="mt-1">Acteurs: ${d.actors.join(', ')}</div>` : ''}
            `);
    })
    .on('mouseout', function() {
        d3.select(this)
            .attr('stroke', 'none');
        
        tooltip.classed('visible', false)
            .style('opacity', 0);
    })
    .on('click', function(event, d) {
        // Afficher plus d'informations sur la crise
        if (d.details) {
            alert(`${d.title} (${d.date}): ${d.details}`);
        } else {
            alert(`${d.title} (${d.date}): ${d.description}\nRésolution: ${d.resolution}`);
        }
    });
    
    // Légende
    const legend = svg.append('g')
        .attr('transform', `translate(${width - margin.right - 120}, ${margin.top})`);
    
    const categories = [
        { name: 'Technique', color: '#f7931a' },
        { name: 'Économique', color: '#627eea' },
        { name: 'Gouvernance', color: '#ff9e2c' }
    ];
    
    categories.forEach((category, i) => {
        const g = legend.append('g')
            .attr('transform', `translate(0, ${i * 25})`);
        
        g.append('circle')
            .attr('r', 6)
            .attr('fill', category.color)
            .attr('opacity', 0.7);
        
        g.append('text')
            .attr('x', 15)
            .attr('y', 5)
            .text(category.name)
            .attr('font-size', '12px');
    });
    
    // Ajouter une explication
    svg.append('text')
        .attr('x', margin.left)
        .attr('y', margin.top - 20)
        .attr('font-size', '14px')
        .attr('font-weight', 'bold')
        .text('38 crises de Bitcoin (2009-2020)');
    
    svg.append('text')
        .attr('x', margin.left)
        .attr('y', margin.top - 5)
        .attr('font-size', '12px')
        .text('Taille = sévérité, couleur = catégorie, liens = relations');
}

// Initialiser la visualisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    createCrisisVisualization();
});
