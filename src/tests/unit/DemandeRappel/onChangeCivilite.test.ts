import {CiviliteCode} from "../../../domain/data/Enum/DefaultCivilite";
import {init} from "./common/init";
import CiviliteModelView from "../../../presentation/pages/DemandeRappel/ModelView/Civilite/CiviliteModelView";

describe("Demande de rappel - renseignement de la civilité", () => {
    it("doit récupérer la valeur saisie par l'utilisateur", done => {
        const expected = CiviliteCode.MONSIEUR;

        const controller = init();

        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.civilite.code).toBe(expected);
            done();
        });
        controller.onChangeCivilite({code: expected, libelle: "Monsieur"} as CiviliteModelView);
    });
});
