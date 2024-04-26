import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from "@dnd-kit/core"
import { useState } from "react"
import Column from "./Column"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Input from "./Input/Input";


const ToDoScreen = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Add tests to homepage', completed: false },
    {
      id: 2,
      title: 'Fix styling in about section',
      completed: false,
    },
    {
      id: 3,
      title: 'Learn how to center a div',
      completed: false,
    },
  ])
  

const addTask = (title) => {
  setTasks((tasks) => [
    ...tasks,
    { id: tasks.length + 1, title, completed: false,status: "todo" },
  ])
  
  console.log(tasks);
}
const editItem = (id) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed }
    }
    return task;
  })
  setTasks(updatedTasks) 
}
const deleteItem = (id) => {
  const filteredItems = tasks.filter((task) => task.id !== id)
  setTasks(filteredItems) 
}


 const getTaskPos = (id) => {
   return tasks.findIndex((task) => task.id === id)
 }

  const handleDragEnd = (event) => {
    const {active,over} = event

    if(active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id)
      const newPos = getTaskPos(over.id)

      return arrayMove(tasks, originalPos, newPos)
    })
  }

/* const sensors = useSensors(
  useSensor(PointerSensor),
  useSensor(TouchSensor),
  useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  })
) 

ilk kodum bu şekildeydi.delay ekleyerek kafa karışıklığını çözdük çünkü
drag and drop checkbox içinde onChange çalıştırmıyordu.

*/


  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 6,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )


  return (
    <div>
      <h1 style={{color:'#fff', letterSpacing:'2px'}}>A simple React To-Do app</h1>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Input onSubmit={addTask}/>
        <Column tasks={tasks} editItem={editItem} deleteItem={deleteItem}/>
      </DndContext>
    </div>
  )
}
export default ToDoScreen