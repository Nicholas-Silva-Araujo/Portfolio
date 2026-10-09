
const botaoTema = document.createElement("button");

botaoTema.textContent = "🌙 Alternar tema";
botaoTema.setAttribute("type", "button");

botaoTema.style.cssText = `
    position: fixed;
    right: 20px;
    bottom: 20px;
    padding: 12px 18px;
    border: none;
    border-radius: 8px;
    background-color: #287747;
    color: white;
    cursor: pointer;
    z-index: 1000;
`;

document.body.appendChild(botaoTema);

let temaEscuro = false;

botaoTema.addEventListener("click", function () {
    temaEscuro = !temaEscuro;

    document.body.style.backgroundColor = temaEscuro
        ? "#1f2922"
        : "#f8f7f2";

    document.body.style.color = temaEscuro
        ? "#f5f5f5"
        : "#26352b";

    botaoTema.textContent = temaEscuro
        ? "☀️ Alternar tema"
        : "🌙 Alternar tema";
});

const titulo = document.querySelector("#inicio h2");

if (titulo) {
    titulo.setAttribute("title", "Bem-vindo ao Doa Web!");
}
