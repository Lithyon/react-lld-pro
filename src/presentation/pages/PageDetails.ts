interface PageDetail {
    readonly link: string;
    readonly displayName: string;
}

interface PageDetails {
    readonly demandeRappel: PageDetail;
}

const pageDetails: PageDetails = {
    demandeRappel: {
        link: "/demande-rappel",
        displayName: "Demande de rappel"
    }
};

export default pageDetails;
