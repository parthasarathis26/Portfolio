const express = require("express");
const cors = require("cors");
const xlsx = require("xlsx");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON data

// Path to the Excel file where the data will be stored
const excelFilePath = "contactFormData.xlsx";

// Function to write data to Excel file
const writeToExcel = (data) => {
  // Check if the Excel file already exists
  let workbook;
  if (fs.existsSync(excelFilePath)) {
    // If file exists, read the existing file
    workbook = xlsx.readFile(excelFilePath);
  } else {
    // If file doesn't exist, create a new workbook
    workbook = xlsx.utils.book_new();
  }

  // Check if the sheet "ContactForm" already exists
  let worksheet;
  if (workbook.Sheets["ContactForm"]) {
    worksheet = workbook.Sheets["ContactForm"];
  } else {
    // If the sheet doesn't exist, create a new one
    worksheet = xlsx.utils.aoa_to_sheet([["First Name", "Last Name", "Email", "Phone", "Message"]]);
    xlsx.utils.book_append_sheet(workbook, worksheet, "ContactForm");
  }

  // Append new data to the worksheet
  const newRow = [data.firstName, data.lastName, data.email, data.phone, data.message];
  xlsx.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

  // Write the updated workbook to the file
  xlsx.writeFile(workbook, excelFilePath);
};

// POST route to handle contact form submission
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Store data in Excel
  const formData = { firstName, lastName, email, phone, message };
  writeToExcel(formData);

  // Respond with success message
  return res.status(200).json({ code: 200, message: "Data stored successfully" });
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
