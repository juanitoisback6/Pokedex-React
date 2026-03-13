import { useState, createContext, useEffect } from 'react';
import Pokedex from './Components/pokedex';


export const Pokecounter = createContext();


function App() {



  const [dataS, setSData] = useState([]);
  const [numPok, setNumPok]= useState(0);



  async function getData(url) {
    try {
        
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    } 
}

async function loadPokedex() {

   
    for (let i = 1; i <= 20; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const data = await getData(url);
        
        if (data) {
            
            setSData(prevDataS=>[...prevDataS, data]);
        }
    }
 
}

 useEffect(() => {
  
loadPokedex();

}, []);


  function changeNumPok () {

    setNumPok(prevNumPok => prevNumPok+1);
  }






  return (
    <>
           <Pokecounter.Provider value={{ numPok, setNumPok, changeNumPok}}>

            <Pokedex name={dataS.length&&dataS[numPok].name} />
          
         </Pokecounter.Provider>
    </>
  )
}

export default App
