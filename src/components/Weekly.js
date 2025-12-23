import React, { useEffect, useState } from 'react'
import hot from '../icons/weather/hot.png';

export default function Weekly() {

  const [days, setDays] = useState([]);

  useEffect(() => {
    setDays(['Next 7 Days', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  }, []);

  function wd_elements(num) {
    if (num === 0) {
      return  (
        <>
          <p>{days[num]}</p>
          <div><p>Forecast</p></div>
        </>
      )
    } else if (num === 1) {
      return  (
        <>
          <div><p>{days[num]}</p><div><p>11:00 PM</p></div></div>
          <div>
            <p>10°</p>
            <div><img src={hot} alt="" /></div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div><p>{days[num]}</p></div>
          <div><img src={hot} alt="" /></div>
          <div><p>10°</p></div>
        </>
      )
    }
  }

  return (
    <section className='weekly'>
      <ul>
        { days.map((curr, index) => {
          
          return (
            <li className={ index === 0 ? 'week_title' : index === 1 ? 'today' : 'weekday'}>
              {
                wd_elements(index)
              }
            </li>
          )
          
        })}
      </ul>
    </section>
  )
}
