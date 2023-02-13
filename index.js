console.log("This is index.js");

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructer 
function Display() {

}


// Add method to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();

}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 3 || book.author.length < 3) {
        return false;
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message');
    let boldText;
    if (type === 'success'){
        boldText = 'Success';
    }
    else{
        boldText = 'Error';
    }
    message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldText}!</strong> ${displaymessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> `;

    setTimeout(function () {
        message.innerHTML = '';
    }, 4000);

}





// Add submit event listner to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormsubmit);

function libraryFormsubmit(e) {
    console.log('you have submitted the library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let programming = document.getElementById('programming');
    let environment = document.getElementById('environment');
    let engineering = document.getElementById('engineering');

    if (programming.checked) {
        type = programming.value
    }

    else if (environment.checked) {
        type = author.value
    }

    else if (engineering.checked) {
        type = engineering.value
    }


    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {


        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added.');
    }

    else {
        // show error to the user
        display.show('danger', 'Sorry you cannot add this book.');
    }





    e.preventDefault();
}
