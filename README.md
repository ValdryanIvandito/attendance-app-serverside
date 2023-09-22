# Simple Attendance Web App
I created this simple web application to demonstrate my abilities and knowledge after learning to become a Fullstack Developer for 8 months. This web application was inspired by the attendance system at my brother's school. However, in my project this time, I will create a simple version of the attendance web application and then in the future I will develop it again. There are some limitations and scope of the problems in creating this web application:
- This attendance web application is still very simple, there is no feature to access the camera device for selfie photos and also there is no user location feature with GPS, the web application created focuses on the CRUD (Create, Read, Update, Delete) feature.
- Frontend and backend run on localhost, not deployed or hosted on VPS.
- Using dummy data, username does not use someone else's identity.
- Users, both admins and students, are assumed to have been registered first so that the data is already in the database.
- There is no password change feature yet.
- There is no automatic attendance data generation feature yet.

# How to run this project
```bash
git clone https://github.com/ValdryanIvandito/attendance-app-serverside.git
cd attendance-app-serverside.git
npm install
npm run start
```
# This web application uses MERN (Mongodb, Express.js, React.js, Node.js) as its main techstack, here is a list of the techstacks used:
- React.js (Vite.js)
- TailwindCSS
- Node.js
- Mongodb
- The main modules that I use are as follows:
  - Express.js
  - Mongoose
  - Jsonwebtoken
  - Bcrypt
  - Nodemon
  - Body-parser
  - Cors
  - React-router-dom
  - Axios
  - Dotenv
  - Eslint 

# The features of this web application are as follows:
- CRUD (Create, Read, Update, Delete) for attendance data.
- Responsive Design, the UI will automatically adapt to mobile, tablet and desktop screens.
- Validate data input when filling out the attendance form.
- Authorization in terms of accessing web pages, for example students cannot access panel pages that are only permitted to be accessed by the admin or school administrators, and vice versa admins or school administrators cannot access the attendance data input page.

# A brief summary of the RESTful API in a simple attendance web application:
1.	Login
    - URL : /api/login 
    - Method: POST
    - Description: User authentication and authorization

2.	Read the list of students
    - URL : /api/students/:class_
    - Method: GET
    - Description: Retrieves all student lists based on the class_ parameter

3.	Read the list of activities
    - URL : /api/activities/:location
    - Method: GET
    - Description: Retrieve all activity lists based on the location parameter

4.	Read the attendance list
    - URL : /api/attendances/:class_/:date
    - Method: GET
    - Description: Retrieve all attendance lists based on class_ and date parameters

5.	Create new attendance data
    - URL : /api/attendances
    - Method: POST
    - Description: Create new attendance data

6.	Update attendance data
    - URL : /api/attendances/:student_id
    - Method: PUT
    - Description: Update attendance data based on the student_id parameter

7.	Delete attendance data
    - URL: /api/attendances/:student_id
    - Method: DELETE
    - Description: Delete attendance data based on the student_id parameter

For more details, how this application works and is used will be shown in the video that I posted on my linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7110689710649339904/

# Technical Documentation References :
- https://vitejs.dev/guide/ 
- https://tailwindcss.com/docs/guides/vite 
- https://tailwindcomponents.com/cheatsheet/
- https://expressjs.com/
- https://mongoosejs.com/docs/guide.html
- https://www.npmjs.com/package/jsonwebtoken
- https://www.npmjs.com/package/bcrypt
- https://www.npmjs.com/package/cors
- https://axios-http.com/docs/intro 

# Tutorial References :
- https://www.udemy.com/course/react-the-complete-guide-incl-redux/
- https://youtu.be/z3slaXqmkT0?list=PLFIM0718LjIUHFRMzPJ0wGjx9_NlC5d1h 
- https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD 
