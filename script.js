const cont=document.querySelector(".container");

for(let i=0;i<16;i++){
    const col=document.createElement("div");
    cont.appendChild(col);
    col.classList.add("col");    
    for(let j=0;j<16;j++){
        const rows=document.createElement("div");
        col.appendChild(rows);
        rows.classList.add("row");  
    }
}

const divs = document.querySelectorAll("div.row");
divs.forEach((div)=>{
    div.addEventListener("mouseover",()=>{
    div.style.backgroundColor="green";
    });
});
