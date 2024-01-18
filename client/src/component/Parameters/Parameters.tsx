import React from "react";
import { EPAGES } from "../../App";
import "./Parameters.css";

interface IParameters {
  epages: Function;
}

const Parameters: React.FC<IParameters> = ({ epages }) => {
  return (
    <div className="container-parameters">
      <button onClick={() => epages(EPAGES.MENU)} className="arrow-parameters"></button>
      <div className="rectangle">
        <div className="inner-rectangle">
          <div className="line"></div>
          <div className="text-container">
            <div className="text">Громкость звуков</div>
            <div className="lineZ"></div>
            <div className="numbersZ">60</div>

            <div className="text">Громкость музыки</div>
            <div className="lineM"></div>
            <div className="numbersM">77</div>

            <div className="text">Полноэкранный режим</div>
            <div className="second-rectangle">
              <div className="left-side">ВЫКЛ</div>
              <div className="right-side">ВКЛ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parameters;
