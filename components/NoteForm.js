"use client"
import { useState } from "react"

export default function NoteForm({fetchNotes}) {
   const [title, setTitle] = useState("")
   const [content, setContent] = useState("")

   const submitNote = async(e) => {
      e.preventDefault()

      await fetch("/api/notes", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({title, content})
      })
      setTitle("")
      setContent("")
      fetchNotes()
   }

   return(
      <form onSubmit={submitNote} className="space-y-3">
         <input 
            placeholder="Title"
            className="border p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <textarea 
            placeholder="Content"
            className="border p-2 w-full"
            value={content}
            onChange={(e) => setContent(e.target.value)}
         />
         <button className="bg-black text-white px-4 py-2">Add Note</button>
      </form>
   )
}
