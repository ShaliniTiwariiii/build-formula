import React from 'react'
import {useNavigate} from 'react-router-dom'
import style from './Navbar.module.css'
function Navbar() {
    const navigate=useNavigate()
  return (
   <>
   <div className={style.main}>
    <ul className={style.list} >
  <li onClick={()=>navigate("/")}>Home</li>
  <li onClick={()=>navigate("/contact")}>Contact</li>
  <li onClick={()=>navigate("/task")}>Task</li>
  </ul>
   </div>
   </>
  )
}

export default Navbar
