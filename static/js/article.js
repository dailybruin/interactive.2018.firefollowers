let button = document.getElementById("return-button");
button.addEventListener("mouseenter", () => {
  console.log("enter");
  button.style.backgroundColor = "rgb(207, 207, 207)";
  button.innerHTML = "FAST 2018"
});

button.addEventListener("mouseleave", () => {
  console.log("exit");
  button.style.backgroundColor = "white";
  button.innerHTML = "RETURN HOME"
});
