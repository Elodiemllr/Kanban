// on objet qui contient des fonctions
var app = {
    // fonction d'initialisation, lancée au chargement de la page
    init: function () {
        console.log("app.init !");
        app.addEventListenerToActions();
    },
    addListenerToActions: () => {
        // Listen to new list button
        const addListButton = document.getElementById("addListButton");
        addListButton.addEventListener("click", app.showAddListModal);
        // Listen to close modal buttons
        const closeButtons = document.querySelectorAll(".close");
        // J'ai un tableau d'éléments du DOM (NodeList)
        closeButtons.forEach((closeButton) => {
            closeButton.addEventListener("click", app.hideModals);
        });
    },

    showAddListModal: (evt) => {
        const modal = document.getElementById("addListModal");
        modal.classList.add("is-active");
    },

    hideModals: () => {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => {
            modal.classList.remove("is-active");
        });
    },
};

// on accroche un écouteur d'évènement sur le document : quand le chargement est terminé, on lance app.init
document.addEventListener("DOMContentLoaded", app.init);
