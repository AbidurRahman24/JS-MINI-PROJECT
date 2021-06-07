// selection Element
const title = document.getElementById('title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

// Even Listerner
btn.addEventListener('click', function(e){
    e.preventDefault()
    if (title.value === '' && author.value === '' && year.value === '') {
        alert('kisu akta den')
    }
    else{
        const newRow = document.createElement('tr')
        // console.log(newRow);
        // newTitle
        const newTitle = document.createElement('th')
        newTitle.innerHTML= title.value
        newRow.appendChild(newTitle)

        // author
        const newAuthor = document.createElement('th')
        newAuthor.innerHTML= author.value
        newRow.appendChild(newAuthor)

        // year
        const newYear = document.createElement('th')
        newYear.innerHTML= year.value
        newRow.appendChild(newYear)
        


        bookList.appendChild(newRow)
    }
})
// validution
// Creating element
// Appent