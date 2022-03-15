import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actionsHouse from './state/house.actions'
import * as  selectorHouse  from './state/house.selector'
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  houses$: any | undefined;
  lengthHouse: any;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(actionsHouse.loadHouse());
    this.store.select(selectorHouse.getList).subscribe(
      response => {
        this.houses$ = response;

      }
    );
  }

  loadMoreData() {
  let lengthHouse = this.houses$.length + 1;
  this.store.dispatch(actionsHouse.getMoreItems({lengthHouse}));
       }



}
