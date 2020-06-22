import React from 'react';
import NoteService from '../../services/NoteService';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    NoteService.list().then(data => {
      console.log(data)
      this.setState({ notes: this.formatNotes(data) })
    });
  }

  formatNotes(notes){
    const formattedNotes = [];
    for (const [key, value] of Object.entries(notes)) {
      value.id = key;
      formattedNotes.push(value);
    }
    return formattedNotes;
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="container">
      <h1>My Notes</h1>
      <ul className="list-group">
        {notes.map(note => <li key={note.id} className="list-group-item">
        <div className="d-flex w-100">
          <h5>{note.title}</h5>
        </div>
    <div>{ note.description}</div>
        </li>
        )}
      </ul>
    </div>
    );
  }
}

export default Home;
