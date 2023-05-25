import { useState } from 'react'

function App() {
  const [getMessages, setMessages] = useState(['Mensaje de placeholder 1', 'Mensaje de placeholder 2'])
  const [getInput, setInput] = useState(['Mensaje de placeholder'])

  const onInput = () => {
    setMessages(x => [...x, getInput])
  }

  return (
    <>
      <h1>Parcial 3 peaw: chat en vivo</h1>
      {
        getMessages.map((message, key) => {
          return <p>{message}</p>
        })
      }
      <form onSubmit={() => onInput()}>
        <label htmlFor='inputChat'>Mensaje: </label>
        <input id='inputChat' type='text' placeholder='Escribe tu mensaje...' 
          value={getInput} onChange={(event) => setInput(event.target.value)} />
      </form>
    </>
  )
}

export default App
