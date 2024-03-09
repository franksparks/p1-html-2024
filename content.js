/*import apuntes from "./apuntes.json" assert { type: "json" };

console.log(apuntes);
*/

// Obtenemos los artículos del DOM
const articles = document.querySelectorAll("#apuntes article");

// Obtenemos el elemento donde queremos colocar el índice
const nav = document.getElementById("index");

// Obtenemos las temáticas y los títulos de las sesiones de cada temática para inyectarlos al índice

articles.forEach((article) => {
  const heading = article.querySelector("h2").innerText;
  const listItem = document.createElement("li");
  listItem.textContent = heading;

  const subList = document.createElement("ul");

  const subHeadings = article.querySelectorAll("fieldset");
  subHeadings.forEach((subHeading) => {
    const subListItem = document.createElement("li");

    subListItem.textContent = subHeading.children[0].innerText;
    subList.appendChild(subListItem);
  });

  listItem.appendChild(subList);
  nav.appendChild(listItem);
});
