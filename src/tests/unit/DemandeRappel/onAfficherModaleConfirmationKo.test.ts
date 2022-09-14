import {init} from "./common/init";

describe("Demande de rappel - Affichage Modale Confirmation Ko", function () {
    it("doit afficher la modale de confirmation Ko", function (done) {
        const expected = true;

        const controller = init();
        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.afficherModaleConfirmationKo).toBe(expected);
            done();
        });
        controller.onAfficherModaleConfirmationKo(expected);
    });
});
