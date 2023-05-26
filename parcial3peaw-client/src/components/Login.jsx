import { useState } from 'react'
import '../global.css'

export const Login = ({setLogged, setUsername}) => {

  const [getInputN, setInputN] = useState('')

  const onInputN = (evt) => {
    evt.preventDefault()

    if (getInputN.trim() === '') {
      setUsername('Usuario anonimo')
    }
    else {
      setUsername(getInputN.trim())
    }
    setLogged(true)
  }
  return (
    <div>

      <h2>Bienvenido al chat</h2>

      <form onSubmit={(evt) => onInputN(evt)}>
        <label htmlFor='inputLogin'>Nombre: </label>
        <input id='inputLogin' type='text' placeholder='Ingresa tu nombre de usuario...'
          value={getInputN} onChange={(event) => setInputN(event.target.value)} />
      </form>

    </div>
  )
}
