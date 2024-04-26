import "./task.css"
import { useSortable } from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"


const Task = ({ id, title, completed, editItem,deleteItem }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="task"
    >
      <input
        checked={completed}
        type="checkbox"
        className="checkbox"
        id={id.toString()}
        onChange={() => {
          editItem(id)
        }}
      />

      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {title}
      </p>
      <button onClick={()=>deleteItem(id)} style={{ backgroundColor: '#e74c3c' }} className="button">
        sil
      </button>
    </div>
  )
}
export default Task