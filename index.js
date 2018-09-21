const elements = {
    rowNum : document.querySelector('#rowNum'),
    colNum : document.querySelector('#colNum'),
    tableWrapper : document.querySelector('.table-wrapper')
}

const createTable = ()=>{

    elements.tableWrapper.innerHTML = "";
    console.log("warpper is emtpy?", elements.tableWrapper);

    //Create Table HTML elements
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headTr = document.createElement('tr');
    const tblBody = document.createElement('tbody');
  
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
                headTr.appendChild(th);
            }
            tableHead.appendChild(headTr);
            table.appendChild(tableHead);

        } else{
            for(let j=0; j < colNum.value; j++){
                console.log("tbody - row index : 0", j);
                let td = document.createElement('td');
                let tdText = document.createTextNode(`row ${i}, col ${j}`);
                td.appendChild(tdText);
                tr.appendChild(td);
            }
            tblBody.appendChild(tr);
        }   
    }
    table.appendChild(tblBody);
    elements.tableWrapper.appendChild(table);
    return table;
}


const changeTableWidth =(table)=>{
    let tableWidth = document.querySelector('#tableWidth');
    table.style.width = `${tableWidth.value}%`;
}

const changeBorderWidthPixel = (table) => {
    let borderPixel = document.querySelector('#borderPixel');
    table.style.borderWidth = `${borderPixel.value}px`;
}


const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", ()=>{
    let newtable = createTable();
    changeTableWidth(newtable);
    changeBorderWidthPixel(newtable);
})
