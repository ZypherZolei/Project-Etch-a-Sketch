
let height = 16;
let width = 16;

const maxHeight = 100;
const maxWidth = 100;


const gridContainer = document.querySelector(".grid-container");
createGrid();

const sizeButton = document.querySelector('.size-button');

sizeButton.addEventListener('click', function() {
    let newHeight;
    let newWidth;

    do{
        newHeight = parseInt(prompt("What's the desired height?"));
    }while(newHeight > maxHeight){
       
    }
    do{
        newWidth = parseInt(prompt("What's the desired width?"));
    }while(newWidth > maxWidth);

    if(!isNaN(newHeight) && !isNaN(newWidth)){
        height = newHeight;
        width = newWidth;
        createGrid();
    }
});

function createGrid() {
    gridContainer.innerHTML ='';
    for (let x = 0; x < width; x++) {
        const rowContainer = document.createElement('div');
        rowContainer.style.display = 'flex';
        for (let y = 0; y < height; y++) {
            const childDiv = document.createElement('div');
    
            childDiv.style.width = '30px';
            childDiv.style.height = '30px';
            childDiv.style.borderStyle = 'solid';
    
            childDiv.addEventListener('mouseover', () => {
                childDiv.style.backgroundColor = 'black';
            });
    
            rowContainer.appendChild(childDiv);
        } 
        gridContainer.appendChild(rowContainer); 
    }
}