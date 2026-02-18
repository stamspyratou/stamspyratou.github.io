document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("main section").forEach((section) => {

    const header = section.querySelector("h1, h2, h3");
    if (!header) return;

   
    header.classList.add("collapsible-header");
    section.classList.add("collapsible");

    const content = document.createElement("div");
    content.className = "collapsible-content";

    let node = header.nextSibling;
    while (node) {
      const next = node.nextSibling;
      content.appendChild(node);
      node = next;
    }

    section.appendChild(content);


    section.classList.remove("open");

    header.addEventListener("click", () => {
      section.classList.toggle("open");
    });
  });
});
