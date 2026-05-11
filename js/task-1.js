const refs = {
    categoriesList: document.querySelector("#categories"),
    items: document.querySelectorAll(".item"),
};



const categoryNum = refs.categoriesList.children.length;
console.log(`Number of categories: ${categoryNum}`);
refs.items.forEach(item => {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`)
});