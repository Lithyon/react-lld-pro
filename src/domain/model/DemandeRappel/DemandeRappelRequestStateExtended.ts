import IsCloneable from "@maciffr/react-mvc/lib/contracts/IsCloneable";
import DemandeRappelRequestState from "./DemandeRappelRequestState";

export default interface DemandeRappelRequestStateExtended
    extends IsCloneable<DemandeRappelRequestStateExtended>,
        DemandeRappelRequestState {}

export function DemandeRappelRequestStatePrototype(): DemandeRappelRequestStateExtended {
    return {
        clone: DemandeRappelRequestStatePrototype,
        cdCanal: this.cdCanal,
        typeDemande: this.typeDemande,
        nmPers: this.nmPers,
        znPrenPers: this.znPrenPers,
        parametresDemande: this.parametresDemande,
        coordonneesContact: this.coordonneesContact,
        cdCivil: this.cdCivil
    };
}
