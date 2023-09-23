import { useState } from 'preact/hooks'
import './Popup.css'

export const Popup = () => {
  const [crx, setCrx] = useState('create-chrome-ext')

  return (
    <main>
      <h3>Popup Page!</h3>
      ceshi
      <h6>v 0.0.0</h6>
      <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
        Power by {crx}
      </a>
    </main>
  )
}

export default Popup
