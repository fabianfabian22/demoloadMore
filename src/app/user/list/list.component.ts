import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as  selectorUser  from '../user.selector'
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users$: Observable<any> | undefined;
  error$: Observable<string | undefined> | undefined;

  constructor( private store :Store<AppState>) { }

  ngOnInit(): void {
    this.users$ = this.store.select(selectorUser.getList);
  }

}
