/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
/*----- event listeners -----*/
/*----- functions -----*/
function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    // new code here
    render();
    };
    //be sure to call the init function!
    
    function render() {
        board.forEach(function(mark, index) {
        //this sets the text content of the square of the same position to the mark on the board. 
        squares[index].textContent = mark;
        });
        };
        init();
    