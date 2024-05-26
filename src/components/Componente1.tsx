import { ElementType } from "react"
import CheckIcon from '@mui/icons-material/Check';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CloseIcon from '@mui/icons-material/Close';





import './Compo1.css'
interface MsgPropri{
    icone:ElementType,
    texto: string
    aceita:()=> any,
    cancela:()=> any,
    Opcional?: ()=> any,
}

export function CompoMenu({icone:Icone, cancela , texto, aceita}:MsgPropri){

    return(
       
         <div className="Fi1">
         
              <label htmlFor="Fi1">Mensagem Alerta!</label> 
              <HighlightOffIcon className=""/>
                 
               
                <div className="CompoBody" >    
                  <Icone/>
                    <p>{texto}</p>
                    <button onClick={aceita}><CheckIcon/></button>
                  <button onClick={cancela}><CloseIcon/></button>
                </div>

                <div className="CompoFooter">

                </div>
                
                
         </div>
      
    )
}