import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Row, Col} from 'react-bootstrap';

import NotesList from '../components/NotesList';

class MainContainer extends React.Component {
    
    state = {
        notes: JSON.parse(window.localStorage.getItem('notes')) || [{
            note: 'New Note',
            editing: true,
            date: (new Date().getMonth() + 1) + '.' + new Date().getDate() + '.' + new Date().getFullYear()
        }]
    }
    
    deleteNote = (index) => {
        const notesArr = [...this.state.notes];
        notesArr.splice(index, 1);
        window.localStorage.setItem('notes', JSON.stringify(notesArr));
        this.setState({notes: notesArr});
    }

    createNote = () => {
        const tempArr = [...this.state.notes];
        const date = this.calcDate();
        const defaultNote = { 
            note: 'New Note',
            editing: true,
            date: date
        }
        tempArr.unshift(defaultNote);
        window.localStorage.setItem('notes', JSON.stringify(tempArr));
        this.setState({notes: tempArr});
    }

    editNote = (id) => {
        let notes = [...this.state.notes];
        notes[id].editing = notes[id].editing ? false : true;

        notes.forEach(note => {
            if(note !== notes[id]) {
                note.editing = false;
            }
        });

        window.localStorage.setItem('notes', JSON.stringify(notes));
        this.setState({notes});
    }

    updateNote = (val, id) => {
        let notes = [...this.state.notes];
        notes[id].note = val;
        window.localStorage.setItem('notes', JSON.stringify(notes));
        this.setState({notes});
    }

    calcDate = () => {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hrs = new Date().getHours();
        hrs = hrs > 12 ? hrs - 12 : hrs < 10 ? '0' + hrs : hrs;
        var time = hrs > 12 ? 'AM' : 'PM';

        var mins = new Date().getMinutes();

        var date = month + '.' + day + '.' + year + ' @ ' + hrs + ':' + mins + ' ' + time;
        return date;
    }
    
    render() {
        return(
            <Container>
                <Row className="justify-content-center">
                    <Col xs={10} sm={12} lg={10} md={10} className="header-container">
                        <h1>notes</h1>
                        <h3>a markdown editor built with react and bootstrap</h3>
                        <p><a href="https://www.markdownguide.org/cheat-sheet" target="_blank" rel="noopener noreferrer" className="subtitle"><em className="subtitle-txt">markdown syntax</em></a></p>
                        <Button
                            variant="outline-secondary"
                            onClick={() => this.createNote()}
                            className="add-btn">
                                new note
                        </Button>
                    </Col>
                </Row>
                <NotesList notes={this.state.notes} onDelete={this.deleteNote} onEdit={this.editNote} updateNote={this.updateNote}/>
            </Container>
        )
    }
}

export default MainContainer;