document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".side-nav ul li");
    const grids = document.querySelectorAll(".grid");
    const defaultView = document.getElementById("default");
    const container = document.querySelector(".container");

    // Funktion, um das aktuelle Grid anzuzeigen
    function showGrid(targetId) {
        defaultView.classList.add("hidden");
        grids.forEach(grid => {
            if (grid.id === targetId) {
                grid.classList.add("active");
            } else {
                grid.classList.remove("active");
            }
        });
    }

    // Funktion, um die Standardansicht wiederherzustellen
    function showDefault() {
        defaultView.classList.remove("hidden");
        grids.forEach(grid => grid.classList.remove("active"));
    }

    // Event Listener für die Navigation
    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            const targetId = this.getAttribute("data-target");
            showGrid(targetId);
        });
    });

    // Event Listener für das Grid, um sicherzustellen, dass es nicht verschwindet
    grids.forEach(grid => {
        grid.addEventListener("mouseover", function() {
            grid.classList.add("active");
        });
    });

    // Event Listener für den Container, um die Standardansicht wiederherzustellen
    container.addEventListener("mouseleave", function() {
        if (!container.querySelector(":hover")) {
            showDefault();
        }
    });

    // Zeige die Standardansicht, wenn die Seite geladen wird
    showDefault();

    // Modal Related Code
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const span = document.getElementsByClassName('close')[0];

    // Füge einen Click-Event-Listener zu allen Bildern hinzu
    document.querySelectorAll('.grid img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex'; // Zeige das Modal an
            modalImg.src = this.src; // Setze das Modal-Bild auf das angeklickte Bild
        });
    });

    // Wenn der Close-Button geklickt wird
    span.onclick = function() {
        modal.style.display = 'none'; // Verstecke das Modal
    };

    // Wenn der Nutzer irgendwo außerhalb des Modals klickt
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Verstecke das Modal
        }
    };
});
