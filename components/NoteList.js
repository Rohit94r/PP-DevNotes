export default function NoteList({notes,fetchNotes}) {
   const deleteNote = async(id)=>{
      await fetch("/api/notes/"+id,{
         method:"DELETE"
      })
      fetchNotes()
   }
   return(
      <div className="mt-6 space-y-3">
         {notes.map(note=>(
         <div key={note._id} className="border p-3 flex justify-between">
            <div>
               <h3 className="font-bold">
                  {note.title}</h3>
                  <p>{note.content}</p>
               
            </div>
            <button onClick={()=>deleteNote(note._id)} className="text-red-500 hover:text-red-700">
               Delete
            </button>

         </div>
         ))}
      </div>
   )
}