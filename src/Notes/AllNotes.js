import React, { Component } from "react";

import { connect } from "react-redux";
import { removeNote } from "../redux/actions/actions";

class AllNotes extends Component {
  removeNote = index => {
    this.props.removeNote(index);
  };

  render() {
    const notesItems = this.props.notes.map((note, index) => (
      <div className='note-items'>
        <div key={index}>
          <b>{note.title}</b>
        </div>
        <div className='button-div'>
          <div id='note-content'>{note.content}</div>

          <div id='note-button'>
            {" "}
            <button onClick={() => this.removeNote(index)}>X</button>
          </div>
        </div>
      </div>
    ));

    return (
      <React.Fragment>
        <div className='all-notes'>
          <p>Tasks</p>

          {notesItems}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProprs = {
  removeNote: removeNote
};

export default connect(mapStateToProps, mapDispatchToProprs)(AllNotes);
