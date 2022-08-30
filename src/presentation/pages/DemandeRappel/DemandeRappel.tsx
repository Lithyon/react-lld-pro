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
        controller.validationFormulaire();
    }

    return (
        <>
            <a href="/assurance/professionnels-et-entreprises/lld-professionnel">
                <span className="icon icon-fleche_gauche" />
                Retour
            </a>

            <Form className="mcf-mt--10">
                <h1>Demande de rappel</h1>

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

                <Button block variant="primary" onClick={handleValidationFormulaire}>
                    Demande de rappel
                </Button>
            </Form>
        </>
    );
}
