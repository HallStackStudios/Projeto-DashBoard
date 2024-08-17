
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.use');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(imageContainer);
});
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible1'); // Adiciona a classe visível
                observer.unobserve(entry.target); // Para parar de observar após a animação
            }
        });
    }, {
        threshold: 0.1 // Percentual de visibilidade necessário para acionar a animação
    });

    // Selecione todos os elementos que quer animar
    const hiddenElements = document.querySelectorAll('.container, .container2, .container3');
    hiddenElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function () {
    const topBar = document.getElementById('top-bar');

    // Função para animar o top-bar
    function showTopBar() {
        topBar.classList.add('visible2'); // Adiciona a classe 'visible' para o top-bar
    }

    // Chama a função para exibir o top-bar após um pequeno atraso
    setTimeout(showTopBar, 500); // Ajuste o tempo de atraso conforme necessário
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.imagens-g');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible3');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    images.forEach(image => {
        observer.observe(image);
    });
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const topBar = document.querySelector('#top-bar');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible2');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observar a top-bar para a animação
    observer.observe(topBar);

    // Observar imagens para a animação
    images.forEach(image => {
        observer.observe(image);
    });
});
