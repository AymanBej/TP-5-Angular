export class Action {
  id: number;
  nom: string;
  objectif: string;
  responsable: Membre;
  nombrePersonnes: number;
  dateCreation: Date;
  statut: string;
  editMode: boolean;

  constructor(
    id: number,
    nom: string,
    objectif: string,
    responsable: Membre,
    nombrePersonnes: number,
    dateCreation: Date,
    statut: string
  ) {
    this.id = id;
    this.nom = nom;
    this.objectif = objectif;
    this.responsable = responsable;
    this.nombrePersonnes = nombrePersonnes;
    this.dateCreation = dateCreation;
    this.statut = statut;
    this.editMode = false;
  }
}

export class Membre {
  constructor(public nom: string, public age: number) {}
}
