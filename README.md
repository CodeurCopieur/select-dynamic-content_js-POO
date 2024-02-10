# select dynamic content js-POO

> Le script Shaker est une implémentation JavaScript qui permet de dynamiser l'interaction utilisateur avec un formulaire de sélection sur une page web. Il écoute les changements sur un élément select  
> Et met à jour dynamiquement le contenu d'un élément cible (wrapperTxt) basé sur la sélection de l'utilisateur. Ce script est particulièrement utile pour afficher des informations spécifiques liées à la sélection de l'utilisateur sans nécessiter de recharger la page.


## Technologies Utilisées

  **JavaScript ES6+:** Le script utilise des fonctionnalités modernes de JavaScript, telles que les classes, les templates literals, la décomposition (destructuring), et les fonctions fléchées (arrow functions), pour une meilleure lisibilité et une structure de code organisée.
  Manipulation du DOM: Interaction directe avec le Document Object Model (DOM) pour écouter les événements et mettre à jour le contenu de la page dynamiquement.


## Structure du Code

  **Module Shaker:** Utilise le modèle de conception module immédiatement invoqué (Immediately Invoked Function Expression - IIFE) pour encapsuler le code et éviter la pollution de l'espace de noms global.

**Classe selectedBanque:**

  **Propriétés privées:**

    #form: Référence à l'élément du formulaire contenant le select.
    arrayBanque: Tableau contenant des objets avec les détails des banques.

  **Constructeur:**

    Initialise les propriétés de l'instance avec les arguments fournis.

  **Méthodes:**

    selectChange(): Écoute les changements sur l'élément select et appelle injectContenu pour mettre à jour l'interface utilisateur.
    
    injectContenu(target): Met à jour le contenu de wrapperTxt avec les informations de la banque sélectionnée.


  **Initialisation et Écoute des Événements:**

    Récupère les références aux éléments du DOM nécessaires (formSelectRegion et wrapper-txt).
    Crée une instance de selectedBanque avec le formulaire et le tableau des banques comme arguments.
    Appelle la méthode selectChange sur l'instance pour commencer à écouter les changements de sélection.

**Fonctionnement**

    L'utilisateur choisit une option dans le <select>.
    Le script détecte ce changement et recherche les informations correspondantes dans arrayBanque.
    Si une correspondance est trouvée, wrapperTxt est mis à jour avec les détails de la banque sélectionnée (nom, mail, adresse), en remplaçant les balises <br> par des sauts de ligne pour l'affichage.
    Si l'utilisateur sélectionne "Marques", le contenu de wrapperTxt est vidé.

**Points Importants**

    Le script garantit une séparation claire entre la logique de manipulation du DOM et la structure de données, permettant une maintenance et une évolution faciles.
    La méthode injectContenu est appelée directement lors de l'initialisation pour gérer le cas où une valeur est déjà sélectionnée par défaut dans le <select>.