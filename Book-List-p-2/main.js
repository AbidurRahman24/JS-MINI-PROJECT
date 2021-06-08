// select element
// add even listerner
// basic valitationo
// row create
// create new title, autor, year
// appentchild

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const year = document.querySelector('#year')
const submitBtn = document.querySelector('.submitBtn')
const bookList = document.querySelector('#book-list')

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    if (title.value === '' && author.value === '' && year.value === '') {
        alert('Please enter some think')
    }
    else{
        const newRow = document.createElement('tr')

        // create th title
        const newTitle = document.createElement('th')
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)

        // new Author
        const newAuthor = document.createElement('th')
        newAuthor.innerHTML = author.value
        newRow.appendChild(newAuthor)
        //new Year
        const newYear = document.createElement('th')
        newYear.innerHTML = year.value
        newRow.appendChild(newYear)

        bookList.appendChild(newRow)



    }
})

// const removeBookList = document.querySelector('tr')
// for (let i = 0; i < removeBookList.length; i++) {
//     const element = removiBookList[i];
//     console.log(element);
//     element.addEventListener('click', function(e){
//         e.target.parentNode.removeChild(e.target)
//     })
// }
// function myFunction() {

//     const removeBookList = document.getElementById('book-list')
//     for (let i = 0; i < removeBookList.length; i++) {
//         const element = removiBookList[i];
//         // console.log(element);
//         element.remove()
//         }




    // var myobj = document.getElementById("book-list");

    // myobj.remove();
//   }
function myFunction() {
    var list = document.getElementById("book-list");
    list.removeChild(list.childNodes[0]);
}

