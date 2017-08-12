import Modal from "react-modal";
import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

class App extends React.Component{
    constructor () {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    
    render(){
    return (
      <div>
          <button onClick={this.handleOpenModal}>Add Event</button>
          <Modal
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example">
              <EventForm />
              <br/>
              <button onClick={this.handleCloseModal}>Cancel</button>
          </Modal>

      </div>)
  }
}

class EventForm extends React.Component{
    startDate;
    endDate;
    eventStartTime;
    eventEndTime;
    eventTitle;
    eventDescription;

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit(event) {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Start Date:
                    <input name="startDate" type="text" value={this.state.startDate} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    End Date:
                    <input name="endDate" type="text" value={this.state.endDate} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Start Time:
                    <input name="eventStartTime" type="text" value={this.state.eventStartTime} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    End Time:
                    <input name="eventEndTime" type="text" value={this.state.eventEndTime} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Title:
                    <input name="eventTitle" type="text" value={this.state.eventTitle} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Description:
                    <textarea name="eventDescription" value={this.state.eventDescription} onChange={this.handleChange} />
                </label>
                <br/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
  );
