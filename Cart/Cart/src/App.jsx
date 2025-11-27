import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Item from './components/item'
import Cart from './components/cart'

function App() {
     return (
      <div className='AllCards'>
        <h2>🛒 Shopping Cart</h2>
        <Item name="MacBook" price={30000} />
        <Item name="Iphone" price={1000} />
        <Item name="S24 Ultra" price={1500} />
        <Cart />
      </div>
     )
}

export default App
