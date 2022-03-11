import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/share/models/user.model';
import * as  actionsUser from '../user.actions';
import { UserState } from '../user.reducers';
import * as selectorUser from '../user.selector';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
   styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  users$: Observable<any> | undefined ;
  loading$: Observable<any> | undefined ;
  error$: Observable<string | undefined> | undefined ;

  constructor(private store: Store<any> ,private service: UserService) {}

  ngOnInit(): void {
   this.store.dispatch(actionsUser.loadUsers())
    this.loading$ = this.store.select(selectorUser.isLoading);
  }

}
