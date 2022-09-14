import {init} from "./common/init";

describe("Demande de rappel - Affichage Modale Confirmation Ok", function () {
    it("doit afficher la modale de confirmation Ok", function (done) {
        const expected = true;

        const controller = init();
        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.afficherModaleConfirmationOk).toBe(expected);
            done();
        });
        controller.onAfficherModaleConfirmationOk(expected);
    });
});
