import React, { useState } from "react"; 
import { EPAGES } from "../../App"; 
import "./Heroes.css"; 
import SportikPot from "./component/Sportik"; 
import HumanitarianPot from "./component/Humanitarian"; 
import TechguyPot from "./component/Techguy"; 
 
export enum HEROES { 
    SPORTIK, 
    HUMANITARIAN, 
    TECHGUY, 
} 
interface IHeroesProps { 
    epages: Function; 
} 
const HeroesPot: React.FC<IHeroesProps> = ({ epages }) => { 
    const [heroes, setHeroes] = useState<HEROES>(HEROES.SPORTIK); 
    return ( 
        <div className="container-Heroes">
            <button onClick={() => epages(EPAGES.MENU)} className="arrow-1-heroes"></button> 

            <div>
            {heroes === HEROES.SPORTIK ? ( 
               <SportikPot heroes={setHeroes} /> 
            ) : heroes === HEROES.HUMANITARIAN ? ( 
               <HumanitarianPot heroes={setHeroes} /> 
            ) : heroes === HEROES.TECHGUY ? ( 
               <TechguyPot heroes={setHeroes} />           
            ) : ( 
               <></> 
            )}</div>
        </div> 
           ); 
}; 
 
export default HeroesPot;
