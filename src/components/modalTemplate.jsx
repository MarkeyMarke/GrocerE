import React from "react";
import Modal from "react-bootstrap/Modal";

class ModalTemplate extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={() => {
          this.props.setState({ showModal: false });
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Logout confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            class="btn btn-primary"
            onClick={this.props.onLogout}
          >
            Yes, log me out
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => {
              this.props.setState({ showModal: false });
            }}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalTemplate;
