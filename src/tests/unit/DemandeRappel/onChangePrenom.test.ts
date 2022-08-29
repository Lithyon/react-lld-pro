import {init} from "./common/init";

describe("Demande de rappel - renseignement du prénom", function () {
    it("doit récupérer le prénom saisie par l'utilisateur", function (done) {
        const expected = "Bobby";

        const controller = init();

        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.prenom).toBe(expected);
            done();
        });

        controller.onChangePrenom(expected);
    });
});
