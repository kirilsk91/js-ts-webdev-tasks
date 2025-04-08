const ITEMS = [
  {
    img: "tshirt-white-plain",
    name: "Slub jersey T-shirt",
    price: 9.99,
    rating: 99,
    inStock: true,
    category: "t-shirts-vests",
  },
  {
    img: "tshirt-black-spartan",
    name: "Printed T-shirt",
    price: 15.99,
    rating: 78,
    inStock: true,
    category: "t-shirts-vests",
  },
  {
    img: "tshirt-black-v",
    name: "Cotton T-shirt",
    price: 12.99,
    rating: 50,
    inStock: true,
    category: "shirts",
  },
  {
    img: "tshirt-white-helmet",
    name: "T-shirt with a motif",
    price: 15.99,
    rating: 32,
    inStock: false,
    category: "t-shirts-vests",
  },
  {
    img: "tshirt-red-tealer",
    name: "Cotton T-shirt Regular Fit",
    price: 12.99,
    rating: 64,
    inStock: true,
    category: "t-shirts-vests",
  },
  {
    img: "tshirt-white-plain2",
    name: "Slub jersey T-shirt",
    price: 9.99,
    rating: 21,
    inStock: false,
    category: "shirts",
  },
];
const NAV_LIST_ITEMS = [
  { value: "all", label: "All clothes" },
  { value: "jackets-coats", label: "Jackets & Coats" },
  { value: "hoodies", label: "Hoodies" },
  { value: "t-shirts-vests", label: "T-shirts & Vests" },
  { value: "shirts", label: "Shirts" },
  { value: "blazers-suits", label: "Blazers & Suits" },
  { value: "jeans", label: "Jeans" },
  { value: "trousers", label: "Trousers" },
  { value: "shorts", label: "Shorts" },
  { value: "underwear", label: "Underwear" },
  { value: "gift-sets", label: "Gift Sets" },
];
const FILTER_OPTIONS = [
  { value: "most-expensive", label: "Highest price" },
  { value: "cheapest", label: "Lowest price" },
  { value: "popular", label: "Popular" },
  { value: "in-stock", label: "In stock" },
];

const filterContainer = document.querySelector(".item-filter");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Event listeners for dropdown
filterContainer.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

//click outside closes the dropdown
document.addEventListener("click", (e) => {
  if (!filterContainer.contains(e.target)) {
    dropdownMenu.style.display = "none";
  }
});

// helper functions
const sortItemsByOption = (itemsArray, filterOption) => {
  let sortedItems = [...itemsArray];

  switch (filterOption) {
    case "most-expensive":
      sortedItems.sort((a, b) => b.price - a.price);
      break;
    case "cheapest":
      sortedItems.sort((a, b) => a.price - b.price);
      break;
    case "popular":
      sortedItems.sort((a, b) => b.rating - a.rating);
      break;
    case "in-stock":
      sortedItems.sort((a, b) => b.inStock - a.inStock);
      break;
    default:
      break;
  }

  renderCardList(sortedItems);
};

const filterAndSortItems = (category) => {
  if (category === "all") {
    return renderCardList(ITEMS);
  }

  let filteredItems = ITEMS.filter((item) => item.category === category);

  renderCardList(filteredItems);
};

const generateDropdownListItem = ({ label, value }) => {
  const liElement = document.createElement("li");

  liElement.textContent = label;
  liElement.dataset.value = value;

  return liElement;
};

const renderDropdownListItems = () => {
  const fragment = document.createDocumentFragment();
  const selectedText = document.getElementById("selected-filter");

  FILTER_OPTIONS.forEach((option) => {
    const listItem = generateDropdownListItem(option);
    fragment.append(listItem);
  });

  dropdownMenu.append(fragment);
  dropdownMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      selectedText.textContent = e.target.textContent;
      sortItemsByOption(ITEMS, e.target.dataset.value);
    }
  });
};

const generateListItems = (itemArr) => {
  const ulElement = document.createElement("ul");

  itemArr.forEach(({ value, label }) => {
    const itemElement = document.createElement("li");
    itemElement.innerText = label;
    itemElement.dataset.value = value;
    if (value === "all") {
      itemElement.classList.add("active");
    }
    ulElement.append(itemElement);
  });

  return ulElement;
};

const generateItemCard = ({ img, name, price, inStock }) => {
  const card = document.createElement("div");
  const cardInfoWrapper = document.createElement("div");
  const cardTitle = document.createElement("h4");
  const cardPrice = document.createElement("p");
  const cardButton = document.createElement("button");
  const cardImage = document.createElement("img");

  card.classList.add("card");
  cardInfoWrapper.classList.add("card-info-wrapper");

  cardImage.src = `assets/${img}.png`;
  cardImage.alt = "Image description";

  cardTitle.innerText = name;
  cardPrice.innerText = `$${price}`;
  if (inStock) {
    cardButton.style.cursor = "pointer";
    cardButton.innerText = "Add to bag";
  } else {
    cardButton.style.cursor = "not-allowed";
    cardButton.style.color = "#ccc";
    cardButton.innerText = "Out of stock";
    cardImage.style.filter = "grayscale(100%)";
    cardImage.style.opacity = "0.5";
  }

  cardInfoWrapper.append(cardTitle, cardPrice, cardButton);
  card.append(cardImage, cardInfoWrapper);
  return card;
};

const renderCardList = (items) => {
  const counter = document.getElementById("counter");
  const noItemscContainer = document.getElementById("no-items-container");
  const itemListContainer = document.getElementById("item-list");

  if (items.length === 0) {
    noItemscContainer.style.display = "flex";
    itemListContainer.style.display = "none";
    noItemscContainer.classList.add("no-items");
    noItemscContainer.innerHTML = `<i class="fa-solid fa-heart-crack"></i><h1>no items in selected category, sorry</h1>`;
    counter.innerText = `0 items`;
  } else {
    noItemscContainer.style.display = "none";

    // need to clear the item list in case of sorting
    itemListContainer.style.display = "grid";
    itemListContainer.innerHTML = "";

    const fragment = document.createDocumentFragment();
    let cnt = 0;

    items.forEach((item) => {
      const cardElement = generateItemCard(item);
      fragment.append(cardElement);
      cnt++;
    });

    counter.innerText = `${cnt} items`;
    itemListContainer.append(fragment);
  }
};

const renderListItems = () => {
  const itemCategoryContainer = document.getElementById("nav-item-categories");
  const ul = generateListItems(NAV_LIST_ITEMS);

  itemCategoryContainer.append(ul);
  itemCategoryContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      document
        .querySelectorAll("#nav-item-categories li")
        .forEach((listItem) => {
          listItem.classList.remove("active");
        });

      e.target.classList.add("active");

      const selectedCategory = e.target.dataset.value;
      filterAndSortItems(selectedCategory);
    }
  });
};

// apply theme toggle
const toggleSwitch = document.getElementById("theme-toggle");
//set default light theme if no theme is saved in storage
const savedTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(`${savedTheme}-theme`);
toggleSwitch.checked = savedTheme === "dark";

toggleSwitch.addEventListener("change", () => {
  const isDark = toggleSwitch.checked;
  document.body.classList.toggle("dark-theme", isDark);
  document.body.classList.toggle("light-theme", !isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

renderListItems();
renderCardList(ITEMS);
renderDropdownListItems();
