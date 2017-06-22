import React from 'react'
import './Page.css'

const Page = ({ children }) => (
  <div className='Page'>
    <section className='Page__section'>
      {children}
    </section>
  </div>
)

export default Page
