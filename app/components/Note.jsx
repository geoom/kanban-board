import React from 'react';

export default class Note extends React.Component {
  
  constructor(props) {
    super(props);

    // Track `editing` state.
    this.state = {
      editing: true
    };
  }

  render() {
    // Render the component differently based on state.
    if(this.state.editing) {
      return this.renderEdit();
    }

    return this.renderNote();
  }

  renderEdit = () => {
    // Deal with blur and input handlers. These map to DOM events.
    return <input type="text"
      autoFocus={true}
      placeholder={this.props.task}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  };

  renderNote = () => {
    // If the user clicks a normal note, trigger editing logic.
    const onDelete = this.props.onDelete;

    return (
      <div onClick={this.edit}>
        <span className="task" >{this.props.task}</span>
        {onDelete ? this.renderDelete() : null }
      </div>
    );
  };

  renderDelete = () => {
    return <button 
	    className="delete-note"
	    onClick={this.props.onDelete}>x</button>;
  };
  
  edit = () => {
    // Enter edit mode.
    this.setState({
      editing: true
    });
  };
  
  checkEnter = (e) => {
    // The user hit *enter*, let's finish up.
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  };
  
  finishEdit = (e) => {
    // `Note` will trigger an optional `onEdit` callback once it
    // has a new value. We will use this to communicate the change to
    // `App`.
    //
    // A smarter way to deal with the default value would be to set
    // it through `defaultProps`.
    //
    // See *Typing with React* chapter for more information.
    if(this.props.onEdit) {
      this.props.onEdit(e.target.value);
    }

    // Exit edit mode.
    this.setState({
      editing: false
    });
  };
}