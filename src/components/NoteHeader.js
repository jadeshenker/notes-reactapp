import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function NoteHeader(props) {

    return(
        <Row className="notes-header shadow-sm p-3 mt-1 ml-1 mr-1 mb-4 rounded">
            <Col className="note-info-wrapper"> 
                <div><b className="note-info-text">note date goes here</b></div>
            </Col>
            <Col xs={6} className="delete-btn">
                <Button
                    variant="light" 
                    size="sm"
                    className="edit-btn">
                    <i class="fas fa-trash"></i>
                </Button>
                <Button 
                    variant="light" 
                    onClick={() =>
                        {props.onDelete(props.id)}}
                    size="sm"
                    className="delete-btn">
                    <i class="fas fa-pencil-alt"></i>
                </Button>
            </Col>
        </Row>
    )
}

export default NoteHeader;