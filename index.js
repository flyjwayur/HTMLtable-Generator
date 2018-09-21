const elements = {
    rowNum : document.querySelector('#rowNum'),
    colNum : document.querySelector('#colNum'),
    tableWrapper : document.querySelector('.table-wrapper')
}

const createTable = () => {

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

const changeTableWidth =  newtable => {
    let tableWidth = document.querySelector('#tableWidth');
    newtable.style.width = `${tableWidth.value}%`;
}

const changeBorderWidthPixel = newtable => {
    let borderPixel = document.querySelector('#borderPixel');
    newtable.style.borderWidth = `${borderPixel.value}px`;
}

const changeTableBgColor = newtable => {
    let tableBgColor = document.querySelector('#tableBgColor');
    newtable.style.backgroundColor = tableBgColor.value;
}

const changeHeadBgColor = () => {
    let headBgColor = document.querySelector('#headBgColor');
    let tableHead =  document.querySelector('thead');
    tableHead.style.backgroundColor = headBgColor.value;
}

const changeBodyBgColor = () => {
    let bodyBgColor = document.querySelector('#bodyBgColor');
    let tableBody = document.querySelector('tbody');
    console.log("bodyBgColor", bodyBgColor);
    console.log("tableBody",tableBody);
    tableBody.style.background = bodyBgColor.value;
}

const changeBorderColor = newtable => {
    let borderColor = document.querySelector('#borderColor');
    let allTableTrs = document.querySelectorAll('tr');
    let allTableThs = document.querySelectorAll('th');
    let allTableTds = document.querySelectorAll('td');
    let borderStyle = `2px solid ${borderColor.value}`;

    newtable.style.border = borderStyle;

    allTableTrs.forEach( tr => {
        tr.style.border = borderStyle;
    })
    allTableThs.forEach( th => {
        th.style.border = borderStyle;
    })
    allTableTds.forEach( td => {
        td.style.border = borderStyle;
    })
}

const changeFontColor = newtable => {
    let fontColor = document.querySelector("#fontColor");
    newtable.style.color = fontColor.value;
}

const changeFontType = newtable => {
    let fontType = document.querySelector("#fontType");
    newtable.style.fontFamily = fontType.value;
}

const changeFontSize = newtable => {
    let sizeForFont = document.querySelector("#fontSize");
    newtable.style.fontSize = sizeForFont.value;
}

const changeTextAlign = newtable => {
    let AlignForText = document.querySelector("#AlignForText");
    newtable.style.textAlign = AlignForText.value;
}

const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", ()=>{
    let newtable = createTable();
    changeTableWidth(newtable);
    changeBorderWidthPixel(newtable);
    changeTableBgColor(newtable);
    changeHeadBgColor();
    changeBodyBgColor();
    changeBorderColor(newtable);
    changeFontColor(newtable);
    changeFontType(newtable);
    changeFontSize(newtable);
    changeTextAlign(newtable);
})
