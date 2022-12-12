// Select color input
// Select size input
var height, width, color;

const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const sizePicker = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");

sizePicker.addEventListener('submit', e => {
    e.preventDefault(); // prevent
    height = inputHeight.value; // height
    width = inputWidth.value; // width
    makeGrid(height, width);
    // console.log(height, width);
})

// When size is submitted by the user, call makeGrid()

function makeGrid(r, c) {
    // Your code goes here!
    let removeRow = document.querySelectorAll('tbody');

    if (removeRow.length > 0) {
      removeRow.forEach(row => {
          row.remove();
        })      
    }
    
    for (var i = 1; i <= r; i++){
        var tableRow = '<tr id=table'+i +'></tr>'
        canvas.insertAdjacentHTML("beforeend", tableRow);
        for (var j = 1; j <= c; j++) {                                              
            document.querySelector('#table' + i).insertAdjacentHTML("beforeend", '<td></td>');
        }
    }
    let cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            color = document.querySelector('#colorPicker');
            // console.log(color.value);
            if (cell.hasAttributes('style')) {
                cell.removeAttribute('style');
            } else {
                cell.setAttribute('style', 'background-color:' + color.value);
            }
        })
    })
};
