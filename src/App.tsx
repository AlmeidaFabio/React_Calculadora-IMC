import { useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import Styles from './App.module.css'
import { GridItem } from './components/GridItem'
import { levels, level, calculateImc } from './helpers/imc'

function App() {
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [showItem, setshowItem] = useState<level | null>(null)

  function handleCalculateButton() {
    if(height && weight) {
      setshowItem(calculateImc(height, weight))
    } else {
      alert('Preencha todos os campos.')
    }
  }

  function handleBackButton() {
    setshowItem(null)
    setHeight(0)
    setWeight(0)
  }

  return (
    <div className={Styles.main}>
     <header>
      <div className={Styles.headerContainer}>
        IMC
      </div>
     </header>
     <div className={Styles.container}>
      <div className={Styles.leftside}>
        <h1>Calcule o seu IMC</h1>
        <p>IMC é a sigla para índice de massa corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>
        <input 
          type="number" 
          placeholder='Digite a sua altura. Ex: 1.7(metros)'
          required
          value={height > 0 ? height : ''}
          onChange={e => setHeight(parseFloat(e.target.value))}
          disabled={showItem ? true : false}
        />
        <input 
          type="number" 
          placeholder='Digite o seu peso. Ex: 78.7(kg)'
          required
          value={weight > 0 ? weight : ''}
          onChange={e => setWeight(parseFloat(e.target.value))}
          disabled={showItem ? true : false}
        />
        <button 
        onClick={handleCalculateButton}
        disabled={showItem ? true : false}
         >
          Calcular
          </button>
      </div>
      <div className={Styles.rightside}>
        {!showItem && 
          <div className={Styles.grid}>
          {levels.map((item, key) => (
            <GridItem key={key} item={item}/>
          ))}
        </div>
        }
        {showItem && 
          <div className={Styles.big}>
            <div className={Styles.rightArrow} onClick={handleBackButton}>
              <MdArrowBack size={25}/>
              </div>
            <GridItem item={showItem}/>
          </div>
        }
      </div>
     </div>
    </div>
  )
}

export default App
