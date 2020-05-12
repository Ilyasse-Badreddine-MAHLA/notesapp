// HTML Elements

const add_form = document.querySelector('.add-form');
const notes_div = document.querySelector('.notes');
let delete_btns = [];

// Database

let notes = JSON.parse(localStorage.getItem('notes'));
if (notes === null) {
    notes = [];
}

// Submit Form

add_form.addEventListener('submit', function(e) {
    e.preventDefault();

    notes.push(add_form.note.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    add_form.reset();
    showNotes();
});

// Show Notes

showNotes();
function showNotes() {
    notes_div.innerHTML = '';
    for (let i = 0; i < notes.length; i++) {

        let div_elem = document.createElement('div');
        div_elem.className = 'note';

        let p_elem = document.createElement('p');
        let p_node = document.createTextNode(notes[i]);
        p_elem.appendChild(p_node);
        div_elem.appendChild(p_elem);

        let span_elem = document.createElement('span');
        span_elem.className = 'delete fa fa-trash-alt';
        div_elem.appendChild(span_elem);

        notes_div.appendChild(div_elem);
        delete_btns.push(span_elem);
        addEventDelete(span_elem, i);
    }
}

// Add Event to Delete Buttons

function addEventDelete(span_elem, index) {
    span_elem.addEventListener('click', function() {
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        showNotes();
    });
}