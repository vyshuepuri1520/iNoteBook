import React, { useState } from "react"
import NoteContext from "./noteContext"

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)


        //get all note
        const getNotes = async () => {
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzY2RkZGFmMTFlOWFhNzM1NjM1MDBhIn0sImlhdCI6MTcxNTI2NDk4Nn0.GwTeu4gRjh4Vz7nf942Z2VecfB0cauAaZxJG03aIdEc"
                },
            });
            const json = await response.json();
           console.log(json)
           setNotes(json)
        }

    //Add note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzY2RkZGFmMTFlOWFhNzM1NjM1MDBhIn0sImlhdCI6MTcxNTI2NDk4Nn0.GwTeu4gRjh4Vz7nf942Z2VecfB0cauAaZxJG03aIdEc"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = {
            "_id": "663c7fe3bf280f71adfe249c",
            "user": "663b5dfdc5d7b446b5ac6fd5",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-05-09T07:49:14.472Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    //Delete note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzY2RkZGFmMTFlOWFhNzM1NjM1MDBhIn0sImlhdCI6MTcxNTI2NDk4Nn0.GwTeu4gRjh4Vz7nf942Z2VecfB0cauAaZxJG03aIdEc"
            },
        });
        const json = response.json();
        console.log(json)
        console.log("Deleting the note" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }
    //Edit note
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzY2RkZGFmMTFlOWFhNzM1NjM1MDBhIn0sImlhdCI6MTcxNTI2NDk4Nn0.GwTeu4gRjh4Vz7nf942Z2VecfB0cauAaZxJG03aIdEc"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json)
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
          
        }
        setNotes(newNotes);
    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;