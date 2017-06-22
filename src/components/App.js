import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './App.css'

const App = ({ children, isPrivate }) => (
  <div className='App'>
    {isPrivate && <Header />}

    <main className='App__main'>
      {children}
    </main>

    <Footer />
  </div>
)

export default App
