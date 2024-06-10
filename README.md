# Overview
This project is an AQI (Air Quality Index) Dashboard built using Vite-React for the frontend and Firebase as the backend. The dashboard visualizes data from sensors (MQ135, MQ7, PM2.5) using gauges and charts, displaying real-time air quality data from Assam Engineering College. The hardware setup includes Arduino Uno and ESP8266 (NodeMCU) for data transmission.

# Features
1) Real-Time Data Visualization: Display real-time data from MQ135, MQ7, and PM2.5 sensors.
2) Interactive Gauges and Charts: Visualize sensor data using interactive gauges and charts for better understanding.
3) Location Specific Data: Data specifically from Assam Engineering College.
4) Responsive Design: Dashboard layout is responsive and accessible on various devices.
# Hardware Setup
1. Arduino Uno: Used to collect data from the sensors.
2. ESP8266 (NodeMCU): Transmits the collected data to the Firebase backend.
3. Sensors:
   MQ135: Measures air quality.
   MQ7: Measures carbon monoxide (CO) levels.
   PM2.5 Sensor: Measures particulate matter with a diameter of less than 2.5 micrometers.
# Software Setup
Frontend
1) Vite: A fast build tool and development server for modern web projects.
2) React: A JavaScript library for building user interfaces.
3) ApexCharts: For creating interactive charts.
4) react-gauge-component: For creating gauge charts.
Backend
1) Google Firebase: Used for real-time database to store and retrieve sensor data.

# Installation
Prerequisites
1) Node.js and npm installed on your machine.
2) Firebase project set up with real-time database.
Steps
1. Clone the repository:
git clone https://github.com/yourusername/aqi-dashboard.git
cd aqi-dashboard
2. Install dependencies:
npm install
3. Configure Firebase:
   - Create a Firebase project and set up the real-time database.
   - Add your Firebase project configuration to a .env file in the root directory:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project_id.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
4. Start the development server:
npm run dev

5. Build for production:
npm run build
# Usage
  - Visit the local development server at http://localhost:3000 to view the dashboard.
  - The dashboard will display real-time air quality data using gauges and charts.
  - Ensure your Arduino Uno and ESP8266 (NodeMCU) are correctly set up and transmitting data to Firebase.
# Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your changes.

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Open a pull request.
# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Contact
For any questions or suggestions, please open an issue or contact me at paulabhiraj56@gmail.com.

Thank you for using the AQI Dashboard! We hope it helps you monitor air quality effectively.
