import {init} from "./common/init";

describe("Demande de rappel - validation du formulaire", function () {
    it("ne doit pas retourner d'erreur", function (done) {
        const expected = "";

        const controller = init();

        controller.onChangePrenom("Bobby");
        controller.onChangeNom("Bobby");
        controller.onChangeNomEntreprise("Bobby");
        controller.onChangeTelephone("0666666666");

        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorDemandeRappel.prenom).toBe(expected);
            expect(actual.formErrorDemandeRappel.nom).toBe(expected);
            expect(actual.formErrorDemandeRappel.nomEntreprise).toBe(expected);
            expect(actual.formErrorDemandeRappel.telephone).toBe(expected);
            done();
        });

        controller.demandeRappel();
    });

    it("doit retourner une erreur pour le champ prénom", function (done) {
        const expected = "Veuillez renseigner votre prénom";

        const controller = init();

        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorDemandeRappel.prenom).toBe(expected);
            done();
        });

        controller.demandeRappel();
    });

    it("doit retourner une erreur pour le champ nom", function (done) {
        const expected = "Veuillez renseigner votre nom";

        const controller = init();

        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorDemandeRappel.nom).toBe(expected);
            done();
        });

        controller.demandeRappel();
    });

    it("doit retourner une erreur pour le champ nom entreprise", function (done) {
        const expected = "Veuillez saisir au minimum une lettre";

        const controller = init();

        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorDemandeRappel.nomEntreprise).toBe(expected);
            done();
        });

        controller.demandeRappel();
    });

    it("doit retourner une erreur pour le champ nom téléphone - non renseigné", function (done) {
        const expected = "Veuillez renseigner un numéro de téléphone";

        const controller = init();

        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorDemandeRappel.telephone).toBe(expected);
            done();
        });

        controller.demandeRappel();
    });

    it("doit retourner une erreur pour le champ nom téléphone - invalide", function (done) {
        const expected = "Veuillez saisir un numéro de téléphone valide";

        const controller = init();

        controller.onChangeTelephone("xxxx");

        controller.subscribeOnStateChanged(() => {
            const actual = controller.state;
            expect(actual.formErrorDemandeRappel.telephone).toBe(expected);
            done();
        });

        controller.demandeRappel();
    });
});
