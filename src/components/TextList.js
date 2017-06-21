import React from 'react'
import './TextList.css'

const TextItem = ({ text }) => (
  <div className='TextItem'>
    <h3 className='TextItem__title'>{text.title}</h3>
    <p className='TextItem__description'>{text.description}</p>
  </div>
)

const TextList = ({ texts }) => (
  <div className='TextList'>
    {texts.map(text => <TextItem key={text.id} text={text} />)}
  </div>
)

export default TextList
