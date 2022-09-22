import useObserveState from "@maciffr/react-mvc/hooks/useObserveState";
import {Button, Card, Col, Container, Form, ModalTitle, Row} from "macif-components";
import Input from "../../components/Input";
import ModaleConfirmation from "../../components/ModaleConfirmation/ModaleConfirmation";
import DemandeRappelController from "./DemandeRappelController";

interface DemandeRappelProps {
    readonly controller: DemandeRappelController;
}

export default function DemandeRappelView({controller}: DemandeRappelProps) {
    const state = useObserveState(controller);

    return (
        <Container className="mcf-mt--10">
            <Row>
                <Col>
                    <Card body>
                        <a href="/assurance/professionnels-et-entreprises/lld-professionnel">
                            <span className="icon icon-fleche_gauche" />
                            Retour
                        </a>

                        <Form className="mcf-mt--10">
                            <h1>Informations de contact</h1>

                            <p className="mcf-mb--6 mcf-ml--1">Sauf mention contraire, tous les champs sont requis.</p>

                            <Input
                                id="prenom"
                                label="Prénom"
                                autoComplete="given-name"
                                onChange={controller.onChangePrenom}
                                value={state.prenom}
                                errorMessage={state.formErrorDemandeRappel.prenom}
                            />

                            <Input
                                id="nom"
                                label="Nom"
                                autoComplete="family-name"
                                onChange={controller.onChangeNom}
                                value={state.nom}
                                errorMessage={state.formErrorDemandeRappel.nom}
                            />

                            <Input
                                id="nomEntreprise"
                                label="Nom de la société"
                                autoComplete="organization"
                                onChange={controller.onChangeNomEntreprise}
                                value={state.nomEntreprise}
                                errorMessage={state.formErrorDemandeRappel.nomEntreprise}
                            />

                            <Input
                                type="tel"
                                id="telephone"
                                label="Téléphone"
                                autoComplete="tel-national"
                                onChange={controller.onChangeTelephone}
                                value={state.telephone}
                                errorMessage={state.formErrorDemandeRappel.telephone}
                            />

                            <Button
                                variant="primary"
                                onClick={controller.demandeRappel}
                                data-track-analytics="LLD_Pro_WCB_Envoyer"
                                className="mcf-w--100 mcf-w-lg--auto"
                            >
                                Envoyer ma demande de rappel
                            </Button>
                        </Form>

                        <ModaleConfirmation
                            show={state.afficherModaleConfirmationOk}
                            onHide={controller.onAfficherModaleConfirmationOk}
                            onExited={controller.redirect}
                        >
                            <span
                                className="icon icon-macif-mobile-cercle-check icon-title mcf-text--success"
                                aria-hidden={true}
                            />
                            <ModalTitle>Votre demande a été envoyée</ModalTitle>
                            <p>
                                Un conseiller va prendre contact avec vous prochainement. Nous vous remercions de votre
                                confiance
                            </p>
                        </ModaleConfirmation>

                        <ModaleConfirmation
                            show={state.afficherModaleConfirmationKo}
                            onHide={controller.onAfficherModaleConfirmationKo}
                            onExited={controller.redirect}
                        >
                            <span className="icon icon-macif-mobile-croix icon-title" aria-hidden={true} />
                            <ModalTitle>Une erreur est survenue</ModalTitle>
                            <p>
                                Nous sommes désolé, votre demande n’a pas pu être envoyée. Nous vous invitons à la
                                réitérer ultérieurement.
                            </p>
                        </ModaleConfirmation>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
