import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import M from './modal.module.css';

class Modal extends Component {
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    modalImg: PropTypes.string.isRequired,
    modalAlt: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.props.onCloseModal(e);
      }
    });
  }

  render() {
    return (
      <div onClick={this.props.onCloseModal} className={M.Overlay}>
        <div className={M.Modal}>
          <img src={this.props.modalImg} alt={this.props.modalAlt} />
        </div>
      </div>
    );
  }
}
export default Modal;
