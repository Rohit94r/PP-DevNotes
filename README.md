# DevNotes - A Simple Note-Taking App

A full-stack note-taking application built with Next.js, MongoDB, and Tailwind CSS.

## Features

- ✅ Create new notes with title and content
- ✅ View all notes in a clean list format
- ✅ Delete notes with one click
- ✅ Responsive design with Tailwind CSS
- ✅ MongoDB database integration
- ✅ Error handling for API requests

## Tech Stack

- **Frontend**: Next.js 16.1.6, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **ODM**: Mongoose

## Project Structure

```
devnotes/
├── app/
│   ├── api/
│   │   └── notes/
│   │       ├── route.js          # GET & POST endpoints
│   │       └── [id]/
│   │           └── route.js      # DELETE endpoint
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Main page component
├── components/
│   ├── NoteForm.js              # Form to create notes
│   └── NoteList.js              # Display notes list
├── lib/
│   └── mongodb.js               # Database connection
├── models/
│   └── Note.js                  # Mongoose schema
└── README.md
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Rohit94r/PP-DevNotes.git
cd PP-DevNotes
```

2. Install dependencies:
```bash
npm install
```

3. Start MongoDB locally:
```bash
# Make sure MongoDB is running on localhost:27017
mongod
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### GET /api/notes
- Fetches all notes from the database
- Returns: Array of note objects

### POST /api/notes
- Creates a new note
- Body: `{ title: string, content: string }`
- Returns: Created note object

### DELETE /api/notes/[id]
- Deletes a note by ID
- Returns: Success message

## Database Schema

```javascript
{
  title: String,
  content: String,
  _id: ObjectId (auto-generated)
}
```

## Error Handling

The app includes comprehensive error handling for:
- Database connection failures
- Empty API responses
- Network request failures
- Invalid JSON parsing

## Development

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npm run build
npm start
```

## Troubleshooting

### Common Issues

1. **"Unexpected end of JSON input" error**
   - Ensure MongoDB is running
   - Check API route function names are uppercase (GET, POST, DELETE)
   - Verify database connection string

2. **Form not submitting**
   - Check Content-Type header is set to 'application/json'
   - Verify form input bindings are correct

3. **Database connection issues**
   - Ensure MongoDB is running on localhost:27017
   - Check connection string format

## Screenshots

### Main Interface
The app features a clean, minimalist design with:
- Title input field
- Content textarea
- Add Note button
- List of existing notes with delete functionality

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Submit a pull request

## License

MIT License

## Author

**Rohit Jadhav**
- GitHub: [@Rohit94r](https://github.com/Rohit94r)

## Acknowledgments

- Next.js team for the amazing framework
- MongoDB for the database solution
- Tailwind CSS for the styling framework