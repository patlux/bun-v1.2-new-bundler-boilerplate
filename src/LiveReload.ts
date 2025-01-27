import { useEffect } from 'react'

export const LiveReload = () => {
  useEffect(() => {
    const connect = () => {
      const socket = new WebSocket(`ws://${window.location.host}`)

      socket.addEventListener('message', (event) => {
        console.log('[ws] >>', event.data)
        if (event.data === 'RELOAD') {
          window.location.reload()
        }
      })
      return socket
    }

    let socket = connect()
    socket.addEventListener('close', () => {
      console.log(`[ws] Lost connection. Reconnect...`)
      setTimeout(() => {
        socket = connect()
      }, 1000)
    })

    return () => {
      socket.removeAllListeners()
      socket.close()
    }
  }, [])

  return null
}
