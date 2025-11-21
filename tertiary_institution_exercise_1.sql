--- Tertiary Institution Exercise 1
--- Create Students Table
CREATE TABLE Students(
    Student_ID INT PRIMARY KEY,
    Firts_Name VARCHAR(50),
    Last_Name VARCHAR(50),
    Major VARCHAR(100),
    Year_Of_Study INT

);

---Create Courses Table
CREATE TABLE Courses(
    Course_ID INT PRIMARY KEY,
    Course_Name VARCHAR(100) Not NULL,
    Department VARCHAR(100),
    Credit INT,
);

---Create Enrollments Table
CREATE TABLE Enrollments(
    Enrollment_ID INT PRIMARY KEY,
    Student_ID INT,
    Course_ID INT,
    Enrollment_Date DATE,
    FOREIGN KEY (Student_ID) REFERENCES STudents(Student_ID),
    FOREIGN KEY(Course_ID) REFERENCES Courses(Course_ID)
);

--Insert Data into Students Table
Insert INTO Students(Student_ID, Firts_Name, Last_Name,Major)
, Year_Of_Study)
vALUES
(1, 'Lukhozo', 'Mabena', 'Computer Science',2),
(2, 'Brian', 'Mandlaenkosi','Applied Business Law',3)
(3, 'Simosibucayi', 'Mthendeleko','Business Admintdration',1) 
(4, 'Alice', 'Johnson', 'Data Science',3),
(5, 'Mike', 'Smith' , 'Information Technology',3);

--Insert Data into Courses Table
INSERT INTO Courses(Course_ID, Course_Name, Department, Credit),
vALUES
(100,'Database systems','Information Technology',3),
(101,'Business Law','Law',4),
(102,'Data Analysis','Data Science',3),
(103,'Software Engineering','Computer Science',4),
(104,'Marketing Principles','Business Administration',3);

--Insert Data into Enrollments Table
INSERT INTO Enrollments(
Enrollment_ID, Student_ID, Course_ID, Enrollment_Date
)
vALUES
(1, 1, 100, '2025-11-20'),
(2, 2, 101, '2025-05-16'),
(3, 3, 104, '2025-01-17'),
(4, 4, 102, '2025-01-18'),
(5, 5, 103, '2025-01-19');
-- Alice also enrolls in Software Engineering
    
    