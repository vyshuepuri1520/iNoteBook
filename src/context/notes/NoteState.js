import React, { useState } from "react"
import NoteContext from "./noteContext"

const NoteState = (props)=>{
   const notesInitial= [
    {
      "_id": "663c7fe3bf280f71adfe249c",
      "user": "663b5dfdc5d7b446b5ac6fd5",
      "title": "history",
      "description": "akbar and mumtaj",
      "tag": "great people",
      "date": "2024-05-09T07:48:51.261Z",
      "__v": 0
    },
    {
      "_id": "663c7ffabf280f71adfe249f",
      "user": "663b5dfdc5d7b446b5ac6fd5",
      "title": "history1",
      "description": "akbar1 and mumtaj",
      "tag": "great people1",
      "date": "2024-05-09T07:49:14.472Z",
      "__v": 0
    },
    {
        "_id": "663c7fe3bf280f71adfe249c",
        "user": "663b5dfdc5d7b446b5ac6fd5",
        "title": "history",
        "description": "akbar and mumtaj",
        "tag": "great people",
        "date": "2024-05-09T07:48:51.261Z",
        "__v": 0
      },
      {
        "_id": "663c7ffabf280f71adfe249f",
        "user": "663b5dfdc5d7b446b5ac6fd5",
        "title": "history1",
        "description": "akbar1 and mumtaj",
        "tag": "great people1",
        "date": "2024-05-09T07:49:14.472Z",
        "__v": 0
      },
      {
        "_id": "663c7fe3bf280f71adfe249c",
        "user": "663b5dfdc5d7b446b5ac6fd5",
        "title": "history",
        "description": "akbar and mumtaj",
        "tag": "great people",
        "date": "2024-05-09T07:48:51.261Z",
        "__v": 0
      },
      {
        "_id": "663c7ffabf280f71adfe249f",
        "user": "663b5dfdc5d7b446b5ac6fd5",
        "title": "history1",
        "description": "akbar1 and mumtaj",
        "tag": "great people1",
        "date": "2024-05-09T07:49:14.472Z",
        "__v": 0
      },
      {
        "_id": "663c7fe3bf280f71adfe249c",
        "user": "663b5dfdc5d7b446b5ac6fd5",
        "title": "history",
        "description": "akbar and mumtaj",
        "tag": "great people",
        "date": "2024-05-09T07:48:51.261Z",
        "__v": 0
      },
      {
        "_id": "663c7ffabf280f71adfe249f",
        "user": "663b5dfdc5d7b446b5ac6fd5",
        "title": "history1",
        "description": "akbar1 and mumtaj",
        "tag": "great people1",
        "date": "2024-05-09T07:49:14.472Z",
        "__v": 0
      }
  ]
  const [notes, setNotes] = useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;