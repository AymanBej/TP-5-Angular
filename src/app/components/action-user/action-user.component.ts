import { Component, Input, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { Action, Membre } from 'src/app/models/action.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-user',
  templateUrl: './action-user.component.html',
  styleUrls: ['./action-user.component.scss'],
})
export class ActionUserComponent implements OnInit {
  private storageKey = 'actions';
  nom!: string;
  objectif!: string;
  id!: number;
  responsable: Membre = new Membre('Abir Affes', 33);
  nombrePersonnes!: number;
  @Input() action!: Action;

  constructor(private actionService: ActionService, private router: Router) {
    const storedActions = localStorage.getItem(this.storageKey);
    if (storedActions) {
      try {
        this.action = JSON.parse(storedActions);
      } catch (error) {
        console.error('Error parsing stored actions:', error);
      }
    }
  }
  ngOnInit(): void {}

  ajouterAction(): void {
    this.actionService.ajouterAction(
      this.id,
      this.nom,
      this.objectif,
      this.responsable,
      this.nombrePersonnes
    );
    // Réinitialiser les champs après l'ajout
    this.nom = '';
    this.objectif = '';
    this.nombrePersonnes = 0;
  }
  supprimerAction(action: Action): void {
    // Suppression de l'action
    this.actionService.supprimerAction(action);
  }

  getActions(): Action[] {
    return this.actionService.getActions();
  }
  onStatutChange(action: Action): void {
    action.statut = action.statut === 'Réussi' ? 'Échec' : 'Réussi';
  }
  detailsAction(actionId: number) {
    // Assuming you have a route parameter named 'id' in action_user_details route
    this.router.navigate(['/action-details', actionId]);
  }

  activerEditMode(action: any): void {
    action.editMode = true;
  }

  desactiverEditMode(action: any): void {
    action.editMode = false;
    this.saveToLocalStorage();
  }
  private saveToLocalStorage(): void {
    // Save the actions array to localStorage
    localStorage.setItem(this.storageKey, JSON.stringify(this.action));
  }
}
