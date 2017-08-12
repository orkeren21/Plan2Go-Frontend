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
          <button onClick={this.handleOpenModal}>Trigger Modal</button>
          <Modal
              isOpen={this.state.showModal}
              contentLabel="Minimal Modal Example">
              <text>Enter Text Here:</text>
              <button onClick={this.handleCloseModal}>Close Modal</button>
          </Modal>

      </div>)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
  );
