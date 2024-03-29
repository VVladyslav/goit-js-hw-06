const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galeryEl = document.querySelector(".gallery");

const makeCardMarkup = (image) => {
  const { url, alt } = image;
  return `<li class=galleryItem><img src=${url} alt=${alt}/></li>`;
};

const makeGaleryMarkup = images.map(makeCardMarkup).join("");
galeryEl.insertAdjacentHTML("afterbegin", makeGaleryMarkup);

// using append ==================

// const makeCard = ({ url, alt }) => {
//   const cardEl = document.createElement('li');
//   cardEl.classList.add('galleryItem');
//   const peactureEl = document.createElement('img');
//   peactureEl.src = url;
//   peactureEl.alt = alt;
//   cardEl.append(peactureEl);
//   return cardEl;
// };

// const itemListEl = images.map(makeCard);
// galeryEl.append(...itemListEl);
