import React,{useState} from 'react'
import CustomInput from '../../Atom/CustomInput'
import CustomButton from '../../Atom/CustomButton'
import style from './contact.module.css'
import {isValidEmailSyntax ,
  isValidMobile,  
  isValidString} from '../../helper'
function Contact() {
  const [fname , setFname] = useState('')
  const [lname , setLname] = useState('')
  const [phone , setPhone] = useState('')
  const [email , setEmail] = useState('')
  const [emailMessage, setemailMessage] = useState('')
  const [phoneMessage, setphoneMessage] = useState('')
  const [fnameMessage, setfnameMessage] = useState('')
  const [lnameMessage, setlnameMessage] = useState('')
  const[info,setInfo]=useState([])
  function handlephone(e){
    setPhone(e.target.value)
  }
  function handleSubmit(){
    let data={
      fname,
      lname,
      email,
      phone
    }
    if(!isValidString(fname)){
      setfnameMessage('Please enter valid name')
      return
     }
     if(!isValidString(lname)){
      setlnameMessage('Please enter valid name')
      return
    }
    if(!isValidEmailSyntax(email)){
      setemailMessage('Please enter valid email')
      return
    }
    if(!isValidMobile(phone)){
     setphoneMessage('Please enter valid phone number')
     return
    }
    
    setInfo([...info,data])
   
  
    setFname('')
    setLname('')
    setEmail('')
    setPhone('')
  }
  localStorage.setItem("UserDetail", JSON.stringify(info))
  return (
    <form className={style.main} >
      <CustomInput placeholder="First Name" value={fname} onChange={(e)=>setFname(e.target.value)}/>
      {fnameMessage}
      <CustomInput placeholder="Last Name" value={lname} onChange={(e)=>setLname(e.target.value)} />
      {lnameMessage}
      <CustomInput placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      {emailMessage}
      <CustomInput placeholder="Phone Number" value={phone} onChange={handlephone} />
      {phoneMessage}
      <CustomButton txt="Submit" onClick={handleSubmit} color="success" />
    </form>
  )
}

export default Contact
