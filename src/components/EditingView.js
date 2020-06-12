import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

class EditingView extends React.Component {
    constructor (props) {
        super(props);
        this.state = 
        {
            note: this.props.content
        }
    }
    handleChange = e => {
        console.log(e.target.value);
        this.props.updateNote(e.target.value, this.props.id);
    }

    render() {
    
    return(
        <div>
            <InputGroup>
                <FormControl as="textarea" aria-label="With textarea" defaultValue={this.props.content} onChange={this.handleChange}/>
            </InputGroup>
        </div>
    )
}
}

export default EditingView;