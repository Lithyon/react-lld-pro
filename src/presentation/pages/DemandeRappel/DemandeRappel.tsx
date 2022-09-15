import useObserveState from "@maciffr/react-mvc/hooks/useObserveState";
import {Button, Form} from "macif-components";
import Input from "../../components/Input";
import {DemandeRappelController} from "./DemandeRappelController";

interface DemandeRappelProps {
    readonly controller: DemandeRappelController;
}

export default function DemandeRappel({controller}: DemandeRappelProps) {
    const state = useObserveState(controller);

    function handleValidationFormulaire() {
        controller.demandeRappel();
    }

    return (
        <>
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
                    maxLength={10}
                    errorMessage={state.formErrorDemandeRappel.telephone}
                />

                <Button
                    variant="primary"
                    onClick={handleValidationFormulaire}
                    data-track-analytics="LLD_Pro_WCB_Envoyer"
                    className="mcf-w--100 mcf-w-lg--auto"
                >
                    Envoyer ma demande de rappel
                </Button>
            </Form>
        </>
    );
}
