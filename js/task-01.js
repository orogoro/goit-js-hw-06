const categoriesEl = document.querySelector("#categories");
const itemEl = categoriesEl.children;
console.log(`Number of categories: ${itemEl.length}`);
///////

const firstItemEl = categoriesEl.firstElementChild;
const firstTitleEl = firstItemEl.firstElementChild;
console.log(`Category: ${firstTitleEl.textContent}`);

const firstListEl = firstItemEl.lastElementChild;
const listEl1 = firstListEl.children;
console.log(`Elements: ${listEl1.length}`);
///////

const secondItemEl = categoriesEl.children[1];
const secondTitleEl = secondItemEl.firstElementChild;
console.log(`Category: ${secondTitleEl.textContent}`);

const secondListEl = secondItemEl.lastElementChild;
const listEl2 = secondListEl.children;
console.log(`Elements: ${listEl2.length}`);
///////

const thirdItemEl = categoriesEl.children[2];
const thirdTitleEl = thirdItemEl.firstElementChild;
console.log(`Category: ${thirdTitleEl.textContent}`);

const thirdListEl = thirdItemEl.lastElementChild;
const listEl3 = thirdListEl.children;
console.log(`Elements: ${listEl3.length}`);
