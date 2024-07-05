function CreateGrid(size){
    const cont=document.querySelector(".container");
    for(let i=0;i<size;i++){
        const col=document.createElement("div");
        cont.appendChild(col);
        col.classList.add("col");    
        for(let j=0;j<size;j++){
            const rows=document.createElement("div");
            col.appendChild(rows);
            rows.classList.add("row");  
        }
    }

    const divs = document.querySelectorAll("div.row");
    divs.forEach((div)=>{
        div.addEventListener("mouseover",()=>{
        div.style.backgroundColor="rgb(61,61,117)";
        });
    });
}

let numberOfRows=16;
CreateGrid(numberOfRows);

function displaySize(size){
    const currentSize=document.querySelector("div.currentSize");
    currentSize.textContent=`Size: ${size} x ${size}`;
}
displaySize (numberOfRows);

const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    numberOfRows =Number(prompt("Enter the number of rows of the grid (1-100)"));
    if(numberOfRows>100 || numberOfRows<1){
        alert("please enter a number between 1 and 100");
    } else{
        const divs=document.querySelectorAll("div.col");
        divs.forEach((element)=>{
            element.remove();
        });
        CreateGrid(numberOfRows);
        displaySize(numberOfRows);
    }
});





