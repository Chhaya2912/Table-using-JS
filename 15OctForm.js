function createTable() {
    const rows = document.getElementById('rows').value;
    const columns = document.getElementById('columns').value;


    if (rows <= 0 || columns <= 0) {
        alert('Please enter valid numbers for rows and columns.');
        return;
    }


    const tableContainer = document.createElement('div');
    tableContainer.id = 'table-container';
    document.body.appendChild(tableContainer);

    const table1 = document.createElement('table');


    for (let i = 0; i < rows; i++)
         {
            const tr = document.createElement('tr');
            for (let j = 0; j < columns; j++)
                {
                    let cell;
                    if (i === 0)
                        {
                        cell = document.createElement('th');
                        } 
                    else 
                    {
                        cell = document.createElement('td');
                    }
                    cell.textContent = "explorin"
                    tr.appendChild(cell);
                }
            table1.appendChild(tr);
        }
    tableContainer.appendChild(table1);
}
