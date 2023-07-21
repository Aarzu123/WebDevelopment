
const button = document.getElementById("searchButton");
const textBox = document.getElementById("nameTextBox");
const table = document.querySelector("table");
button.addEventListener("click", function() {
  const name = textBox.value;
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    if (row.cells[0].textContent === name) {
      const designation = row.cells[1].textContent;
      console.log(designation);
      document.write(designation)
      
    }
  }
});

