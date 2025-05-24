interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Rose",
  lastName: "Mwangi",
  age: 22,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "James",
  lastName: "Kimani",
  age: 23,
  location: "Mombasa",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
table.style.borderCollapse = "collapse";

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "8px";

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);