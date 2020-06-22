import React from 'react';
import NoteService from '../../services/NoteService';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }

  

  render() {
    const { notes } = this.state;
    return (
        <div className="container">
            <h2>Add Notes</h2>
            <hr />
            <div>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control"  placeholder="Enter title" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="password" className="form-control" placeholder="Enter description" />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </div>
    );
  }
}

export default NoteForm;
