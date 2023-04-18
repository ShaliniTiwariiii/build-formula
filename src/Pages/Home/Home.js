import React,{useState} from 'react'
import CustomButton from '../../Atom/CustomButton'
import style from './Home.module.css'
function Home() {
  const[newData,setNewData]=useState(JSON.parse(localStorage.getItem('UserDetail'))||[])

 function handleClear(){
  let confirmation= window.confirm('Are you sure you want to clear')
  if(confirmation){
   localStorage.removeItem('UserDetail')
   setNewData([])}
 }
  return (
    <div className={style.main}>
      
      <h1>Welcome</h1>
      {newData?.map((data)=>{return(<>
       <h1>{data.fname}</h1>
       <h1>{data.lname}</h1>
       {data.fname?
       <CustomButton onClick={handleClear} txt={'clear'} color={'error'}/>:''}
      </>)})}
     
     
    </div>
  )
}

export default Home
