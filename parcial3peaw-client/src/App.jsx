import { useState } from 'react'
import { Chat, Login } from './components'
import './global.css'

function App() {

  const [getLogged, setLogged] = useState(false)
  const [getUsername, setUsername] = useState('')
  return (
    <div className='app'>
      <h1>Parcial 3 peaw: <small>chat en vivo</small></h1>
      {
        getLogged ?
          <Chat getUsername={getUsername} />
        :
          <Login setLogged={setLogged} setUsername={setUsername} />
      }
    </div>
  )
}

export default App
