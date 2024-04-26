import { nanoid } from "nanoid"
import './buttons.css'

const Buttons = ({setCurrentPage}) => {

  const appList = [
    {
      name: 'to do',
      id:nanoid()

    },
    {
      name: 'note',
      id:nanoid()
    },
  ]

 

  return (
    <div className="btn-container">
      {appList.map((app) => {
        const { name,id } = app
        return <button onClick={()=>setCurrentPage(name)} key={id} className="app-btn">
          {name}
        </button>
      })}
    </div>
  )
}
export default Buttons