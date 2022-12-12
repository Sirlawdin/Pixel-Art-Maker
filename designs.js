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
    // make grid function call
    makeGrid(height, width); 
});

// When size is submitted by the user, call makeGrid()


/**
 * @param {row} row - number of rows to submit 
 * @param {col} col - number of columns to submit 
 */
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
            // console.log(color.value);
            if (cell.hasAttributes('style')) {
                cell.removeAttribute('style');
            } else {
                cell.setAttribute('style', 'background-color:' + color.value);
            }
        })
    })
};
