import DemandeRappelDAO from "../../data/DemandeRappel";
import {DemandeRappelRepositoryImpl} from "./DemandeRappelRepositoryImpl";

export {DemandeRappelRepositoryImpl};

export default new DemandeRappelRepositoryImpl(DemandeRappelDAO);
