import React, { Component } from 'react'
import Modal, { ConfirmationModal, ModalFooter, ModalHeader } from 'thnki-react-modal'
import "./index.css"
export default class App extends Component {
  state = {
    openModal: false,
    openConfirmation: false
  }
  render() {
    return (
      <div className="custom-body">
        <button
          onClick={() => {
            this.setState({ openModal: true })
          }}>
          Open Modal
        </button>
        <button
          onClick={() => {
            this.setState({ openConfirmation: true })
          }}>
          Confirm
        </button>
        <Modal header={<ModalHeader text="Header" />}
          isClosingDisabled={true}
          footer={this.footer()} onModalClose={() => { this.setState({ openModal: false }) }} openModal={this.state.openModal}>
          <div className="custom-modal-body">Modal Body</div>
        </Modal>

        <ConfirmationModal
          onAccept={() => {
            console.log("Comfirmed")
            this.setState({ openConfirmation: false })
          }}
          acceptText="OK"
          disabledText="DISABLED"
          cancelText="CANCEL"
          showConfirmation={this.state.openConfirmation}
          onCancel={() => {
            this.setState({ openConfirmation: false })
          }}
          confirmationText="Are you sure you want to delete?" />
      </div>
    )
  }

  footer = () => {
    return <ModalFooter
      isDisabled={false}
      acceptText="SAVE"
      disabledText="SAVING..."
      cancelText="Cancel"
      onCancel={() => {
        console.log("Cancelled")
        this.setState({ openModal: false })
      }}
      onAccept={() => {
        console.log("Saved")
        this.setState({ openModal: false })
      }} />
  }
}
