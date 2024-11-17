function insert_Row() {
    //Write your code here
	// Function to insert a new row at the top of the table
function insert_Row() {
    // Get the table element by its id
    var table = document.getElementById("sampleTable");

    // Create a new row at the top of the table (index 0)
    var newRow = table.insertRow(0);

    // Create the first cell in the new row
    var cell1 = newRow.insertCell(0);
    // Set the content of the first cell
    cell1.textContent = "New Cell1";

    // Create the second cell in the new row
    var cell2 = newRow.insertCell(1);
    // Set the content of the second cell
    cell2.textContent = "New Cell2";
}

  
  
}
