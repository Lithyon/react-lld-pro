import {DemandeRappelModelViewExtended} from "./ModelView/DemandeRappel/DemandeRappelModelViewExtended";
import StateObservable from "@maciffr/react-mvc/src/contracts/StateObservable";
import CiviliteModelView from "./ModelView/Civilite/CiviliteModelView";

export default interface DemandeRappelController extends StateObservable<DemandeRappelModelViewExtended> {
    demandeRappel(): void;

    onChangePrenom(prenom: string): void;

    onChangeNom(nom: string): void;

    onChangeNomEntreprise(nomEntreprise: string): void;

    onChangeTelephone(telephone: string): void;

    onAfficherModaleConfirmationOk(afficherModaleConfirmationOk: boolean): void;

    onAfficherModaleConfirmationKo(afficherModaleConfirmationKo: boolean): void;

    onChangeCivilite(civilite: CiviliteModelView): void;

    redirect(): void;
}
