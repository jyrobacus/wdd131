const currentyear = document.querySelector("#currentyear")
const date = new Date().getFullYear();
currentyear.textContent = date;

lastModified.textContent += document.lastModified;
lastModified.style.color = 'yellow';