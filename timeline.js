// Données pour la chronologie
const timelineData = [
    // Phase 1: Preuve de concept (2008-2012)
    { 
        date: "2008-10-31", 
        title: "Publication du whitepaper Bitcoin", 
        description: "Satoshi Nakamoto publie 'Bitcoin: A Peer-to-Peer Electronic Cash System'", 
        category: "bitcoin",
        phase: 1
    },
    { 
        date: "2009-01-03", 
        title: "Bloc Genesis", 
        description: "Le premier bloc de la blockchain Bitcoin est miné par Satoshi Nakamoto", 
        category: "bitcoin",
        phase: 1
    },
    { 
        date: "2009-01-12", 
        title: "Première transaction Bitcoin", 
        description: "Satoshi Nakamoto envoie 10 BTC à Hal Finney", 
        category: "bitcoin",
        phase: 1
    },
    { 
        date: "2010-05-22", 
        title: "Bitcoin Pizza Day", 
        description: "Laszlo Hanyecz achète deux pizzas pour 10 000 BTC, première utilisation comme moyen d'échange", 
        category: "bitcoin",
        phase: 1
    },
    { 
        date: "2010-07-17", 
        title: "Création de MtGox", 
        description: "Jed McCaleb lance MtGox, qui deviendra la plus grande plateforme d'échange de Bitcoin", 
        category: "bitcoin",
        phase: 1
    },
    { 
        date: "2011-04-23", 
        title: "Disparition de Satoshi", 
        description: "Dernier message connu de Satoshi Nakamoto avant sa disparition", 
        category: "bitcoin",
        phase: 1
    },
    
    // Phase 2: Péché (2012-2013)
    { 
        date: "2012-09-27", 
        title: "Création de la Bitcoin Foundation", 
        description: "Institutionnalisation du développement de Bitcoin", 
        category: "bitcoin",
        phase: 2
    },
    { 
        date: "2012-11-28", 
        title: "Premier halving Bitcoin", 
        description: "La récompense de minage passe de 50 à 25 BTC", 
        category: "bitcoin",
        phase: 2
    },
    { 
        date: "2013-03-12", 
        title: "Fork accidentel", 
        description: "Une mise à jour incompatible crée une fourche temporaire dans la blockchain", 
        category: "bitcoin",
        phase: 2,
        crisis: true
    },
    { 
        date: "2013-03-18", 
        title: "FinCEN régule les échanges", 
        description: "Première régulation officielle des échanges de cryptomonnaies", 
        category: "bitcoin",
        phase: 2
    },
    { 
        date: "2013-10-02", 
        title: "Fermeture de Silk Road", 
        description: "Le FBI ferme le marché noir Silk Road et saisit 26 000 BTC", 
        category: "bitcoin",
        phase: 2,
        crisis: true
    },
    
    // Phase 3: Maturation (2013-présent)
    { 
        date: "2013-12-05", 
        title: "Interdiction en Chine", 
        description: "La Banque centrale chinoise interdit aux institutions financières de traiter les bitcoins", 
        category: "bitcoin",
        phase: 3,
        crisis: true
    },
    { 
        date: "2014-02-07", 
        title: "Faillite de MtGox", 
        description: "MtGox dépose le bilan après la perte de 850 000 BTC", 
        category: "bitcoin",
        phase: 3,
        crisis: true
    },
    { 
        date: "2014-07-30", 
        title: "Publication du whitepaper Ethereum", 
        description: "Vitalik Buterin publie le whitepaper d'Ethereum", 
        category: "ethereum",
        phase: 3
    },
    { 
        date: "2015-07-30", 
        title: "Lancement d'Ethereum", 
        description: "La blockchain Ethereum est lancée officiellement", 
        category: "ethereum",
        phase: 3
    },
    { 
        date: "2016-05-14", 
        title: "Création de The DAO", 
        description: "Lancement de The DAO, la plus grande levée de fonds en cryptomonnaies à l'époque", 
        category: "ethereum",
        phase: 3
    },
    { 
        date: "2016-06-17", 
        title: "Hack de The DAO", 
        description: "Exploitation d'une faille dans The DAO, vol de 3.6M d'ETH", 
        category: "ethereum",
        phase: 3,
        crisis: true
    },
    { 
        date: "2016-07-20", 
        title: "Hard fork d'Ethereum", 
        description: "Hard fork d'Ethereum pour récupérer les fonds volés lors du hack de The DAO", 
        category: "ethereum",
        phase: 3,
        crisis: true
    },
    { 
        date: "2017-08-01", 
        title: "Fork Bitcoin Cash", 
        description: "Bitcoin Cash se sépare de Bitcoin suite à des désaccords sur la taille des blocs", 
        category: "bitcoin",
        phase: 3,
        crisis: true
    },
    { 
        date: "2018-09-18", 
        title: "Bitcoin CVE 2018 #17144", 
        description: "Correction secrète d'un bogue critique qui aurait pu permettre de créer des bitcoins à l'infini", 
        category: "bitcoin",
        phase: 3,
        crisis: true
    },
    { 
        date: "2020-03-12", 
        title: "Jeudi noir", 
        description: "Le cours du Bitcoin chute de plus de 50% en une journée", 
        category: "bitcoin",
        phase: 3,
        crisis: true
    }
];

