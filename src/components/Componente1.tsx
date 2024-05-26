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
    Opcional?:any,
    
}

export function CompoMenu({icone:Icone, cancela , texto, aceita, Opcional:OP }:MsgPropri){

    return(
       
         <div className="Fi1">
         
              <label htmlFor="Fi1">Mensagem Alerta!</label> 
              <HighlightOffIcon className="Fecha"/>
                 
               
                <div className="CompoBody" >    
                  <Icone/>
                    <p>{texto}</p>
                  
                </div>
                <div className="BtnArea">
                 <button onClick={aceita}><CheckIcon/></button>
                  <button onClick={cancela}><CloseIcon/></button>
                  {/*<OP/> <-- se quiser ver o opcional Coloca ele ali fora*/}
                 </div>
                <div className="CompoFooter">
           
                     <p>2m atrás</p>
                </div>
                
                
         </div>
      
    )
}