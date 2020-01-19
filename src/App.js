import React from "react";
import NotesHeader from "./Notes/Notes-Header";
import NotesForm from "./Notes/NotesForm";
import AllNotes from "./Notes/AllNotes";
import { BrowserRouter, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faPlusCircle,
  faListAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faPlusCircle, faListAlt);

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='notes'>
          <NotesHeader />
          <Route path='/NotesForm' component={NotesForm} />
          <Route path='/AllNotes' component={AllNotes} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
