# React-School-Project
 
Student Test Results App - React Project
Overview
This project is a Student Test Results Management App built using React. It is designed for teachers to create and manage their students' names and last test results. The app provides a user-friendly interface where teachers can input test results, which parents can view to keep track of their children's academic progress.


This application is still in development mode. More features are on the way.

Features
1. Student Test Results Creation
Teachers can create records for each student, including their name, test title, and the results of the last test.
Dynamic forms allow teachers to add and remove test records as needed.
Each student entry includes fields for multiple-choice test results, allowing teachers to mark answers as correct or incorrect.
2. 
Users can upload images when creating or editing quizzes.
Images are handled using FormData and submitted to the backend API.
3. Dynamic Form Management (Custom Hook)
The app utilizes a custom useForm hook to handle form data, state, and submission logic.
This hook manages the quiz data and updates the form dynamically as questions and options are added or modified.
4. Data Persistence
Teachers' input is stored in a backend database via an API, ensuring that all data is saved and retrievable.
The app uses POST and GET requests to save and display student data.

5. API Integration
CThe app integrates with a backend API for saving and retrieving student test results.
Custom API endpoints are available for:
Submitting new student test results.
Retrieving all stored results.
Viewing detailed test results for individual students.

6. Parent Access
Parents can access and view their children's test results through the app. Teachers can share results with parents by directing them to specific pages or through email communication.



Tech Stack
React: Frontend library for building user interfaces.
React Router: For navigation and routing between components.
FormData: Used to handle form submissions with files and data.
Custom Hooks: For managing form state and logic.
Zustand or useContext: (If used) For state management across components.
API: Custom API to save and retrieve quiz data from the backend.
Installation
Clone the repository:

git clone https://github.com/your-username/your-project-name.git
Install dependencies in the client folder:
cd ./client
npm install
Start the development server in the client folder:
npm run dev


Starting the Backend Server:

Open a separate terminal window.
Navigate to the server folder - cd./server
Run the following command to start the server:
node server.js

