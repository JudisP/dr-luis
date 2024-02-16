import { abreWhatsapp } from "@/utils/helpers";
import React from "react";

import { BsWhatsapp } from "react-icons/bs";

const WhatsappButton = () => {
  return (
    <button className="botao-whatsapp" onClick={abreWhatsapp}>
      <BsWhatsapp />
    </button>
  );
};

export default WhatsappButton;
