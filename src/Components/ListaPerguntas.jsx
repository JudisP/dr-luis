import { useState } from "react";

import setaDireita from "@/shared/icons/seta-direita.svg";

const ListaPerguntas = ({ pergunta, resposta }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAnswer = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="pergunta-resposta" onClick={toggleAnswer}>
      <div className="pergunta">
        <img src={setaDireita} /> {pergunta}
      </div>
      <div className={`resposta ${isExpanded ? "expanded" : ""}`}>
        <div className="resposta-wrapper">{resposta}</div>
      </div>
    </div>
  );
};
export default ListaPerguntas;
