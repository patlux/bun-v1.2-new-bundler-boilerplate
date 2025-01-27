import { createRoot } from 'react-dom/client'

import { App } from './App'
import { LiveReload } from './LiveReload'

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root')!)
  root.render(
    <>
      <LiveReload />
      <App />
    </>,
  )
})
