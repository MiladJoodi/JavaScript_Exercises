
const $ = document

let titleElem = $.getElementById('title')
let authorElem = $.getElementById('author')
let yearElem = $.getElementById('year')
let addBookBtn = $.querySelector('.btn')
let tbodyElem = $.getElementById('book-list')



let booksArrays = []


function addBookToList(event) {
    event.preventDefault()

    if (titleElem.value === '' || authorElem.value === '' || yearElem.value === '') {
        alert('Please Complete All Inputs')
    } else {
        let newBook = {
            id: booksArrays.length + 1,
            title: titleElem.value,
            author: authorElem.value,
            year: yearElem.value
        }
        booksArrays.push(newBook)
        setLocalStorage(booksArrays)
        titleElem.focus()
    }



}

function listGenerator(list) {
    tbodyElem.innerHTML = '' // fix double copy

    list.forEach(function (book) {
        let newTr = document.createElement('tr')

        let newThTilte = document.createElement('th')
        newThTilte.innerHTML = book.title

        let newThAuthor = document.createElement('th')
        newThAuthor.innerHTML = book.author

        let newThYear = document.createElement('th')
        newThYear.innerHTML = book.year

        newTr.append(newThTilte, newThAuthor, newThYear)
        tbodyElem.append(newTr)
    })
}

function setLocalStorage(list) {
    localStorage.setItem('bookList', JSON.stringify(list))
    makeEmptyInputs()
    listGenerator(booksArrays)

}

function getLocalStorage() {
    let localStorageList = JSON.parse(localStorage.getItem('bookList'))

    if (localStorageList) {
        booksArrays = localStorageList
        listGenerator(localStorageList)
    }
}

function makeEmptyInputs() {
    titleElem.value = ''
    authorElem.value = ''
    yearElem.value = ''
}


addBookBtn.addEventListener('click', addBookToList)
window.addEventListener('load', getLocalStorage)


