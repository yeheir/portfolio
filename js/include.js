document.querySelectorAll("[page-to-include]").forEach(el => {
  fetch(el.getAttribute("page-to-include"))
    .then(res => res.text())
    .then(data => {
      const temp = document.createElement("div");
      temp.innerHTML = data;
      el.replaceWith(...temp.childNodes);
    });
});