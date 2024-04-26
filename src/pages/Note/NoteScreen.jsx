import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaEdit } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import notedata from "../../data";
import '../Note/note.css'




const NoteScreen = () => {

  const [notes, setNotes] = useState(notedata)
  const [text,setText] = useState('')
  const [noteName,setNoteName] = useState('');
  const [isEdit,setIsEdit] = useState(false);
  const [editItem,setEditItem] = useState({})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text){
      toast.error('Lütfen notunuzu ekleyin')
      return;
    }
    const newNote = {
      notename:noteName,
      id:nanoid(),
      checked:false,
      text:text,
    }
    setNotes([...notes,newNote])
    toast.success('Not eklendi')
    setText('');
    setNoteName('');
  }


  const handleEdit = (id) => {
    const editItem = notes.find((note) => note.id === id)
    setEditItem(editItem)
    setIsEdit(true)
  }


 const handleEditSubmit = (id) => {
   const { text, notename } = editItem
   const updatedNotes = notes.map((note) => {
     if (note.id === id) {
       return { ...note, notename, text }
     }
     return note
   })
   setNotes(updatedNotes);
   setEditItem({text:'',notename:''})
   setIsEdit(false)
   toast.success('Not düzenlendi') 
 }

 const deleteNote = (id) => 
 {
   const filteredItems = notes.filter((item) => {
     return item.id !== id
   })
  
   setNotes(filteredItems)
   setEditItem({
    notename:'',
    text:''
   })
   
    if (filteredItems.length === 0) {
      setIsEdit(false)
    }

 }


  return (
    <div className="note-container">
      <h2 className="note-app-p">A simple React Note App</h2>


      <div className={isEdit ? 'edit-bar show-edit-bar' : 'edit-bar'}>
        <form className="edit-form">
          <IoIosClose onClick={()=>setIsEdit(!isEdit)} className="close-note-btn" />
          <input
            type="text"
            value={editItem.notename || ''}
            onChange={(e) =>
              setEditItem({ ...editItem, notename: e.target.value })
            }
          />
          <textarea
            name="text"
            id="text"
            value={editItem.text}
            onChange={(e) => setEditItem({ ...editItem, text: e.target.value })}
          ></textarea>
          <button
            onClick={() => handleEditSubmit(editItem.id)}
            className="edit-button"
            type="button"
          >
            Düzenle
          </button>
        </form>
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          onChange={(e) => setNoteName(e.target.value)}
          className="name-input"
          type="text"
          placeholder="#notename"
          value={noteName}
        />
        <textarea
          onChange={(e) => setText(e.target.value)}
          id="textbox"
          type="text"
          name="textbox"
          className="input-box"
          value={text}
        >
          Lorem ipsum
        </textarea>

        <button type="submit" className="submit-btn">
          gönder
        </button>
      </form>

      <div className="note-single-container">
        {notes.map((note) => {
          const { id, text, notename } = note
          return (
            <div className="single-note-div" key={id}>
              <h3 style={{ color: 'whitesmoke', letterSpacing: '2px' }}>
                #{notename}
              </h3>
              <FaEdit onClick={() => handleEdit(id)} className="edit-note-btn" />
              <article onClick={() => handleEdit(id)} className="single-note">
                <p>{text}</p>
              </article>
              <button onClick={()=>deleteNote(id)} className="delete-note-btn">sil</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default NoteScreen