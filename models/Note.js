import mongoose from "mongoose"
const NoteSchema = new mongoose.Schema({
   title: String,
   content:String
})
export default mongoose.models.Note || mongoose.model("Note", NoteSchema)

// Schema → structure of note data
// mongoose.model → create database collection
// {
//  "title":"Study Next.js",
//  "content":"Learn API routes"
// }