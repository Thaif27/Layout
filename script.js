document.addEventListener("DOMContentLoaded", function () {
   
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popoverTriggerEl => {
        new bootstrap.Popover(popoverTriggerEl);
    });

    
    const img = document.querySelector(".card-img-top");
    if (img) {
        img.onerror = function () {
            console.error("Erro ao carregar a imagem:", img.src);
            img.src = "fallback.jpg"; // Imagem alternativa
        };
    }

    
    document.querySelectorAll('.dropdown-submenu').forEach(el => {
        const submenu = el.querySelector('.dropdown-menu');
        if (submenu) {
            el.addEventListener('mouseover', () => submenu.classList.add('show'));
            el.addEventListener('mouseleave', () => submenu.classList.remove('show'));
        }
    });

  
    const form = document.querySelector("form.d-flex");
    if (form) {
        const inputSearch = form.querySelector("input[type='search']");
        let searchResult = document.getElementById("search-result");

        if (!searchResult) {
            searchResult = document.createElement("p");
            searchResult.id = "search-result";
            searchResult.style.marginTop = "10px";
            searchResult.style.fontSize = "1.2rem";
            searchResult.style.fontWeight = "bold";
            searchResult.style.opacity = "0";
            form.insertAdjacentElement("afterend", searchResult);
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault(); 

            const searchTerm = inputSearch.value.trim(); 
            searchResult.textContent = searchTerm ? `Você buscou por: '${searchTerm}'` : "";
            searchResult.style.opacity = searchTerm ? "1" : "0";
        });
    }

   
    const overlay = document.querySelector(".overlay");
    if (overlay) {
        overlay.style.opacity = "0";
        overlay.style.transition = "opacity 1.5s ease-in-out";

        setTimeout(() => {
            overlay.style.opacity = "1";
        }, 500);
    }
});
