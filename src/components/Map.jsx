import { Box } from "@mui/material";
import React from "react";

const Map = () => {
  return (
    <Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.910808957769!2d91.66178863946506!3d26.141998119617906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a4555cf6051a5%3A0x64825bdb6f421d41!2sDepartment%20of%20Electronics%20%26%20Telecommunication%20Engineering%2C%20Assam%20Engineering%20college!5e0!3m2!1sen!2sin!4v1718015707380!5m2!1sen!2sin"
        width="446"
        height="394"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default Map;
