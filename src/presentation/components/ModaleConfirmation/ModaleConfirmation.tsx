import {Button, Modal} from "macif-components";
import React from "react";

export interface ModaleConfirmationProps {
    readonly show: boolean;
    readonly onHide: Function;
    onExited(node: HTMLElement): void;
    readonly children: React.ReactNode;
}

export default function ModaleConfirmation({show, onHide, onExited, children}: ModaleConfirmationProps) {
    return (
        <Modal centered show={show} onHide={() => onHide(false)} onExited={onExited}>
            <Modal.Header closeButton />
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" block onClick={() => onHide(false)}>
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
