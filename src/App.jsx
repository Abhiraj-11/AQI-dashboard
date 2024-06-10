import { useState } from "react";
import {
  About,
  ContactUs,
  Home,
  Profile,
  SignIn,
  SignUp,
} from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home login={true} setLogin={setLogin} />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/SignIn"
            element={<SignIn login={login} setLogin={setLogin} />}
          />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
