import React from 'react';
import '../../styles/counter.css';

const counterData=[
  {
    number: '5,000',
    text: 'Pacientes satisfechos',
  },
  {
    number: '10,000',
    text: 'Tratamientos realizados',
  },
  {
    number: '500',
    text: 'Casos de exito',
  }
]

const Counter = () => {
  return (
    <section className="counter">
      <div className="container">
        <div className="counter__wrapper">
          {
            counterData.map((item,index)=>(
              <div className="counter__item" key={index}>
                <h3 className="counter__number">{item.number}+</h3>
                <h4 className="counter__title">{item.text}</h4>
              </div>
            ))
          }
          
        </div>
      </div>
    </section>
  )
}

export default Counter