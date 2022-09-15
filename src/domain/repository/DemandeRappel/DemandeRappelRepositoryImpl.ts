import DemandeRappelDAO from "../../data/DemandeRappel/DemandeRappelDAO";
import DemandeRappelRequestStateExtended from "../../model/DemandeRappel/DemandeRappelRequestStateExtended";

export class DemandeRappelRepositoryImpl {
    private readonly _dataSource: DemandeRappelDAO;

    constructor(datasource: DemandeRappelDAO) {
        this._dataSource = datasource;
    }

    envoyerDemandeRappel(demandeRappel: DemandeRappelRequestStateExtended) {
        return this._dataSource.envoyerDemandeRappel(demandeRappel.clone());
    }
}
