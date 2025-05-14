const conteudos = document.getElementById("conteudos");
const destino = document.getElementById("destino");
const carros = document.querySelectorAll(".carro");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnRemover = document.getElementById("btnRemover");

carros.forEach(botao => {
    botao.onclick = () => botao.classList.toggle("selected");
});

btnAdicionar.onclick = () => {
    const selecionados = document.querySelectorAll("#conteudos .carro.selected");

    selecionados.forEach(carro => {
        carro.classList.remove("selected", "btn-secondary");
        carro.classList.add("btn-success");
        destino.appendChild(carro);

        setTimeout(() => {
            carro.classList.remove("btn-success");
            carro.classList.add("btn-secondary");
        }, 1000);
    });
};

