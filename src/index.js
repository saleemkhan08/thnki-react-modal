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
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onModalClose()
    }
  }

  render() {
    const { header, footer, children, onModalClose, openModal } = this.props
    const modalInnerClass = openModal ? 'thnki-show-modal-inner' : 'thnki-remove-modal-inner'
    const modalOuterClass = openModal ? 'thnki-show-modal-outer' : 'thnki-remove-modal-outer'
    if (!openModal) {
      return ''
    }
    return (
      <div className={modalOuterClass + ' thnki-modal-outer-container'} >
        <div className={modalInnerClass + ' thnki-modal-inner-container'}
          ref={(node) => {
            if (openModal) {
              this.setWrapperRef(node)
            } else {
              this.setWrapperRef(undefined)
            }
          }}>
          <span className='thnki-close-modal-button' onClick={onModalClose}>✕</span>
          <div className='thnki-modal-header'>
            {header}
          </div>
          <div className='thnki-modal-body'>
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

export default Modal
