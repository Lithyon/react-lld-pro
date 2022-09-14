import {Button, Modal} from "macif-components";

export interface ModaleConfirmationOkProps {
    readonly afficherModaleConfirmationOk: boolean;
    readonly onAfficherModaleConfirmationOk: Function;
}

export default function ModaleConfirmationOk({
    afficherModaleConfirmationOk,
    onAfficherModaleConfirmationOk
}: ModaleConfirmationOkProps) {
    const gestionFermetureModaleConfirmationOk = () => onAfficherModaleConfirmationOk(false);
    const gestionTrackingModaleConfirmationOk = () => {
        window.dataLayer.push({event: "page_view", page_name: "LLD_Pro_WCB_Envoyer_OK"});
    };
    const gestionRedirectionFermetureModaleConfirmationOk = () => {
        window.location.replace("/assurance/professionnels-et-entreprises/lld-professionnel");
    };
    return (
        <Modal
            centered
            show={afficherModaleConfirmationOk}
            onShow={gestionTrackingModaleConfirmationOk}
            onHide={gestionFermetureModaleConfirmationOk}
            onExited={gestionRedirectionFermetureModaleConfirmationOk}
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <span className="icon icon-macif-mobile-cercle-check icon-title mcf-text--success" />
                <Modal.Title>Votre demande a été envoyée</Modal.Title>
                <p>Un conseiller va prendre contact avec vous prochainement. Nous vous remercions de votre confiance</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" block onClick={gestionFermetureModaleConfirmationOk}>
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
