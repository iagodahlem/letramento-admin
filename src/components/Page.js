import React from 'react'
import Spinner from './Spinner'
import './Page.css'

const Page = ({ title, isFetching, children }) => (
  <div className='Page'>
    {isFetching ? <Spinner /> :
      <section className='Page__section'>
        <header className='Page__header'>
          {title && <h2 className='Page__title'>{title}</h2>}
        </header>

        {children}
      </section>
    }
  </div>
)

export default Page
