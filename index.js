//Global object which contains HTML elements
const elements = {
  rowNum: document.querySelector("#rowNum"),
  colNum: document.querySelector("#colNum"),
  tableWrapper: document.querySelector(".table-wrapper")
};


//Create Head cells in table
const createHeadCells = (colNum, table, accRow) => {

  const tableHead = document.createElement("thead");
  const headTr = document.createElement("tr");

  [...Array(parseInt(colNum))].reduce((accCol, curr, index) => {
    let th = document.createElement("th");
    let thText = document.createTextNode(`Head ${index}`);
    
    th.appendChild(thText);
    headTr.appendChild(th);
    tableHead.appendChild(headTr);
    table.appendChild(tableHead);

  }, accRow);
};


//Create body cells in table
const createBodyCells = (colNum, table, accRow, rowIndex, tr) => {

  const tblBody = document.createElement("tbody");

  [...Array(parseInt(colNum))].reduce((accCol, curr, index) => {
    let td = document.createElement("td");
    let tdText = document.createTextNode(`row ${rowIndex}, col ${index}`);
    
    td.appendChild(tdText);
    tr.appendChild(td);
    tblBody.appendChild(tr);
    table.appendChild(tblBody);
  }, accRow);
};


//Create new table with row & col numbers' input
const createTable = (rowNum, colNum) => {

  //Clean the table elements inside of table Wrapper
  elements.tableWrapper.innerHTML = "";

  //Create Table HTML elements
  const table = document.createElement("table");

  //Create Table Rows
  [...Array(parseInt(rowNum))].reduce(
    (accRow, curr, rowIndex) => {
      const tr = document.createElement("tr");

      table.appendChild(tr);
      elements.tableWrapper.appendChild(table);
      console.log("accRow", accRow);
      console.log("index", rowIndex);

      //Create table Cols :  in first row, it creates Head cells. After first row, it creates body cells
      rowIndex == 0
        ? createHeadCells(colNum, table, accRow)
        : createBodyCells(colNum, table, accRow, rowIndex, tr);

      //Append table to table wrapper
      elements.tableWrapper.appendChild(table);

    }, table);

  return table;
};



/****** Functions for giving styles to tables  *******/

const changeTableWidth = newtable => {
  let tableWidth = document.querySelector("#tableWidth");
  newtable.style.width = `${tableWidth.value}%`;
};

const changeBorderWidthPixel = newtable => {
  let borderPixel = document.querySelector("#borderPixel");
  newtable.style.borderWidth = `${borderPixel.value}px`;
};

const changeTableBgColor = newtable => {
  let tableBgColor = document.querySelector("#tableBgColor");
  newtable.style.backgroundColor = tableBgColor.value;
};

const changeHeadBgColor = () => {
  let headBgColor = document.querySelector("#headBgColor");
  let tableHead = document.querySelector("thead");
  tableHead.style.backgroundColor = headBgColor.value;
};

const changeBodyBgColor = () => {
  let bodyBgColor = document.querySelector("#bodyBgColor");
  let tableBody = document.querySelector("tbody");

  tableBody.style.background = bodyBgColor.value;
};

const changeBorderColor = newtable => {
  let borderColor = document.querySelector("#borderColor");
  let allTableTrs = document.querySelectorAll("tr");
  let allTableThs = document.querySelectorAll("th");
  let allTableTds = document.querySelectorAll("td");
  let borderStyle = `2px solid ${borderColor.value}`;

  newtable.style.border = borderStyle;

  allTableTrs.forEach(tr => {
    tr.style.border = borderStyle;
  });
  allTableThs.forEach(th => {
    th.style.border = borderStyle;
  });
  allTableTds.forEach(td => {
    td.style.border = borderStyle;
  });
};

const changeFontColor = newtable => {
  let fontColor = document.querySelector("#fontColor");
  newtable.style.color = fontColor.value;
};

const changeFontType = newtable => {
  let fontType = document.querySelector("#fontType");
  newtable.style.fontFamily = fontType.value;
};

const changeFontSize = newtable => {
  let sizeForFont = document.querySelector("#fontSize");
  newtable.style.fontSize = sizeForFont.value;
};

const changeTextAlign = newtable => {
  let AlignForText = document.querySelector("#AlignForText");
  newtable.style.textAlign = AlignForText.value;
};


/******** table generate button and event listener ********/
const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", () => {
  let newtable = createTable(elements.rowNum.value, elements.colNum.value);
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
});
