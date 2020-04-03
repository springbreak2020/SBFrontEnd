import React, { useState, useEffect } from "react";
import airtableAuth from "../utils/airtableAuth";
import "./Notes.css";

export const Notes = () => {
  const [note] = useState("recpIjGF4N9Qm3D3I");
  const [noteList, setNoteList] = useState();
  const [noteData, setNoteData] = useState();
  const [input, setInput] = useState({
    fields: {
      note_id: "1",
      note_body: "Test."
      // attachments: ["attachment"]
    }
  });
  const [putData] = useState({
    records: [
      {
        id: "recpIjGF4N9Qm3D3I",
        fields: {
          note_id: "1",
          note_body: "Update."
          // attachments: ["attachment"]
        }
      }
    ]
  });

  const handleChange = e => {
    e.preventDefault();
    setInput({ fields: { ...input, [e.target.name]: e.target.value } });
  };

  useEffect(() => {
    // Retrieve note List
    airtableAuth()
      .get("https://api.airtable.com/v0/appcaKbHDurIj9YWs/notes")
      .then(res => {
        setNoteList(res);
      });
    // Retrieve note
    airtableAuth()
      .get(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/notes/${note}`)
      .then(res => {
        setNoteData(res);
      });
  });

  useEffect(() => {
    console.log("Note List", noteList);
    console.log("Note Data", noteData);
  }, [noteList, noteData]);

  const createNote = e => {
    e.preventDefault();
    console.log(input);
    airtableAuth()
      .post("https://api.airtable.com/v0/appcaKbHDurIj9YWs/notes", input)
      .then(res => console.log(res));
  };
  const updateNote = () => {
    airtableAuth()
      .put("https://api.airtable.com/v0/appcaKbHDurIj9YWs/notes", putData)
      .then(res => console.log(res));
  };

  const deleteNote = () => {
    airtableAuth()
      .delete(
        "https://api.airtable.com/v0/appcaKbHDurIj9YWs/Note?records[]=recpIjGF4N9Qm3D3I"
      )
      .then(res => console.log(res));
  };
  console.log(input);

  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={createNote}>
        <input
          type="text"
          name="user_name"
          onChange={handleChange}
          value={input.note_body}
          placeholder="Make words here..."
        />
        {/* <input
          type="text"
          name="profile_picture"
          onChange={handleChange}
          value={input.attachments}
          placeholder="Picture Link..."
        /> */}
        <button onSubmit={createNote}>Submit</button>
      </form>
      <button onSubmit={updateNote}>Update Note</button>
      <button onSubmit={deleteNote}>Delete Note</button>
    </div>
  );
};
