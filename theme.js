const button =
document.getElementById("theme-toggle");

button.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark"))
{
button.textContent="☀️";
}
else
{
button.textContent="🌙";
}

});