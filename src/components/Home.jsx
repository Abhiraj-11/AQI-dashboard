import { Box } from "@mui/material";
import Navbar from "./Navbar";
import DisplayBox from "./DisplayBox";
import {} from "../firebase/FirebaseConfig";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import Footer from "./Footer";
const Home = ({ login, setLogin }) => {
  const [sensorData, setSensorData] = useState({});

  const fetchData = async () => {
    const db = getDatabase();
    const sensorDataRef = ref(db, "Sensor/");
    await onValue(sensorDataRef, (snapshot) => {
      const data = snapshot.val();
      setSensorData(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { MQ135, MQ7, PM25 } = sensorData;

  const aqi = Math.round(Math.max(MQ135, MQ7, PM25));

  return (
    <>
      <Navbar login={login} setLogin={setLogin} />
      <Box
        margin={10}
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <DisplayBox
          field="MQ-135 (CO2, NH3, S, NOx, Smoke)"
          type="gauge"
          sensorValue={MQ135}
          unit="ppm"
          maxValue="300"
        />
        <DisplayBox
          field="MQ-7 (CO)"
          type="gauge"
          sensorValue={MQ7}
          unit="ppm"
          maxValue="50"
        />
        <DisplayBox
          field="PM-2.5 (GP2Y1010AU0F)"
          type="gauge"
          sensorValue={PM25}
          unit="µg/m3"
          maxValue="250"
        />
        <DisplayBox
          field="Air Quality Index"
          type="gauge"
          sensorValue={aqi}
          unit="AQI"
          maxValue="500"
        />
        <Box>
          <DisplayBox
            field="MQ-135"
            type="graph"
            sensorValue={MQ135}
            maxValue="300"
          />
          <DisplayBox
            field="MQ-7"
            type="graph"
            sensorValue={MQ7}
            maxValue="50"
          />
          <DisplayBox
            field="PM-2.5"
            type="graph"
            sensorValue={PM25}
            maxValue="100"
          />
        </Box>
        <DisplayBox field="Map" type="map" />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
