import React, { Component } from 'react'
import Modal from 'thnki-react-modal'
import "./index.css"
export default class App extends Component {
  state = {
    openModal: false
  }
  render() {
    return (
      <div className="custom-body">
        <button onClick={() => {
          this.setState({ openModal: true })
        }}> Open Modal </button>
        <Modal header={this.header()}
          footer={this.footer()} onModalClose={() => { this.setState({ openModal: false }) }} openModal={this.state.openModal}>
          <div className="custom-modal-body">Modal Body</div>
        </Modal>
      </div>
    )
  }

  header = () => {
    return <div className="custom-modal-header"> Header </div>
  }

  footer = () => {
    return <div className="custom-modal-footer"> Footer </div>
  }
}
