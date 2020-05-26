console.log("this is a library project ")

function Book(name, author, type) {
    this.name = name
    this.author = author
    this.type = type
}

// display constuctor
function Display(params) {
    console.log("adding to ui")
}

// add methods to display prototypes
Display.prototype.add = function (book) {
    console.log("adding to display")
    tableBody = document.getElementById('tableBody')
    let uiSting = `<tr>   
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            </tr>`
    tableBody.innerHTML += uiSting

}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset()
}

    // validating the user
    Display.prototype.validate = function (book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false
        }
        else {
            return true
        }
    }
    Display.prototype.show = function (type, displayMessage) {
        let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>${type}</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`
    setTimeout(() => {
        message.innerHTML=""
    }, 2000);
    }

    // add event listner the libraryForm

    libraryForm = document.getElementById('libraryForm')
    libraryForm.addEventListener('submit', libraryFromSumbit)

    function libraryFromSumbit(e) {
         e.preventDefault()
        console.log("this is submit")
        let name = document.getElementById('bookName').value
        let author = document.getElementById('author').value
        let type
        let fiction = document.getElementById('fiction')
        let programming = document.getElementById('programming')
        let cooking = document.getElementById('cooking')

        if (fiction.checked) {
            type = fiction.Dalue
        }
        else if (programming.checked) {
            type = programming.value
        }
        else if (cooking.checked) {
            type = cooking.value
        }
        let book = new Book(name, author, type)
        console.log(book)

        let display = new Display()
        if (display.validate(book)) {

            display.add(book)
            display.clear()
            display.show('success', 'your book is added is successfully')
        }
        else {
            display.show("danger", "Sorry this book cannot be added")
        }
        e.preventDefault()

    }