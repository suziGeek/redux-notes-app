import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NotesHeader extends Component {
  render() {
    let test = new Date();
    return (
      <React.Fragment>
        <div className='title'>
          <p id='things'>
            Your
            <br /> Things
          </p>
          <p id='date'>{test.toLocaleDateString()}</p>
          <Link id='link' to='/NotesForm'>
            {" "}
            <FontAwesomeIcon icon='plus-circle' />
          </Link>
          <Link id='link' to='/AllNotes'>
            <FontAwesomeIcon icon='list-alt' />
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
