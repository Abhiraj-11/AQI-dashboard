# Overview

This project is an Air Quality Index (AQI) Dashboard developed using React for the frontend and Firebase for the backend. It allows users to visualize real-time air quality data from sensors (MQ135, MQ7, PM2.5) through interactive gauges and charts. The data is collected from sensors located at Assam Engineering College, and the hardware setup includes an Arduino Uno and an ESP8266 (NodeMCU) for data transmission.

# Table of Contents

Features
Installation
Usage
Project Structure
Hardware Setup
Contributing
License

# Features

Real-Time Data Visualization: View real-time air quality data through interactive gauges and charts.
Sensor Integration: Data from MQ135 (air quality sensor), MQ7 (carbon monoxide sensor), and PM2.5 (particulate matter sensor) are visualized.
Location Specific: Data is specific to the location of Assam Engineering College.
Responsive Design: The dashboard is designed to be responsive and user-friendly.
Installation
To run this project locally, follow these steps:

1. Clone the repository:

bash
Copy code
git clone https://github.com/your-username/aqi-dashboard.git
cd aqi-dashboard 2. Install dependencies:

bash
Copy code
npm install 3. Set up Firebase:

Create a Firebase project on the Firebase Console.
Add your Firebase configuration to a .env file in the root directory:
makefile
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
Run the application:

bash
npm start
The application should now be running on http://localhost:3000.

Usage
Once the application is up and running, you can view the AQI dashboard. The dashboard will display:

Gauges: Showing the real-time values of air quality parameters.
Charts: Plotting historical data to visualize trends over time.
Location Map: Indicating the sensor's location at Assam Engineering College.
Project Structure
java
Copy code
aqi-dashboard/
│
├── public/
│ ├── index.html
│ └── ...
│
├── src/
│ ├── components/
│ │ ├── Gauge.js
│ │ ├── Chart.js
│ │ └── ...
│ │
│ ├── firebase/
│ │ └── firebaseConfig.js
│ │
│ ├── App.js
│ ├── index.js
│ └── ...
│
├── .env
├── package.json
└── README.md
Hardware Setup
Components
Arduino Uno: Microcontroller for reading sensor data.
ESP8266 (NodeMCU): Wi-Fi module for transmitting data to Firebase.
Sensors:
MQ135: Air quality sensor.
MQ7: Carbon monoxide sensor.
PM2.5: Particulate matter sensor.
Connections
Connect the sensors to the Arduino Uno.
Connect the Arduino Uno to the ESP8266 (NodeMCU) for Wi-Fi capabilities.
Program the Arduino to read data from the sensors and send it to the ESP8266.
The ESP8266 will then transmit the data to Firebase in real-time.
Contributing
We welcome contributions to improve this project! Here are some ways you can help:

Bug Reports & Feature Requests: Use the Issues section to report bugs or suggest new features.
Pull Requests: Fork the repository, make your changes, and submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Thank you for using the AQI Dashboard! If you have any questions or need further assistance, feel free to contact us.