// Données pour les crises de Bitcoin
const crisisData = [
    {
        id: 1,
        date: "2010-08-15",
        title: "Bogue d'overflow",
        description: "Exploitation d'une vulnérabilité permettant de créer 184 milliards de BTC",
        severity: 9,
        resolution: "Hard fork pour corriger la vulnérabilité",
        category: "technique"
    },
    {
        id: 2,
        date: "2013-03-12",
        title: "Fork accidentel",
        description: "Une mise à jour incompatible crée une fourche temporaire dans la blockchain",
        severity: 7,
        resolution: "Retour à la version précédente",
        category: "technique"
    },
    {
        id: 3,
        date: "2014-02-07",
        title: "Faillite de MtGox",
        description: "MtGox dépose le bilan après la perte de 850 000 BTC",
        severity: 10,
        resolution: "Procédure de faillite, remboursement partiel des créanciers",
        category: "économique"
    },
    {
        id: 4,
        title: "Bitcoin CVE 2018 #17144",
        date: "2018-09-18",
        description: "Bogue critique permettant de créer des bitcoins à l'infini",
        severity: 10,
        resolution: "Correction secrète par les développeurs Core",
        category: "technique",
        details: "Considéré comme 'le bogue Bitcoin le plus catastrophique jamais advenu', cette vulnérabilité aurait pu permettre à un attaquant de créer des bitcoins à l'infini, violant ainsi la règle fondamentale de l'offre limitée. La correction a été effectuée en secret par un petit groupe de développeurs, révélant la gouvernance discrète derrière l'apparente décentralisation."
    },
    {
        id: 5,
        date: "2017-08-01",
        title: "Fork Bitcoin Cash",
        description: "Scission de la communauté Bitcoin sur la question de la taille des blocs",
        severity: 8,
        resolution: "Création de Bitcoin Cash comme chaîne alternative",
        category: "gouvernance"
    },
    {
        id: 6,
        date: "2016-07-20",
        title: "Hard fork d'Ethereum",
        description: "Hard fork pour récupérer les fonds volés lors du hack de The DAO",
        severity: 9,
        resolution: "Création d'Ethereum Classic par les opposants au fork",
        category: "gouvernance"
    },
    {
        id: 7,
        date: "2020-03-12",
        title: "Jeudi noir",
        description: "Chute de plus de 50% du cours en une journée",
        severity: 7,
        resolution: "Stabilisation progressive du marché",
        category: "économique"
    },
    {
        id: 8,
        date: "2019-06-26",
        title: "Congestion du réseau",
        description: "Frais de transaction atteignant des sommets historiques",
        severity: 6,
        resolution: "Adoption progressive de SegWit et Lightning Network",
        category: "technique"
    }
];

