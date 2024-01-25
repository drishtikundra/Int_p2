import React from 'react'
import style from "./css_module/Fooditem.module.css"

export default function Fooditem({x}) {
    return (
      <li key={x} className={style.bgcolor }>{x}</li>
    )
  }
  

//   you need to create css modeule and paremt in same folder. Their name should be same
