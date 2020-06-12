import React from 'react';

import Note from './Note';

function NotesList(props) {
    const notes=props.notes.map((note, index) => {
        return <Note note={note} key={index} id={index} onDelete={props.onDelete} onEdit={props.onEdit} updateNote={props.updateNote}/>
    })

    return(
        <div>
            {notes}
        </div>
    );
}

export default NotesList;