import Task from "./Task/Task"
import "./column.css"

import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"

const Column = ({tasks,editItem,deleteItem}) => {


  return (
    <div className="column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task)=>{
        return (
          <Task key={task.id} {...task} editItem={editItem} deleteItem={deleteItem}/>
        )
      })}
      </SortableContext>
    </div>
  )
}
export default Column