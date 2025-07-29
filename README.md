# Fit Foodie

*Fit Foodie* is a web-based diet management system built to assist users in creating personalized diet plans with the help of professional dietitians. The project replaces traditional manual methods of health management with an efficient and user-friendly digital platform.

## 🎯 Objectives

- Design and develop a platform for dietitians to manage user information.
- Allow users to register and book appointments.
- Keep track of user data such as age, weight, health issues.
- Manage and track subscription plans and payment details.
- Generate automated diet plans.
- Enable users to share their experiences.
- Provide a secure login system and token generation for sessions.

## 🧩 Features

- 🔐 User login & registration
- 🧾 Dietitian management
- 💳 Payment & subscription tracking
- 🧑‍⚕ Admin portal
- 📑 Diet plan generation
- 📲 Token-based appointment system
- 📄 Clean and structured data handling

## 💻 Tech Stack

| Layer     | Technologies Used     |
|-----------|------------------------|
| Frontend  | HTML, CSS, JavaScript |
| Backend   | PHP                   |
| Database  | MySQL                 |

## 📁 Project Structure

fit-foodie/
│
├── index.html # Home/Login page
├── register.html # User registration form
├── about.html # Info about the platform
├── pricing.html # Subscription details
├── dietitian.php # Backend logic for dietitian module
├── token.php # Token generation logic
├── db/ # Database scripts and table structure
└── README.md # Project documentation

## 🛠 System Requirements

### Hardware
- Intel Core i7-1065G7 or higher
- Minimum 16GB RAM

### Software
- Web browser (Chrome/Firefox)
- PHP 7.x or above
- MySQL server
- Apache server (e.g., XAMPP or WAMP)

## 🧑‍💻 How to Run the Project

```bash
# Step 1: Clone this repo
git clone https://github.com/your-username/fit-foodie.git

# Step 2: Move the project into your server directory (e.g., htdocs for XAMPP)

# Step 3: Import the MySQL database (included in db/ folder)

# Step 4: Start Apache and MySQL

# Step 5: Open the browser and visit
http://localhost/fit-foodie/index.html

Database Tables (Simplified)
User: user_id, name, age, height, weight, issue

Dietitian: dietitian_id, name, contact, specialization

Admin: username, password

Payment: payment_id, amount, date

⚠ Limitations
User may input incorrect data.

Vulnerable to malicious hacks if proper security isn't implemented.

🔮 Future Enhancements
Integrate video workout plans

Add sleep tracking module

Nutritionist chat or live sessions

📚 References
w3schools

YouTube Tutorials

General Web Development Docsie