// Fonction pour créer la visualisation de la chronologie
function createTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    
    // Dimensions
    const width = 900;
    const height = 400;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    
    // Créer l'élément SVG
    const svg = d3.select('#timeline-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');
    
    // Convertir les dates en objets Date
    timelineData.forEach(d => {
        d.dateObj = new Date(d.date);
    });
    
    // Trier les données par date
    timelineData.sort((a, b) => a.dateObj - b.dateObj);
    
    // Échelles
    const xScale = d3.scaleTime()
        .domain([
            d3.min(timelineData, d => d.dateObj),
            d3.max(timelineData, d => d.dateObj)
        ])
        .range([margin.left, width - margin.right]);
    
    const yScale = d3.scalePoint()
        .domain(['bitcoin', 'ethereum', 'crisis'])
        .range([height - margin.bottom - 50, margin.top]);
    
    // Phases
    const phases = [
        { name: "Preuve de concept", start: new Date("2008-01-01"), end: new Date("2012-12-31") },
        { name: "Péché", start: new Date("2013-01-01"), end: new Date("2013-12-31") },
        { name: "Maturation", start: new Date("2014-01-01"), end: new Date("2020-12-31") }
    ];
    
    // Ajouter les phases comme arrière-plan
    svg.selectAll('.timeline-phase')
        .data(phases)
        .enter()
        .append('rect')
        .attr('class', 'timeline-phase')
        .attr('x', d => xScale(d.start))
        .attr('y', margin.top - 20)
        .attr('width', d => xScale(d.end) - xScale(d.start))
        .attr('height', height - margin.top - margin.bottom + 40)
        .attr('fill', (d, i) => {
            const colors = ['#f7931a33', '#627eea33', '#ff9e2c33'];
            return colors[i % colors.length];
        });
    
    // Ajouter les étiquettes de phase
    svg.selectAll('.phase-label')
        .data(phases)
        .enter()
        .append('text')
        .attr('class', 'phase-label')
        .attr('x', d => xScale(d.start) + (xScale(d.end) - xScale(d.start)) / 2)
        .attr('y', margin.top - 25)
        .attr('text-anchor', 'middle')
        .attr('font-size', '12px')
        .attr('fill', '#666')
        .text(d => d.name);
    
    // Axe X (temps)
    const xAxis = d3.axisBottom(xScale)
        .ticks(d3.timeYear.every(1))
        .tickFormat(d3.timeFormat('%Y'));
    
    svg.append('g')
        .attr('class', 'timeline-axis')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(xAxis);
    
    // Ligne de temps
    svg.append('line')
        .attr('x1', margin.left)
        .attr('y1', height - margin.bottom)
        .attr('x2', width - margin.right)
        .attr('y2', height - margin.bottom)
        .attr('stroke', '#000')
        .attr('stroke-width', 2);
    
    // Ajouter les événements
    const events = svg.selectAll('.timeline-event')
        .data(timelineData)
        .enter()
        .append('g')
        .attr('class', 'timeline-event')
        .attr('transform', d => {
            // Positionner les événements de crise plus haut
            const y = d.crisis ? yScale('crisis') : yScale(d.category);
            return `translate(${xScale(d.dateObj)}, ${y})`;
        });
    
    // Cercles pour les événements
    events.append('circle')
        .attr('r', d => d.crisis ? 8 : 6)
        .attr('fill', d => {
            if (d.category === 'bitcoin') return '#f7931a';
            if (d.category === 'ethereum') return '#627eea';
            return '#ff9e2c';
        })
        .attr('stroke', '#fff')
        .attr('stroke-width', 2);
    
    // Lignes reliant les événements à l'axe temporel
    events.append('line')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', d => {
            const y = d.crisis ? yScale('crisis') : yScale(d.category);
            return height - margin.bottom - y;
        })
        .attr('stroke', '#ccc')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '3,3');
    
    // Tooltip
    const tooltip = d3.select('#tooltip');
    
    events.on('mouseover', function(event, d) {
        d3.select(this).select('circle')
            .attr('stroke', '#333')
            .attr('stroke-width', 3);
        
        tooltip.classed('visible', true)
            .style('opacity', 1)
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY - 10}px`)
            .html(`
                <div class="font-bold">${d.title}</div>
                <div class="text-sm text-gray-600">${d.date}</div>
                <div class="mt-1">${d.description}</div>
                ${d.crisis ? '<div class="mt-1 text-red-600 font-bold">Crise majeure</div>' : ''}
            `);
    })
    .on('mouseout', function() {
        d3.select(this).select('circle')
            .attr('stroke', '#fff')
            .attr('stroke-width', 2);
        
        tooltip.classed('visible', false)
            .style('opacity', 0);
    })
    .on('click', function(event, d) {
        // Afficher plus d'informations sur l'événement
        alert(`${d.title} (${d.date}): ${d.description}`);
    });
    
    // Filtrage des événements
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Mettre à jour les boutons actifs
            document.querySelectorAll('.filter-button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Filtrer les événements
            if (filter === 'all') {
                events.style('opacity', 1);
            } else if (filter === 'crisis') {
                events.style('opacity', d => d.crisis ? 1 : 0.2);
            } else {
                events.style('opacity', d => d.category === filter ? 1 : 0.2);
            }
        });
    });
}

// Fonction pour créer la visualisation des crises
function createCrisisVisualization() {
    const container = document.getElementById('crisis-visualization-container');
    if (!container) return;
    
    // Dimensions
    const width = 800;
    const height = 400;
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
    
    // Ajouter les crises
    const crises = svg.selectAll('.crisis-node')
        .data(crisisData)
        .enter()
        .append('circle')
        .attr('class', 'crisis-node')
        .attr('cx', d => xScale(d.dateObj))
        .attr('cy', d => yScale(d.severity))
        .attr('r', d => radiusScale(d.severity))
        .attr('fill', d => {
            if (d.category === 'technique') return '#f7931a';
            if (d.category === 'économique') return '#627eea';
            return '#ff9e2c';
        })
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
}

// Initialiser les visualisations quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    createTimeline();
    createCrisisVisualization();
});
