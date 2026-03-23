
import clickHere from '../assets/ClickHereSVG.svg';
import closedPokedex from  '../assets/closedPokedex.svg'; 
import {useContext} from "react";
import { Pokecounter } from '../App';



export default function PokeClickHere () {

  const {clicked, setClicket, chageHidde} = useContext(Pokecounter);
 
 

return(
<>
 <section className={ clicked && "hidden"}>
   

     <img 
     className='clickHere'
     draggable="false" 
     src={clickHere} 
     alt="Image of CLICK HERE!"  />
     <img 
     className='closedPokedex'
     draggable="false" 
     src={closedPokedex} 
     alt="Closed pokédex"
     onClick={chageHidde} />

 </section>
</>
)
}