document.querySelectorAll(".collapsible-header").forEach(header => {
  header.addEventListener("click", () => {
    const section = header.parentElement;
    section.classList.toggle("open");
  });
});
