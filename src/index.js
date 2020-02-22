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
    const { header, footer, children, onModalClose, openModal, isScrollableBody } = this.props
    const modalInnerClass = openModal ? 'thnki-show-modal-inner' : 'thnki-remove-modal-inner'
    const modalOuterClass = openModal ? 'thnki-show-modal-outer' : 'thnki-remove-modal-outer'
    const scrollableBodyClass = isScrollableBody ? 'thnki-modal-body' : ''
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

export const Header = (props) => {
  return <div className='thnki-modal-header-container' >
    {props.text}
  </div >
}

export const Footer = (props) => {
  const { isDisabled, acceptText, disabledText, cancelText, onCancel, onAccept } = props
  const disabledClass = isDisabled ? 'thnki-disabled' : ''
  const uploadText = isDisabled ? disabledText : acceptText
  return (
    <div className='thnki-modal-footer-container'>
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

export default Modal
