const cards = [
  {
    title: "Startup Framework",
    content:
      "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
    bgColor: "#ebeaed",
    bgUrl: null,
    titleTextColor: "#1E0E62",
    contentTextColor: "#1E0E62",
    buttonBgColor: "#ffffff",
    buttonTextColor: "#1E0E62",
  },
  {
    title: "Web Generator",
    content:
      "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
    bgColor: "#ffffff",
    bgUrl: null,
    titleTextColor: "#1E0E62",
    contentTextColor: "#15143966",
    buttonBgColor: "#25DAC5",
    buttonTextColor: "#ffffff",
  },
  {
    title: "Slides 4",
    content:
      "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
    bgColor: "#482be7",
    bgUrl: null,
    titleTextColor: "#ffffff",
    contentTextColor: "#ffffff",
    buttonBgColor: "#ffffff",
    buttonTextColor: "#1E0E62",
  },
  {
    title: "Postcards",
    content:
      "All frequently used elements are now in symbols. Use them to create interfaces really fast. Easily change icons, colors and text. Add new symbols to customize your design.",
    bgColor: null,
    bgUrl: "sea-boat-bg.png",
    titleTextColor: "#ffffff",
    contentTextColor: "#ffffff",
    buttonBgColor: "#ffffff",
    buttonTextColor: "#1E0E62",
  },
];

function generateCard({
  title,
  content,
  bgColor,
  bgUrl,
  titleTextColor,
  contentTextColor,
  buttonBgColor,
  buttonTextColor,
}) {
  const card = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const cardContent = document.createElement("p");
  const cardButton = document.createElement("button");
  const cardTextContentWrapper = document.createElement("div");
  const cardButtonWrapper = document.createElement("div");

  card.classList.add("card");

  if (bgColor) {
    if (bgColor === "#ffffff") {
      card.style.border = "2px solid #EBEAED";
    }
    card.style.backgroundColor = bgColor;
  }

  if (bgUrl) {
    card.style.background = `url(assets/${bgUrl})`;
    card.style.textShadow = "0 1px 3px rgba(0, 0, 0, 0.7";
  }

  cardTitle.innerHTML = title;
  cardTitle.style.color = titleTextColor;

  cardContent.innerHTML = content;
  cardContent.style.color = contentTextColor;

  cardButton.innerText = "Explore";
  cardButton.style.backgroundColor = buttonBgColor;
  cardButton.style.color = buttonTextColor;

  // append divs to use with d-flex
  cardTextContentWrapper.append(cardTitle, cardContent);
  cardButtonWrapper.append(cardButton);
  card.append(cardTextContentWrapper, cardButtonWrapper);
  return card;
}

function renderCards() {
  const container = document.getElementById("card-container");
  const fragment = document.createDocumentFragment();

  cards.forEach((card) => {
    const cardItem = generateCard(card);
    fragment.append(cardItem);
  });
  container.append(fragment);
}

renderCards();
