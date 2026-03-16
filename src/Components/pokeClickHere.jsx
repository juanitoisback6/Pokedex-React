
import imagenTitulo from '../assets/PokedexTitleSVG.svg';
import clickHere from '../assets/ClickHereSVG.svg';
import closedPokedex from  '../assets/closedPokedex.svg'; 



export default function PokeClickHere () {

return(
<>
 <section>
   <img 
   className='title'        
   draggable="false" 
   src={imagenTitulo} 
   alt="Pokédex title" />

     <img 
     className='clickHere'
     draggable="false" 
     src={clickHere} 
     alt="Image of CLICK HERE!"  />
     <img 
     className='closedPokedex'
     draggable="false" 
     src={closedPokedex} 
     alt="Closed pokédex" />

 </section>
</>
)
}