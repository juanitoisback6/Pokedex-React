import { Pokecounter } from "../App"
import { useContext } from "react"


export default function Pokedex (props){

const {changeNumPok}=useContext(Pokecounter);

return(
<>

<div className="hidden">
<h2>{props.name}</h2>

<button onClick={changeNumPok} >Next</button>
</div>

</>
)

}