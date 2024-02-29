import { useState } from 'react'
import './App.css'
import { Toggle } from './components/Toggle'
import useLocalStorage from 'use-local-storage'

function App() {
  const [count, setCount] = useState(null)

  function getRandom(){
    setCount(() =>{
        
        setCount(Math.floor(Math.random() * (100 + 1)))

        // TESTE
        // console.log(Math.floor(Math.random() * (3 + 1)))

    })
  }

  // const preference = window.matchMedia('(prefers-color-scheme: dark)').matches 
  
  const [isDark, setIsdark] = useLocalStorage('isDark', false) 

  return (
    <>
      <div className='App' data-theme={isDark ? 'dark' : 'light'}>
        <Toggle
          isChecked={isDark}
          handleChange={() => setIsdark(!isDark)}
        />
        <div className="container">
          <h1>clique para gerar número aleatório entre 0 e 100</h1>
          <h2 className='numero'>{count}</h2>
          <button className='card' onClick={getRandom}>
            clique
          </button>
        </div>
      </div>  
    </>
  )
}

export default App