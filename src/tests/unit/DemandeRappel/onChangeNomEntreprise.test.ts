import {init} from "./common/init";

describe("Demande de rappel - renseignement de la dénomination de son entreprise", function () {
    it("doit récupérer la dénomination de son entreprise saisie par l'utilisateur", function (done) {
        const expected = "monEntreprise";

        const controller = init();
        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.nomEntreprise).toBe(expected);
            done();
        });
        controller.onChangeNomEntreprise(expected);
    });
});
