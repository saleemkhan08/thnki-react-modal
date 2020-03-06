/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import './styles.css'
class Modal extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && !this.props.isClosingDisabled) {
      this.props.onModalClose()
    }
  }

  render() {
    const { header, footer, children, onModalClose, openModal, isScrollableBody, isClosingDisabled, ...others } = this.props
    const modalInnerClass = openModal ? 'thnki-show-modal-inner' : 'thnki-remove-modal-inner'
    const modalOuterClass = openModal ? 'thnki-show-modal-outer' : 'thnki-remove-modal-outer'
    const scrollableBodyClass = isScrollableBody ? 'thnki-modal-body' : ''
    const disabledClass = isClosingDisabled ? 'thnki-disabled' : ''
    console.log('scrollableBodyClass :::::::::: ', scrollableBodyClass)
    if (!openModal) {
      return ''
    }
    return (
      <div className={modalOuterClass + ' thnki-modal-outer-container'} {...others} >
        <div className={modalInnerClass + ' thnki-modal-inner-container'}
          ref={(node) => {
            if (openModal) {
              this.setWrapperRef(node)
            } else {
              this.setWrapperRef(undefined)
            }
          }}>
          <span className={'thnki-close-modal-button ' + disabledClass} onClick={() => {
            if (!disabledClass) onModalClose()
          }}>✕</span>
          <div className='thnki-modal-header'>
            {header}
          </div>
          <div className={scrollableBodyClass}>
            {children}
          </div>
          <div className='thnki-modal-footer'>
            {footer}
          </div>
        </div>
      </div>
    )
  }
}

export const ModalHeader = (props) => {
  const { text, ...others } = props
  return <div className='thnki-modal-header-container' {...others} >
    {text}
  </div >
}

export const ModalFooter = (props) => {
  const { isDisabled, acceptText, disabledText, cancelText, onCancel, onAccept, ...others } = props
  const disabledClass = isDisabled ? 'thnki-disabled' : ''
  const uploadText = isDisabled ? disabledText : acceptText
  return (
    <div className='thnki-modal-footer-container' {...others} >
      <button className={'thnki-modal-btn thnki-modal-btn-primary ' + disabledClass}
        onClick={() => {
          if (!isDisabled) {
            onAccept()
          }
        }}
      >{uploadText}</button>
      <button className={'thnki-modal-btn thnki-modal-btn-default ' + disabledClass}
        onClick={() => { if (!isDisabled) onCancel() }}
      >{cancelText}</button>
    </div>
  )
}

export const ConfirmationModal = (props) => {
  const { onAccept, acceptText, cancelText, showConfirmation, onCancel, confirmationText, isDisabled, disabledText } = props

  return (
    <Modal
      onModalClose={onCancel}
      isClosingDisabled={isDisabled}
      openModal={showConfirmation} >
      <ModalHeader style={{ paddingTop: '40px' }} text={confirmationText} />
      <ModalFooter
        style={{ textAlign: 'center' }}
        acceptText={acceptText || 'ACCEPT'}
        cancelText={cancelText || 'CANCEL'}
        onCancel={onCancel}
        isDisabled={isDisabled}
        disabledText={disabledText || 'ACCEPT'}
        onAccept={onAccept} />
    </Modal>
  )
}

export default Modal
