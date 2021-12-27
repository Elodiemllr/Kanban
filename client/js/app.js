// on objet qui contient des fonctions
var app = {
    // fonction d'initialisation, lancée au chargement de la page
    init: function () {
        console.log("app.init !");
        app.addEventListenerToActions();
    },

    addListenerToActions: () => {
        const addListButton = document.getElementById("addListButton");
        addListButton.addEventListener("click", app.showAddListModal);
    },

    showAddListModal: (evt) => {
        const modal = document.getElementById("addListModal");
        modal.classList.add("is-active");
    },
};

// on accroche un écouteur d'évènement sur le document : quand le chargement est terminé, on lance app.init
document.addEventListener("DOMContentLoaded", app.init);
