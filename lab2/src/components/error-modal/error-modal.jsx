import React from "react";
import {Button, Modal} from "react-bootstrap";

function ErrorModal(props) {
    const {errorMessage, show, onHide} = props;
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Error!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{errorMessage}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Ok</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorModal;
