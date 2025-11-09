
const btnTheme = document.getElementById("btnTheme");

const btnThemeContent = document.getElementById("btnThemeContent");

const darkImg = document.getElementById("darkImg");

const lightImg = document.getElementById("lightImg");

btnTheme.addEventListener("click", function () {
  document.body.classList.toggle("Dark");
  btnTheme.classList.toggle("Dark");
  btnThemeContent.classList.toggle("Dark");
  
  if (document.body.classList.contains("Dark")) {
    lightImg.style.opacity = "0";
    darkImg.style.opacity = "1";
  } else {
    lightImg.style.opacity = "1";
    darkImg.style.opacity = "0";
  }
});

var localStorageTheme = localStorage.getItem("data-theme");
if (localStorageTheme) {
  document.documentElement.setAttribute("data-theme", localStorageTheme);
  if (localStorageTheme === "Dark") {
    document.body.classList.add("Dark");
    btnTheme.classList.add("Dark");
    btnThemeContent.classList.add("Dark");
    lightImg.style.opacity = "0";
    darkImg.style.opacity = "1";
  }
}

btnTheme.addEventListener("change", function () {
  if (btnTheme.checked) {
    document.documentElement.setAttribute("data-theme", "Dark");
    localStorage.setItem("data-theme", "Dark");
  } else {
    document.documentElement.setAttribute("data-theme", "Light");
    localStorage.setItem("data-theme", "Light");
  }
});