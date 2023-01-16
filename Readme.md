# REST API for attendance app

A simple REST for the attendance app made in ReactJs

# Dependencies 

- express
- mongoose
- express-async-handler

# API endpoints

| Endpoint  | Method | Actions |
| ------------- | ------------- | ------------- |
| /api/students  | GET | retrieve all student data |
| /api/students/roll  | GET | retrieve student data for given roll |
| /api/students | POST | Post a new student data to database |
| /api/students/roll | PATCH | Edit checkout time for particular student |
| /api/students/roll | DELETE | Delete a particular student from database |
