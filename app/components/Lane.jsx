import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

import LaneActions from '../actions/LaneActions';
import Editable from './Editable.jsx';

import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';


const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if(!targetProps.lane.notes.length) {
      console.log('source', sourceId, 'target', targetProps);
      LaneActions.attachToLane({
        laneId: targetProps.lane.id,
        noteId: sourceId
      });
    }
  }
};

@DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
class Lane extends React.Component {

  constructor(props) {
    super(props);

    const id = props.lane.id;

    this.addNote = this.addNote.bind(this, id);
    this.deleteNote = this.deleteNote.bind(this, id);

    this.editName = this.editName.bind(this, id);
    this.deleteLane = this.deleteLane.bind(this, id);
    this.activateLaneEdit = this.activateLaneEdit.bind(this, id);
  }

  render() {
    const {connectDropTarget, lane, ...props} = this.props;

    return connectDropTarget(
      <div {...props}>
        <div className="lane-header" onClick={this.activateLaneEdit}>
          
          <div className="lane-add-note">
            <button onClick={this.addNote}>+</button>
         </div>
          
          <Editable className="lane-name" editing={lane.editing}
            value={lane.name} onEdit={this.editName} />
          
          <div className="lane-delete">
           	<button onClick={this.deleteLane}>x</button>
          </div>
        </div>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            notes: () => NoteStore.getNotesByIds(lane.notes)
          }}
        >

          <Notes
            onValueClick={this.activateNoteEdit}
            onEdit={this.editNote}
            onDelete={this.deleteNote} />

        </AltContainer>
      </div>
    );
  }

  addNote(laneId, e) {
    // If note is added, avoid opening lane name edit by stopping
    // event bubbling in this case.
    e.stopPropagation();

    const note = NoteActions.create({task: 'New task'});

    LaneActions.attachToLane({
      noteId: note.id,
      laneId
    });
  }

  editNote(id, task) {
    NoteActions.update({id, task, editing: false});
  }

  deleteNote(laneId, noteId) {
    LaneActions.detachFromLane({laneId, noteId});
    NoteActions.delete(noteId);
  }

  editName(id, name) {
    LaneActions.update({id, name, editing: false});
  }
  
  deleteLane(id) {
    LaneActions.delete(id);
  }
  
  activateLaneEdit(id) {
    LaneActions.update({id, editing: true});
  }

  activateNoteEdit(id) {
    NoteActions.update({id, editing: true});
  }

}


Lane.Header = class LaneHeader extends React.Component {
}


Lane.Notes = class LaneNotes extends React.Component {
}


Lane.propTypes = {
  lane: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string,
    notes: React.PropTypes.array
  }).isRequired,
  connectDropTarget: React.PropTypes.func
};


Lane.defaultProps = {
  name: '',
  notes: []
};

export default Lane;
