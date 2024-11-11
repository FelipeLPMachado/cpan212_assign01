Student-Course Application
Overview
The Student-Course Application is a full-stack web application built using React for the frontend and Express for the backend. This application allows users to manage student and course information, including adding new students and courses, viewing lists, and deleting entries. It also supports filtering courses based on their status (open/closed).

Key Features
Add new students with details like name, department, semester, enrolled course, completed course, and GPA.
Add new courses with details like course name, department, and open/closed status.
View, filter, and delete students and courses.
Direct input for GPA on a scale of 0 to 10 with increments of 0.5.
Dynamic frontend updates using React and Axios for seamless data fetching.
Project Structure
/backend
├── controllers
│ ├── courseController.js
│ └── studentController.js
├── data
│ ├── courseData.js
│ └── studentData.js
├── models
│ ├── Course.js
│ └── Student.js
├── routes
│ ├── courses.js
│ └── students.js
├── app.js
├── index.js
├── package.json
/client
├── public
├── src
│ ├── components
│ │ ├── AddCourse.js
│ │ ├── AddStudent.js
│ │ ├── CourseList.js
│ │ └── StudentList.js
│ ├── api.js
│ ├── App.js
│ ├── index.js
│ └── index.css
├── package.json

Prerequisites
Make sure you have the following installed:

Node.js (v14 or higher)
npm (v6 or higher)
Installation
1. Clone the repository
git clone https://github.com/FelipeLPMachado/cpan212_assign01.git
cd student-course-application

2. Install dependencies
cd into the root folder of the project and run:
npm install

Usage
Running the Application
To run both the backend and frontend concurrently, use:
npm start

The application will start on http://localhost:3000 with the backend server running on http://localhost:5000.

API Endpoints
Student Routes
GET /api/students - Fetch all students
GET /api/students/:id - Fetch a specific student by ID
POST /api/students - Add a new student
PUT /api/students/:id - Update an existing student
DELETE /api/students/:id - Delete a student by ID
Course Routes
GET /api/courses - Fetch all courses
POST /api/courses - Add a new course
PUT /api/courses/:id - Update a course's status (open/closed)
DELETE /api/courses/:id - Delete a course by ID
GET /api/courses/filter?isOpen=true - Filter courses by open status
Usage Instructions
Adding a Student
Navigate to the "Add Student" form on the homepage.
Enter the student's name, department, semester, enrolled course, completed course, and GPA (scale: 0-10).
Click "Add Student" to submit the form.
The new student will appear in the list below with the entered details.
Adding a Course
Navigate to the "Add Course" form.
Enter the course name, department, and status (open/closed).
Click "Add Course" to submit the form.
The new course will appear in the course list.
Deleting Entries
To delete a student or course, click the "Delete" button next to the entry.
Technologies Used
Frontend: React, Axios
Backend: Express, Node.js
Styling: CSS (custom)
API Requests: Axios
