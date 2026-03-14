"use client"

import { useEffect, useState } from "react"
import NoteForm from "@/components/NoteForm"
import NoteList from "@/components/NoteList"

export default function Home(){
 const [notes, setNotes] = useState([])

 const fetchNotes = async() => {
  try {
   const res = await fetch("/api/notes")
   
   // Check if response is ok
   if (!res.ok) {
    console.error('Response not ok:', res.status, res.statusText)
    return
   }
   
   // Check if response has content
   const text = await res.text()
   if (!text) {
    console.error('Empty response')
    setNotes([])
    return
   }
   
   // Parse JSON
   const data = JSON.parse(text)
   setNotes(data)
   
  } catch (error) {
   console.error('Fetch error:', error)
   setNotes([])
  }
 }

 useEffect(() => {
  fetchNotes()
 }, [])

 return(
  <div className="p-10 max-w-xl mx-auto">
   <h1 className="text-3xl font-bold mb-6">
    DevNotes
   </h1>
   <NoteForm fetchNotes={fetchNotes}/>
   <NoteList notes={notes} fetchNotes={fetchNotes}/>
  </div>
 )
}
