import React from 'react'

type TodosType = {
    todos: {
        id: string;
        title: string;
    }[]  
 }


const Todos = (props : TodosType) => {
  return (
    <div>
      Todos
    </div>
  )
}

export default Todos
