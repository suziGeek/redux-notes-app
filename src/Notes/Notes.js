import React, { Component } from "react";
import NotesForm from "./NotesForm";
import AllNotes from "./AllNotes";

export default class Notes extends Component {
  render() {
    let test = new Date();
    return (
      <React.Fragment>
        <div className='notes'>
          <div className='title'>
            <p id='things'>
              Your
              <br /> Things
            </p>

            <p id='date'>{test.toLocaleDateString()}</p>
          </div>
          <div className='notes-form-container'>
            <NotesForm />
          </div>
          <div className='all-notes-container'>
            <AllNotes />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
