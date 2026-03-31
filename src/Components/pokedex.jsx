import { Pokecounter } from "../App"
import { useContext, useEffect, useState } from "react"


export default function Pokedex (props){

    {/* CONTEXT*/}
const {showPokedex, dataS, numPok, changeNumPok, changeNumPokSubs, speciesFetch, searchInput, setSearchInput, loadInputPrincipal,loadInputSpecies, resetNum}=useContext(Pokecounter);


useEffect (()=>{

    const delayDebounce = setTimeout(()=>{

        if(searchInput){
            loadInputPrincipal(searchInput);
            loadInputSpecies(searchInput);
        }


    }, 500);

 return () => clearTimeout(delayDebounce);
}, [searchInput]);



return(
<>


{/* Contenedor de la Pokédex */}
<div className={`${showPokedex ? "": "hidden"} ${showPokedex ? "fade-in": ""}`} > 
        <div id="pokedex" >
            {/* Tapa de la Pokédex */}
            <div id="right-tape"></div>
        </div>
        {/* Parte Izquierda de la Pokédex */}
        <div id="left">
            {/* Logo de la Tapa */}
             
            {/* Fondo Parte Superior Izquierda */}
            <div id="bg-curve1-left"></div>
             {/* Fondo Parte Inferior Izquierda */}
            <div id="bg-curve2-left"></div>
            {/* Luces Parte Superior Izquierda */}
            <div id="curve1-left">
                <div id="button-glass">
                    <div id="reflect"> </div>
                </div>
                <div id="mini-button-glass1"></div>
                <div id="mini-button-glass2"></div>
                <div id="mini-button-glass3"></div>
            </div>
             {/* Bisagra Parte Central */}
            <div id="curve2-left">
                <div id="junction">
                    <div id="junction1"></div>
                    <div id="junction2"></div>
                </div>
            </div>
            {/* Pantalla donde se muestra el Pokémon */}
            <div id="screen">
                <div id="top-picture">
                    <div id="button-top-picture1"></div>
                    <div id="button-top-picture2"></div>
                </div>
                <div id="picture">
                     
                <img src={dataS.length?dataS[0].sprites.other.showdown.front_default:""} alt="pokemon" className="pokemon-image" id="logo-pokemon" draggable={false}/>
                </div>
                <div id="button-bottom-picture"></div>
                <div id="speakers">
                    <div className="sp"></div>
                    <div className="sp"></div>
                    <div className="sp"></div>
                    <div className="sp"></div>
                </div>
            </div>
             
            {/* Botones */}
            <div id="big-black-button"></div>
            <div id="search-button1"></div>
            <div id="search-button2" onClick={resetNum}></div>


           {/* Formulario de Búsqueda */}
            <form className="form" id="search">
                <input type="search" className="input-search" placeholder="Search" required onChange={(e)=>{ 
                    
                    let value= e.target.value; 

                    if(value.trim() === "" ){
                        setSearchInput(undefined)
                        console.log("f")

                    }else{
                    setSearchInput(value.trim());
                    }}

                    } />
            </form>




             {/* Botones de Navegación */}
            <div id="cross">
                <div id="left-cross">
                    <div id="leftT" onClick={changeNumPokSubs} className="button btn-prev"></div>
                </div>
                <div id="top-cross">
                    <div id="upT"></div>
                </div>
                <div id="right-cross">
                    <div id="rightT" className="button btn-next" onClick={changeNumPok}></div>
                </div>
                <div id="mid-cross">
                    <div id="midCircle"></div>
                </div>
                <div id="bot-cross">
                    <div id="downT"></div>
                </div>
            </div>
        </div>
         {/* Parte Derecha de la Pokédex (Estadísticas) */}
        <div id="right">
             {/* Checkbox para cerrar la Pokédex */}
             
            {/* Pantalla de Estadísticas */}
            <div id="stats-screen">
                <div id="loading-screen">Loading...</div>
                <div className="column left-column">
                    <strong>Number:</strong> <span className="pokemon-number">
                        {dataS.length&&dataS[0].id}  </span><br />
                    <strong>Name:</strong> <span className="pokemon-name">
                        {dataS.length&&dataS[0].name} 
                         </span><br />
                    <strong>Height:</strong> <span className="pokemon-height">
                        {dataS.length&&dataS[0].height} 
                         </span><br />
                    <strong>Weight:</strong> <span className="pokemon-weight">
                         {dataS.length&&dataS[0].weight} 
                        </span><br />
                    <strong>Capture Rate:</strong> <span className="pokemon-capture">  {speciesFetch.length&&speciesFetch[0].capture_rate}</span><br />
                    <strong>Habitat:</strong> <span className="pokemon-habitat"> {speciesFetch.length?(speciesFetch[0].habitat?speciesFetch[0].habitat.name:"none"):"none"}</span><br />
                </div>
                <div className="column right-column">
                    <strong>Type:</strong> <span className="pokemon-type">
                         {dataS.length?dataS[0].types[0].type.name:""} <br />{dataS.length?(dataS[0].types[1] ? dataS[0].types[1].type.name : ""):""} <br /> </span><br />
                    <strong>Abilities:</strong> <span className="pokemon-abilities">  {dataS.length?dataS[0].abilities[0].ability.name:""} <br />{dataS.length?(dataS[0].abilities[1]? dataS[0].abilities[1].ability.name:""):""} <br /> </span><br />
                    <strong>Stats:</strong> 
                    <span>
                    <ul className="pokemon-stats">
                      <li>HP: {dataS.length?dataS[0].stats[0].base_stat:""} </li>
                        <li>Attack:  {dataS.length?dataS[0].stats[1].base_stat:""} </li>
                        <li>Defense:  {dataS.length?dataS[0].stats[2].base_stat:""} </li>
                        <li>Speed:  {dataS.length?dataS[0].stats[5].base_stat:""} </li>
                    </ul>
                </span>
                     <br />
                    <strong>Evolution:</strong> <span class="pokemon-evolution"> {speciesFetch.length?(speciesFetch[0].evolves_from_species ? speciesFetch[0].evolves_from_species.name : "none"):"none"}</span><br />
                </div>
            </div>
             {/* Botones Azules */}
            <div id="blue-buttons1">
                <div className="blue-button" id="btn-abilities"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
            </div>
            <div id="blue-buttons2">
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
                <div className="blue-button"></div>
            </div>
            {/* Botones Adicionales */}
            <div id="white-buttons1"></div>
            <div id="white-buttons2"></div>
            <div id="black-buttons1"></div>
            <div id="black-buttons2"></div>
            <div id="yellow-button"></div>
            <div id="black-box1"></div>
            <div id="black-box2"></div>
            {/* Fondos Curvos */}
            <div id="bg-curve1-right"></div>
            <div id="bg-curve2-right"></div>
            <div id="curve1-right"></div>
            <div id="curve2-right"></div>
        </div>
        </div>

</>
)

}