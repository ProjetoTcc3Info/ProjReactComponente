
import './App.css'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { CompoMenu } from './components/Componente1'
function App() {
  let algo

  function AcaoOK(){
      console.log('DEU CERTO')
  }

  function AcaoNegar(){
      console.log('TAMBEM DEU CERTO')
  } 


  return (
    <>
        <CompoMenu texto='algo teste' icone={QuestionMarkIcon} cancela={AcaoNegar} aceita={AcaoOK} />
    </>
  )
}

export default App


