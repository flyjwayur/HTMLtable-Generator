console.log("hello");

const elements = {
    rowNum : document.querySelector('#rowNum'),
    colNum : document.querySelector('#colNum'),
    tableWrapper : document.querySelector('.table-wrapper'),
    table : document.createElement('table'),
    tableHead : document.createElement('thead'),
    headTr : document.createElement('tr'),
    tblBody : document.createElement('tbody')
}

/*
const deleteTable = () => {
    document.querySelector('.table-wrapper').removeChild(table);
}
*/

const createTable = ()=>{

    console.log("warpper is emtpy?", elements.tableWrapper);
    /* for(let h=0 ; h < elements.colNum.value; h++){
        console.log(h);
        let th = document.createElement("th");
        //elements.tableHead.appendChild(th);
        elements.table.appendChild(th);
    } */
    //elements.tableHead.appendChild(elements.headTr);
  
    for(let i=0; i < elements.rowNum.value; i++){
        console.log("row index", i);
        let tr = document.createElement('tr');

         
        if(i == 0){
            console.log("head - row index : 0", i);
            for(let h=0; h < elements.colNum.value; h++){
                console.log("head - h index : 0", h);
                let th = document.createElement("th");
                let thText = document.createTextNode(`Head ${h}`);
                th.appendChild(thText);
                elements.headTr.appendChild(th);
            }
            elements.tableHead.appendChild(elements.headTr);
            elements.table.appendChild(elements.tableHead);
        } else{
            for(let j=0; j < elements.colNum.value; j++){
                console.log("tbody - row index : 0", j);
                let td = document.createElement('td');
                let tdText = document.createTextNode(`row ${i}, col ${j}`);
                td.appendChild(tdText);
                tr.appendChild(td);
            }
            elements.tblBody.appendChild(tr);
        }   
        elements.table.appendChild(elements.tblBody);
        elements.tableWrapper.appendChild(elements.table);
    }
}

const changeTableWidth =()=>{
    let tableWidth = document.querySelector('#tableWidth');
    elements.table.style.width = `${tableWidth.value}%`;
    console.log("table width", elements.table.style.width);
}

const changeBorderWidthPixel = () => {
    let borderPixel = document.querySelector('#borderPixel');
    elements.table.style.borderWidth = `${borderPixel.value}px`;
    console.log("table border", elements.table.style.borderWidth); 
}

const generateBtn = document.querySelector(".generateBtn");
generateBtn.addEventListener("click", ()=>{
    elements.tableWrapper.innerHTML = " ";
    createTable();
    changeTableWidth();
    changeBorderWidthPixel();
    //deleteTable();
})
