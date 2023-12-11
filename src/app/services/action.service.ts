import { Injectable } from '@angular/core';
import { Action, Membre } from '../models/action.model';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  private storageKey = 'actions';
  actions: Action[] = [];

  constructor() {
    // Load actions from localStorage when the service is initialized
    const storedActions = localStorage.getItem(this.storageKey);
    if (storedActions) {
      try {
        this.actions = JSON.parse(storedActions);
      } catch (error) {
        console.error('Error parsing stored actions:', error);
      }
    }
  }

  ajouterAction(
    id: number,
    nom: string,
    objectif: string,
    responsable: Membre,
    nombrePersonnes: number
  ): void {
    const nouvelleAction = new Action(
      id,
      nom,
      objectif,
      responsable,
      nombrePersonnes,
      new Date(),
      'Réussi'
    );
    this.actions.push(nouvelleAction);

    // Save actions to localStorage after adding a new action
    this.saveToLocalStorage();
  }

  getActions(): Action[] {
    return this.actions;
  }

  supprimerAction(action: Action): void {
    const index = this.actions.indexOf(action);
    if (index !== -1) {
      this.actions.splice(index, 1);
      this.saveToLocalStorage(); // Save actions to localStorage after removing an action
    }
  }

  findActionById(actionId: number): Action {
    const foundAction = this.actions.find((element) => +element.id === actionId);
    if (foundAction) {
      return foundAction;
    } else {
      throw new Error('Action not found!');
    }
  }
  
  
  
  
  private saveToLocalStorage(): void {
    // Save the actions array to localStorage
    localStorage.setItem(this.storageKey, JSON.stringify(this.actions));
  }
}
