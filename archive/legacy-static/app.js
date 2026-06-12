document.addEventListener('DOMContentLoaded', () => {
    // Core psychological Gates mapped out
    const gates = [
        { id: 'skywalker', name: 'Skywalker', desc: 'The initial call. Form your identity, answer the stirring in your soul, and look to the stars.', angle: -90 },
        { id: 'sankofa', name: 'Sankofa', desc: 'Look back to move forward. Navigate the realm of memory, history, and ancestral roots.', angle: -18 },
        { id: 'agoge', name: 'Agoge', desc: 'The crucible of hardship. Forge your resilience, discipline, and inner strength.', angle: 54 },
        { id: 'ares', name: 'Ares', desc: 'The battlefield of action. Confront conflict, harness your drive, and claim your power.', angle: 126 },
        { id: 'orpheus', name: 'Orpheus', desc: 'The descent into emotion. Express your deepest truths, navigate sorrow, and find your song.', angle: 198 }
    ];

    const wheelContainer = document.getElementById('wheel-container');
    const infoPanel = document.getElementById('info-panel');
    const gateTitle = document.getElementById('gate-title');
    const gateDesc = document.getElementById('gate-desc');
    
    // Dynamically calculate radius to keep nodes on the edge
    const calculateRadius = () => {
        return wheelContainer.offsetWidth / 2.5; 
    };

    const renderNodes = () => {
        document.querySelectorAll('.gate-node').forEach(n => n.remove());
        const radius = calculateRadius();

        gates.forEach(gate => {
            const node = document.createElement('div');
            node.className = 'gate-node';
            node.id = `gate-${gate.id}`;
            node.innerText = gate.name;

            // Calculate positioning via trigonometry based on radius
            const rad = gate.angle * (Math.PI / 180);
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;

            // Position node (Offsetting by 45px, which is half of the 90px width/height)
            node.style.left = `calc(50% + ${x}px - 45px)`;
            node.style.top = `calc(50% + ${y}px - 45px)`;

            node.addEventListener('click', () => {
                document.querySelectorAll('.gate-node').forEach(n => n.classList.remove('active'));
                node.classList.add('active');

                gateTitle.innerText = gate.name;
                gateDesc.innerText = gate.desc;
                infoPanel.classList.remove('hidden');
            });
            wheelContainer.appendChild(node);
        });
    };

    renderNodes();
    window.addEventListener('resize', renderNodes);

    document.getElementById('btn-quiz').addEventListener('click', () => {
        alert('Psychological Profiling Quiz initializing...\n\n(This will ultimately determine which Gate you should enter based on your current psychological state.)');
    });
});