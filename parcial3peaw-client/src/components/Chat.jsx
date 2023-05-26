import { useEffect, useState } from 'react'
import '../global.css'
import { socket } from '../socket'
import { dbApi } from '../api/dbApi'

export const Chat = ({getUsername}) => {

  const [getMessages, setMessages] = useState([])
  const [getInputM, setInputM] = useState('')
  const [getConnected, setConnected] = useState(false)

  useEffect(() => {
    socket.connect()

    socket.on('connect', () => {
      setConnected(true)
    })
    socket.on('disconnect', () => {
      setConnected(false)
    })
    socket.on('mensaje-nuevo', (payload) => {
      setMessages(x => [...x, payload])
    })

    return () => {
      socket.disconnect()
      socket.off('connect')
      socket.off('disconnect')
      socket.off('mensaje-nuevo')
    };
  }, [])

  /* const getApi = async () => {
    // utilizar axios para conseguir los mensajes anteriores
    // de la base de datos
    const resp = await dbApi.get('getdb')
    return resp.data.data
  } */

  const onInputM = (evt) => {
    evt.preventDefault()
    if (getInputM !== '') {
      const msg = {
        emisor: getUsername,
        mensaje: getInputM.trim()
      }

      socket.emit('mensaje-enviado', msg)
      setMessages(x => [...x, msg])
      setInputM('')
    }
  }
  return (
    <div>
      {
        getConnected ?
          <p className='blue'>Conectado al chat</p>
        :
          <p className='red'>Desconectado del chat</p>
      }
      {
        getMessages.map((message, key) => {
          return <p key={key}><b className={getUsername === message.emisor && getUsername !== 'Usuario anonimo' ? 'msgPropio':''}>{message.emisor}: </b>{message.mensaje}</p>
        })
      }
      <form onSubmit={(evt) => onInputM(evt)}>
        <label htmlFor='inputChat'>Mensaje: </label>
        <input id='inputChat' type='text' placeholder='Escribe tu mensaje...' 
          value={getInputM} onChange={(event) => setInputM(event.target.value)} />
      </form>
    </div>
  )
}
