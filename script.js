document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("main > section").forEach((section) => {
    // Only pick headings that are DIRECT children of the section
    const header = section.querySelector(":scope > h1, :scope > h2");
    if (!header) return; // skip sections without a top heading

    header.classList.add("collapsible-header");
    section.classList.add("collapsible");

    const content = document.createElement("div");
    content.className = "collapsible-content";

    // move everything after the header into collapsible content
    let node = header.nextSibling;
    while (node) {
      const next = node.nextSibling;
      content.appendChild(node);
      node = next;
    }

    section.appendChild(content);

    header.addEventListener("click", () => {
      section.classList.toggle("open");
    });
  });
});
