import { ElementType } from "react"
import './Compo1.css'
interface MsgPropri{
    icone:ElementType,
    texto: string
}

export function CompoMenu({icone , texto}:MsgPropri){

    return(
        <>
         <div className="Fi1">
            
              <label htmlFor="Fi1">Mensagem Alerta!</label> 
                
         </div>
        </>
    )
}