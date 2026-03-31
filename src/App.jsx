import { useState, createContext, useEffect } from 'react';
import Pokedex from './Components/pokedex';
import PokeAnimation from './Components/pokeAnimation';
 
import imagenTitulo from './assets/PokedexTitleSVG.svg';
import PokeClickHere from './Components/pokeClickHere';
 import './App.css'
 
export const Pokecounter = createContext();


function App() {

{/*To know if the closed pokedex was opened*/}

const [clicked, setClicket]=useState(false);

{/*To know when the opened pokedex can be displayed*/}

  const [showPokedex, setShowPokedex] = useState(false);

  function chageHidde (){
setClicket(true);
  }

  {/*data of the fetch*/}
  const [dataS, setDatas] = useState([]);

  {/*data of the species fetch*/}

  const [speciesFetch, setSpeciesFetch] = useState([]);


    {/*State of the input*/}
  const [searchInput, setSearchInput] = useState("");

  const [numPok, setNumPok]= useState(1);



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


{/*Function to fetch the input search */}


async function loadInputPrincipal(pokemon) {
 
 let array=[];
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const data = await getData(url);
        

        if (data) {
           
             array=[data];
             setNumPok(array[0].id)
        }
       
     
 setDatas(array);
 
 console.log(dataS.length)
}
console.log(dataS.length)
console.log("numpok:" + numPok)

async function loadInputSpecies(pokemon) {
 
 let array=[];
        const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
        const data = await getData(url);
       
       
        if (data) {
           
             array=[data];
             
        }
       
     
 setSpeciesFetch(array);
 
}


async function loadPokedex() {

   let array;
 
        const url = `https://pokeapi.co/api/v2/pokemon/${numPok}`;
        const data = await getData(url);
       
       
        if (data) {
           
             array=[data];
              setDatas(array);
        }
        

}

 useEffect(() => {
 
    loadPokedex();

            },
                [numPok]);

        



// Species fetch
                 useEffect(() => {
 
      async function loadSpecies() {
if(dataS){
  let array = [];

    for (let i = 0; i <= dataS.length - 1; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon-species/${dataS[i].name}`;
        const data = await getData(url);
       
       
        if (data) {
           
             array=[...array,data];
             
        }
       
    }
 setSpeciesFetch(array);
 
}
 
}
loadSpecies();

            },
                [dataS]);

               
console.log(speciesFetch);
   

console.log(dataS)

  function changeNumPok () {


    if(numPok<1000){
 
        setNumPok(prevNumPok => prevNumPok + 1);

    console.log(numPok)

    }else{
         setNumPok(0)
    }
   
  }

   function changeNumPokSubs () {


    if(numPok <= 1){
 
    setNumPok(prevNumPok => prevNumPok + 0);

    }else if(numPok<=1000 ){
         setNumPok(prevNumPok => prevNumPok - 1);
    }
   
  }

function resetNum (){
  setNumPok(1);
}




  return (
<>


   
  <Pokecounter.Provider value={{ numPok, setNumPok, speciesFetch, changeNumPok, changeNumPokSubs, clicked, setClicket, chageHidde, showPokedex, setShowPokedex, dataS, searchInput, setSearchInput, loadInputPrincipal, loadInputSpecies, resetNum}}>

   <main>
<img
   className='title'        
   draggable="false"
   src={imagenTitulo}
   alt="Pokédex title" />
    <PokeClickHere/>
    <PokeAnimation />
     <Pokedex/>
   </main>

   </Pokecounter.Provider>
</>
  )
}

export default App

