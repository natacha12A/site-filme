// Função para verificar a posição da rolagem e exibir ou ocultar o botão "Voltar ao Topo"
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTop").style.display = "block";
    } else {
        document.getElementById("btnTop").style.display = "none";
    }
}

// Função para rolar suavemente para o topo da página ao clicar no botão "Voltar ao Topo"
function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// FIM VERIFICA A ROLAGEM E MOSTRA BOTÃO SUBIR AO TOPO

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});