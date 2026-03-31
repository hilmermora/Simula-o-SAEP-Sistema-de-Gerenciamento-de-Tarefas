async function carregar() {
    const res = await fetch('/api/tarefas');
    const tarefas = await res.json();

    afazer.innerHTML = "<h2>A Fazer</h2>";
    fazendo.innerHTML = "<h2>Fazendo</h2>";
    pronto.innerHTML = "<h2>Pronto</h2>";

    tarefas.forEach(t => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <strong>${t.descricao}</strong><br>
            ${t.setor} | ${t.prioridade}<br>
        `;

        if (t.status === "a fazer") afazer.appendChild(card);
        else if (t.status === "fazendo") fazendo.appendChild(card);
        else pronto.appendChild(card);
    });
}

carregar();
