import React from 'react'
import "./techniques.css"
import dataTech from "./DataOfTechniques"
import CartTech from "./CartTechniques"

const Techniques = () => {
  return (
    <div className='BaseDivTechniques'>
        <div className='titleTech'>
            <h1>التقنيات الذي نستخدمها</h1>
        </div>
        <div className='techContent'>
            {
                dataTech.map((item)=>(
                    <CartTech key={item.id} {...item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Techniques