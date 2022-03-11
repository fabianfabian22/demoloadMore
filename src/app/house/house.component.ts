import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actionsHouse from './state/house.actions'

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  constructor(private store : Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(actionsHouse.loadHouse());
  }

}
