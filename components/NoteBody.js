import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ notesActive, notesArsip, setNotes }) {
    return (
        <div className="note-app__body">
            <NoteInput setNotes={setNotes} />
            <NoteList label="CATATAN AKTIF" setNotes={setNotes} notes={notesActive} />
            <NoteList label="ARSIP" setNotes={setNotes} notes={notesArsip} />
        </div>
    );
}

export default NoteBody;