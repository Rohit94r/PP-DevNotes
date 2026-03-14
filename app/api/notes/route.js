import { connectDB } from "@/lib/mongodb"
import Note from "@/models/Note"

export async function GET(){
   try {
      await connectDB()
      const notes = await Note.find()
      return Response.json(notes)
   } catch (error) {
      console.error('API Error:', error)
      return Response.json({ error: 'Failed to fetch notes' }, { status: 500 })
   }
}

export async function POST(request){
   try {
      await connectDB()
      const body = await request.json()
      const note = await Note.create(body)
      return Response.json(note)
   } catch (error) {
      console.error('API Error:', error)
      return Response.json({ error: 'Failed to create note' }, { status: 500 })
   }
}

// GET → fetch notes
// POST → create note
// connectDB → connect database
// Note.find() → get data
// Note.create() → save data
