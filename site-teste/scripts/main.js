const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "imagens/imagem01.jpg") {
        myImage.setAttribute("src", "imagens/imagem02.jpg");
    } else {
        myImage.setAttribute("src", "imagens/imagem01.jpg");
    }
};

let meuBotao = document.querySelector("button");
let meuTitulo = document.querySelector("h1");

function setUserName() {
    const meuNome = prompt("Por favor, digite seu nome");
    if (!meuNome) {
        setUserName();
    } else {
        localStorage.setItem("name", meuNome);
    meuTitulo.textContent = `mozzila é legal, ${meuNome}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    meuTitulo.textContent = `mozzila é legal, ${storedName}`;
}

meuBotao.onclick = () => {
    setUserName();
};
