
import ToDoScreen from '../ToDo/ToDoScreen'
import NoteScreen from '../Note/NoteScreen'
import './appscreen.css'


const AppScreen = ({currentPage}) => {
  
  if (currentPage === 'note'){
    return (
      <div className="app-screen-container">
        <NoteScreen />
      </div>
    )
  } 
  if(currentPage === 'to do'){
    return (
      <div className="app-screen-container">
        <ToDoScreen />
      </div>
    )
  }

  return (
    <div className="app-screen-container">
      <p>Sayfa bulunamadı</p>
    </div>
  )
}
export default AppScreen
