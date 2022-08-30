import {init} from "./common/init";

describe("Demande de rappel - validation du formulaire", function () {
    it("ne doit pas retourner d'erreur", function (done) {
        const expected = "";

        const controller = init();

        controller.onChangePrenom("Bobby");
        controller.onChangeNom("Bobby");

        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorDemandeRappel.prenom).toBe(expected);
            expect(actual.formErrorDemandeRappel.nom).toBe(expected);
            done();
        });

        controller.validationFormulaire();
    });

    it("doit retourner une erreur pour le champ prénom", function (done) {
        const expected = "Veuillez renseigner votre prénom";

        const controller = init();

        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorDemandeRappel.prenom).toBe(expected);
            done();
        });

        controller.validationFormulaire();
    });

    it("doit retourner une erreur pour le champ nom", function (done) {
        const expected = "Veuillez renseigner votre nom";

        const controller = init();

        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorDemandeRappel.nom).toBe(expected);
            done();
        });

        controller.validationFormulaire();
    });
});
