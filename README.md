# RBAC System
A Role-Based Access Control (RBAC) System implemented in ReactJS to manage user roles and permissions effectively. This project allows users to sign up, log in, and view their role-based access. Admin users can manage other users by toggling roles or deleting them, while viewers have restricted access.

## Features
### Authentication:

- Users can sign up or log in with their credentials.
- Role-based dashboard for **Admin** and **Viewer** roles.
### Admin Dashboard:

- View all registered users.
- Toggle user roles (Admin <-> Viewer).
- Delete users from the system.
### Viewer Dashboard:

- Access to a read-only table of registered users.

# Tech Stack
- **Frontend:** ReactJS, CSS (for styling).
- **State Management:** React Context API.
# Getting Started
## Prerequisites
Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm**
## Installation
1. ### Clone the repository:

``` bash
git clone https://github.com/UjjawalShakya/rbac-system.git
cd rbac-system
```
2. ### Install dependencies:

``` bash
npm install
```
3. ### Start the development server:

``` bash
npm start
``` 
4. ### Open the app in your browser:

- The app will run at http://localhost:3000.
# File Structure
```
src/
├── components/
│   ├── AuthForm.js      # Login and signup component
│   ├── Dashboard.js     # Admin dashboard component
├── context/
│   ├── UserContext.js   # Context API for managing state
├── styles/
│   ├── styles.css       # Custom CSS for navbar and table
├── App.js               # Main application entry point
├── index.js             # React DOM rendering
```
# Usage
### Sign Up:

- Users can sign up by providing a name, user ID, and password.
- All new users are assigned the "Viewer" role by default.
### Admin Role:

- Admin users can view all signed-up users in a table.
- Admins have the ability to toggle roles and delete users.
### Viewer Role:

- Viewers can log in and see a list of all users but cannot modify any data.
# Screenshots
## Admin Dashboard

## Viewer Dashboard

# Future Enhancements
- Add server-side integration (e.g., Node.js/Express backend).
- Add user profile management.

# Author
Developed by **Ujjawal Shakya**
Feel free to connect on [LinkedIn](https://www.linkedin.com/in/ujjawal-shakya-67aa32242/) for collaboration opportunities!
