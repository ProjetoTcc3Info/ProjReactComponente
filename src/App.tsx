
import './App.css'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { CompoMenu } from './components/Componente1'
function App() {
 

  function AcaoOK(){
      console.log('TA BOM')
  }

  function AcaoNegar(){
      console.log('Pegar oq n tem nada')
  } 

  
/*só pra demonstrar o opicional
  function btn(){
    return(
      <button>Teste</button>
    )
  }
*/

  return (
    <>
        <CompoMenu texto='é perigoso ir sozinho, pegue isto!' icone={QuestionMarkIcon} cancela={AcaoNegar} aceita={AcaoOK} /* Opcional={btn} <-- demonstração*/ />
    </>
  )
}

export default App


