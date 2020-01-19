import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../redux/actions/actions";

class NotesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  };

  handleSubmission = e => {
    let { title, content } = this.state;
    this.props.addNote(title, content);

    this.setState({ title: "", content: "" });
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div className='notes-form'>
          <p id='add-note'>Add a Note</p>

          <form autoComplete='off' onSubmit={this.handleSubmission}>
            Title: <br />
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
            <br />
            Content: <br />
            <textarea
              name='content'
              value={this.state.content}
              onChange={this.handleChange}
            ></textarea>
            <br />
            <button type='submit'>Add Note</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, {
  addNote: addNote
})(NotesForm);
