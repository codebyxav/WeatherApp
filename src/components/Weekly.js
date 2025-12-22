import React, { useEffect, useState } from 'react'

export default function Weekly() {

  const [days, setDays] = useState([]);

  useEffect(() => {
    setDays(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
  }, []);

  return (
    <section className='weekly'>
      <ul>
        { days.map((curr, index) => {
          
          return (
            <li className={ index === 0 ? 'weekday today' : 'weekday'}></li>
          )
          
        })}
      </ul>
    </section>
  )
}
