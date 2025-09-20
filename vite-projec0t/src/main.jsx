import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function MyApp() {
  return (
    <>
      <h1>My New App</h1>
      <p>This is a new application setup.</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(

  <MyApp />
)
