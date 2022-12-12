// Select color input
// Select size input
var height, width, color;

const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const sizePicker = document.getElementById("sizePicker");
const canvas = document.getElementById("pixelCanvas");

sizePicker.addEventListener('submit', e => {
    // prevent Default action of submit button
    e.preventDefault(); 
    height = inputHeight.value; // height 
    width = inputWidth.value; // width
    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width); 
});



/**
  * @desc create a grid of squares 
  * @param int $row - number of squares representing the width of the grid
  * @param int $col - number of squares representing the height of the grid
*/
// make grid function
function makeGrid(row, col) {
    // Your code goes here!

    // When size is changed to fit the new size then remove the previous grid
    let removeRow = document.querySelectorAll('tbody');
    if (removeRow.length > 0) {
      removeRow.forEach(row => {
          row.remove();
        });  
    };
    
    // Remove all rows from the table that have been removed from the DOM 
    // and then create new rows    
    for (var i = 1; i <= row; i++){
        var tableRow = '<tr id=table'+i +'></tr>'
        canvas.insertAdjacentHTML("beforeend", tableRow);
        for (var j = 1; j <= col; j++) {                                              
            document.querySelector('#table' + i).insertAdjacentHTML("beforeend", '<td></td>');
        }
    }

    // add color to cell
    let cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            color = document.querySelector('#colorPicker');
            if (cell.hasAttributes('style')) {
                cell.removeAttribute('style');
            } else {
                cell.setAttribute('style', 'background-color:' + color.value);
            }
        })
    })
};


// Fibonnaci series

for (var i = 0; i < 10; i++) {
    console.log(fib(i));
    }
