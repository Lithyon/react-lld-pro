import {Button, Modal} from "macif-components";

export interface ModaleConfirmationKoProps {
    readonly afficherModaleConfirmationKo: boolean;
    readonly onAfficherModaleConfirmationKo: Function;
}

export default function ModaleConfirmationKo({
    afficherModaleConfirmationKo,
    onAfficherModaleConfirmationKo
}: ModaleConfirmationKoProps) {
    const gestionFermetureModaleConfirmationKo = () => onAfficherModaleConfirmationKo(false);
    const gestionTrackingModaleConfirmationKo = () => {
        window.dataLayer.push({event: "page_view", page_name: "LLD_Pro_WCB_Envoyer_KO"});
    };
    const gestionRedirectionFermetureModaleConfirmationKo = () => {
        window.location.replace("/assurance/professionnels-et-entreprises/lld-professionnel");
    };
    return (
        <Modal
            centered
            show={afficherModaleConfirmationKo}
            onShow={gestionTrackingModaleConfirmationKo}
            onHide={gestionFermetureModaleConfirmationKo}
            onExited={gestionRedirectionFermetureModaleConfirmationKo}
        >
            <Modal.Header closeButton />
            <Modal.Body>
                <span className="icon icon-macif-mobile-croix icon-title" />
                <Modal.Title>Une erreur est survenue</Modal.Title>
                <p>
                    Nous sommes désolé, votre demande n’a pas pu être envoyée. Nous vous invitons à la réitérer
                    ultérieurement.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" block onClick={gestionFermetureModaleConfirmationKo}>
                    Fermer
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
