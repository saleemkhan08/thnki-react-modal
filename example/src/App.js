import React, { Component } from 'react'
import Modal, { Footer, Header } from 'thnki-react-modal'
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
        <Modal header={<Header text="Header" />}
          footer={this.footer()} onModalClose={() => { this.setState({ openModal: false }) }} openModal={this.state.openModal}>
          <div className="custom-modal-body">Modal Body</div>
        </Modal>
      </div>
    )
  }

  footer = () => {
    return <Footer
      isDisabled={false}
      acceptText="SAVE"
      disabledText="SAVING..."
      cancelText="Cancel"
      onCancel={() => {
        console.log("Cancelled")
      }}
      onAccept={() => {
        console.log("Saved")
      }} />
  }
}
