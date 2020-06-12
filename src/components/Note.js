import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Markdown from 'markdown-to-jsx';

import EditingView from './EditingView';

function Note(props) {

        return(
            <Row className="justify-content-center">
                <Col xs={11} sm={12} lg={8} md={10} className="shadow-sm p-3 mb-4 bg-white rounded">
                    <Row className="notes-header shadow-sm p-3 mt-1 ml-1 mr-1 mb-4 rounded">
                        <Col className="note-info-wrapper"> 
                            <div><b className="note-info-text">{props.note.date}</b></div>
                        </Col>
                        <Col xs={6}>
                            <Button
                                variant="light" 
                                onClick={() => 
                                    {props.onEdit(props.id)}}
                                size="sm"
                                className="edit-btn">
                                    {!props.note.editing && <i className="fas fa-pencil-alt"></i>}
                                    {props.note.editing && <i className="fas fa-check"></i>}
                            </Button>
                            <Button 
                                variant="light" 
                                onClick={() =>
                                    {props.onDelete(props.id)}}
                                size="sm"
                                className="delete-btn">
                                    <i className="fas fa-trash"></i>
                                
                            </Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="note-wrapper">
                            {!props.note.editing && 
                                <Markdown>
                                    {props.note.note}
                                </Markdown>
                            }
                            {props.note.editing && <EditingView content={props.note.note} id={props.id} updateNote={props.updateNote} /> }
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }

export default Note;