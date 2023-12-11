import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionService } from 'src/app/services/action.service';
import { Action } from 'src/app/models/action.model';

@Component({
  selector: 'app-action-details',
  templateUrl: './action-details.component.html',
  styleUrls: ['./action-details.component.scss'],
})
export class ActionDetailsComponent implements OnInit {
  
  action!: Action;

  constructor(
    private ActionService: ActionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

      const actionId = +this.route.snapshot.params['id'];
      this.action = this.ActionService.findActionById(actionId);

  }
  



  
}
