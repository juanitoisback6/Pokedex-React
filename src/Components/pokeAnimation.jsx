import { useState, useContext, useEffect } from "react";
import closedPokedex from  '../assets/closedPokedex.svg'; 
import openpoke1 from '../assets/openpoke1.svg';
import closedPoke1 from '../assets/closedPoke1.svg';
import openpoke from '../assets/openpoke.svg';
import { Pokecounter } from '../App';

export default function PokeAnimation (){


          const {clicked, showPokedex, setShowPokedex} = useContext(Pokecounter);
          const [fade, setFade] = useState(false);
          const[image,setImage]=useState();

const imgs=[

          closedPokedex,
          closedPoke1,
          openpoke1,
          openpoke
]

 useEffect(() => {
    if (clicked) {

      setTimeout(() => setImage(`url('${imgs[0]}')`), 500);
      setTimeout(() => setImage(`url('${imgs[1]}')`), 700);
      setTimeout(() => setImage(`url('${imgs[2]}')`), 800);
      setTimeout(() => {
        setImage(`url('${imgs[3]}')`);
        setFade(true);
      }, 1000);
      setTimeout(() => {

          setShowPokedex(true);
 }, 2300)
    }
  }, [clicked]);
       
return(
          <>
          <section className={`animsection ${fade ? "fade-in": ""} ${showPokedex ? "hidden": ""}`}  style={ {width:"50vw", height:"50vh" ,backgroundImage: `${image}`}}>

          </section>
          </>
)
}