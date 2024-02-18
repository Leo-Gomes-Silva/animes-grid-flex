const btnDarkMode = document.getElementById('btn-dark-mode')

const body = document.getElementsByTagName("body")

btnDarkMode.addEventListener("click", function () {
  document.body.classList.toggle('dark-body')
})