import {init} from "./common/init";

describe("Demande de rappel - renseignement du nom", function () {
    it("doit récupérer le nom saisie par l'utilisateur", function (done) {
        const expected = "bobby";

        const controller = init();
        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.nom).toBe(expected);
            done();
        });
        controller.onChangeNom(expected);
    });
});
