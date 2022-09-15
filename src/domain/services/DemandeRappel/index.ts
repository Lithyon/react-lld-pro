import DemandeRappelServiceImpl from "./DemandeRappelServiceImpl";
import DemandeRappelRepository from "../../repository/DemandeRappel";

export {DemandeRappelServiceImpl};

export default new DemandeRappelServiceImpl(DemandeRappelRepository);
