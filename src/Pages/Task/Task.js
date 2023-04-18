import React, { useState } from 'react'
import CustomInput from '../../Atom/CustomInput'
import CustomButton from '../../Atom/CustomButton'
import style from './Task.module.css'
function Task() {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);
  function handleSubmit() {
    let obj={
      id:Math.floor(Math.random()*1000),
      task:task,
      completed:false
    }
    if (task.trim().length === 0) {
      return
    }
    setTodo([...todo, obj])
    setTask("")
  }
  function handleComplete(id){
    todo.forEach((item)=>{
      if(item.id===id){
        item.completed=!item.completed
      }
    })
    setTodo([...todo])
  }
  function handleDelete(id){
    setTodo([...todo.filter((item)=>
      item.id!==id
    )])
    
  }
  return (
    <div className={style.main}>
      <div className={style.todo}>
      <CustomInput placeholder="Add Todo" value={task} onChange={(e) => setTask(e.target.value)} />
      <CustomButton txt="Submit" onClick={handleSubmit} />
      </div>

      <ul className={style.wrapper}>
        {todo.map((item,i) => {
          return (
            <>
              <li className={style.list} key={item.id}
               style={{ textDecoration: item.completed ? "line-through":"none"}}>
                {item.task}
                </li>
                <div className={style.btns}>

                <CustomButton color="success" onClick={()=>
                handleComplete(item.id)} txt="Complete"/>
              <CustomButton color="error" onClick={()=>
                handleDelete(item.id)} txt="Delete"/>
                </div>
      
             
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default Task
