import {init} from "./common/init";

describe("Demande de rappel - renseignement du téléphone", function () {
    it("doit récupérer le téléphone saisie par l'utilisateur", function (done) {
        const expected = "monTelephone";

        const controller = init();
        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.telephone).toBe(expected);
            done();
        });
        controller.onChangeTelephone(expected);
    });
});
