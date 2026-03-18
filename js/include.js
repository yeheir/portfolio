document.querySelectorAll("[page-to-include]").forEach(el => {
  fetch(el.getAttribute("page-to-include"))
    .then(res => res.text())
    .then(data => el.innerHTML = data);
});