import { useState } from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./AddFroutApp.css";
const AddListItem=(props:any)=>{
    const [line,setLine]=useState(false)
    const deletFunction=()=>{
        setLine(true)
      
    }
    return(
        <>
       
       <div className="deletIconeContanier">
       <span className="deletIcone" onClick={deletFunction}  >
        <DeleteForeverIcon/>
        </span>
        <li style={{textDecoration: line ?"line-through" : "none"}}>{props.text}</li>
       
       </div>
        </>
    )
}
export default AddListItem