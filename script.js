const paragraph = document.querySelector("p");

paragraph.addEventListener("mouseenter", (e) => {
  e.currentTarget.style.backgroundColor = "white";
  e.currentTarget.style.color = "black";
});

paragraph.addEventListener("mouseleave", (e) => {
  e.currentTarget.style.backgroundColor = "black";
  e.currentTarget.style.color = "white";
});
