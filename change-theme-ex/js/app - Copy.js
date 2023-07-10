const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {

  document.body.classList.toggle('dark')

  if (document.body.className.includes('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }

})

window.onload = function () {

  let localStorageTheme = localStorage.getItem('theme')
  if (localStorageTheme === 'dark') {
    document.body.classList.add('dark')
  }
}
