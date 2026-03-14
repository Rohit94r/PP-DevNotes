import { connectDB } from "@/lib/mongodb"
import Note from "@/models/Note"

export async function DELETE(req, {params}){
   await connectDB()

   await Note.findByIdAndDelete(params.id)
   return Response.json({message:"Note deleted"})
}