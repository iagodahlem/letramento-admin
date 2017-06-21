import React from 'react'
import './Page.css'

const Page = ({ children }) => (
  <div className='Page'>
    <header className='Page__header'>
      <h2>Title</h2>
    </header>
    <section className='Page__section'>
      {children}
    </section>
  </div>
)

export default Page
