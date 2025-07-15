    const avaliacaoGrauDeDificuldade = []
        const avalicaoTempoEstimado = []
        // const avalicaoTipoDeRelevo = []

        function avaTrilha() {
            const avaliacaoTempo = document.getElementById("tempoEstimado").value
            if (avaliacaoTempo.trim() === "") // Pega o primeiro elemento que satisfa a condição
                avalicaoTempoEstimado.push(avaliacaoTempo)

            console.log(avaliacaoTempo)

            const avaDificuldade = document.getElementById("grauDeDificuldade").value
            if (avaDificuldade  === "")
                avaliacaoGrauDeDificuldade.push(avaDificuldade)

            console.log(avaDificuldade)
            mostraTrilha()

        }
        function mostraTrilha() {
            const ul = document.getElementById("mostraTrilha")
            ul.innerHTML = ""


            for (let mostra = 0; mostra < avalicaoTempoEstimado.length; mostra++) {
                const tempo = avalicaoTempoEstimado[mostra]
                const dificuldade = avaliacaoGrauDeDificuldade[mostra] || "N/A"

                const li = document.createElement("li")
                li.textContent = `${tempo} 
                          ${dificuldade}`
                ul.appendChild(li)
            }
        }
        const notaAmigo = []
        const cometarioAmigo = []
        const containerAva = []

        function avalicaoAmigo() {

            document.getElementById("containerAva").value
            if (containerAva.length > 1) {
                containerAva.shift()
            } else {
                alert("obrigado")
            }
            const avaAmigo = document.getElementById("notaAmigo").value
            if (avaAmigo.trim() !== 0)
                notaAmigo.push(avaAmigo)
            console.log(avaAmigo)

            const cometAmigo = document.getElementById("cometarioAmigo").value
            if (cometAmigo.trim() !== 0)
                cometarioAmigo.push(cometAmigo)
            console.log(cometAmigo)

            mostraAmigo()
        }
        function mostraAmigo() {
            const ul = document.getElementById("mostraAmigo")
            ul.innerHTML = ""


            for (let mostra = 0; mostra < avalicaoTempoEstimado.length; mostra++) {
                const nota = notaAmigo[mostra]
                const comentario = cometarioAmigo[mostra] || "N/A"


                const li = document.createElement("li")
                li.textContent = `${nota}
                          ${comentario} `
                ul.appendChild(li)
            }
        }