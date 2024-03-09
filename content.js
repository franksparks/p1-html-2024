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
    const subSectionId = subHeading.id;

    const anchor = document.createElement("a");
    anchor.textContent = subHeading.children[0].innerText;
    anchor.href = `#${subSectionId}`;

    subListItem.appendChild(anchor);
    subList.appendChild(subListItem);
    subList.classList.add("remove-bullet");
  });

  listItem.appendChild(subList);
  listItem.classList.add("remove-bullet");
  nav.appendChild(listItem);
});
