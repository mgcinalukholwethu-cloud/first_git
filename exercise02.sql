CREATE DATABASE university_db;
USE university_db;

--Create a table called 'Lectures' with columns for lecture ID, name, department, email
CREATE TABLE Lectures (
    Lecture_ID INT PRIMARY KEY
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR (50) NOT NULL,
    Department VARCHAR(75) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE
);

--Insert sample data into the 'Lectures' table
INSERT INTO LECTURES ( Lecture_ID, First_Name, Last_Name,Department, Email) 
VALUES
('DR', 'Alice','Smith', 'Mathematics', 'alice.smith@university.com'),
('PROF', 'Bob','Johnson', 'Physics', 'bob.johnson@university.com'),
('DR', 'Charlie','Brown', 'Computer Science', 'charlie.brown@university.com');



### **Task 2: Add a New Column**
--Add a new column 'Office_Location' to the 'Lectures' table
ALTER TABLE Lectures
ADD Office_Location VARCHAR(50);

--Update the 'Office_Location' for each lecture
-- Update Alice Smith's office location
UPDATE Lectures
SET Room_Location = 'Room 101'
WHERE First_Name = 'Alice' AND Last_Name = 'Smith';

-- Update Bob Johnson's office location
UPDATE Lectures
SET Room_location = 'Room 202'
WHERE First_Name = 'Bob' AND Last_Name = 'Johnson';

-- Update Charlie Brown's office location
UPDATE Lectures
SET Room_location = 'Room 303'
WGERE First_Name = 'Charlie' AND Last_Name = 'Brown';

### **Task 4: Add a Default Value**
--1. Add a default value of `"General"` to the department column.
ALTER TABLE Lectures
MODIFY Department VARCHAR(75) DEFAULT 'General';

--2. Insert a new lecture without specifying the department to test the default value.
INSERT INTO Lectures (Lecture_ID, First_Name, Last_Name, Email, Office_Location)
VALUES('DR', 'Emily', 'Green', 'emily.green@university', 'Room 404');

### **Task 5: Update Data Conditionally**
--1. Update the `department` to `"Engineering"` for all lecturers whose email ends with `"@engineering.com"`.
UPDATE Lectures
SET Department = 'Engineering'
WHERE Email LIKE'%@engineering.com';

--2. Update the `department` to `"Science"` for all lecturers whose names contain `"Dr."`.
UPDATE Lectures
SET Deppartment = 'Science'
WHERE Lecturer_ID = 'DR';

### **Task 6: Practice Deleting and Viewing Data**
--1. Delete Bob Johnson’s record from the `Lecturers` table.
DELETE FROM Lectures
WHERE First_Name = 'Bob' AND Last_Name = 'Johnson';

--2. View all remaining records in the `Lecturers` table to confirm the deletion.
SELECT * FROM Lectures;

### **Challenge Task (Optional)**
--1. Add another column called phone_number (VARCHAR(15)).
ALTER TABLE Lectures
ADD Phone_Number VARCHAR(15);


--2. Update the phone_number column with the following data:
--Alice smith phone number

UPDATE Lectures
SET Phone_Number = '123-456-7890'
WHERE First_Name = 'Alice' AND Last_Name = 'Smith';

--Charlie Brown phone number
UPDATE Lectures
SET Phone_Number ='987-654-3210'
WHERE First_Name = 'Charlie' AND Last_Name = 'Brown';