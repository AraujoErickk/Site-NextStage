/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



// Função que simula a verificação de login (ajuste conforme sua lógica de autenticação)
function isUserLoggedIn() {
  // Exemplo: verifica se existe um item "loggedIn" no localStorage igual a "true"
  return localStorage.getItem("loggedIn") === "true";
}

// Evento para clique no link "Fórum"
document.getElementById("forumLink").addEventListener("click", function(e) {
  e.preventDefault();
  if (isUserLoggedIn()) {
    // Se o usuário estiver logado, redireciona para forum.html
    window.location.href = "forum.html";
  } else {
    // Caso contrário, salva o redirecionamento desejado e exibe o modal de login
    localStorage.setItem("redirectAfterLogin", "forum.html");
    var loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
    loginModal.show();
  }
});

// Exemplo de manipulação do formulário de login (adapte para sua implementação real)
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  // Aqui você deve implementar sua lógica de autenticação.
  // No exemplo abaixo, simulamos o login com sucesso.
  var usuario = document.getElementById("username").value;
  console.log("Usuário autenticado:", usuario);
  
  // Define que o usuário está logado
  localStorage.setItem("loggedIn", "true");

  // Fechar o modal de login
  var loginModalEl = document.getElementById("loginModal");
  var loginModalInstance = bootstrap.Modal.getInstance(loginModalEl);
  if (loginModalInstance) {
    loginModalInstance.hide();
  }

  // Verifica se há redirecionamento pendente após login
  var redirectUrl = localStorage.getItem("redirectAfterLogin");
  if (redirectUrl) {
    localStorage.removeItem("redirectAfterLogin");
    window.location.href = redirectUrl;
  }
});

