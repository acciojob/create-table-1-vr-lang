function insert_Row() {
    // Get the table element by its id
    var table = document.getElementById('sampleTable');

    // Create a new row element
    var newRow = table.insertRow(0); // Inserts the row at the top (index 0)

    // Create the first cell (left cell) of the new row
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = 'New Cell1'; // Set the innerHTML to "New Cell1"

    // Create the second cell (right cell) of the new row
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = 'New Cell2'; // Set the innerHTML to "New Cell2"
}
