import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { RoomListing } from '../../../core/api/listjockey/models/room-list.models';
import { AppState } from '../../../core/redux/store/models';

@Component({
  selector: 'room-list-item',
  templateUrl: 'room-list-item.html'
})
export class RoomListItem implements OnInit {

  @Input() listing: RoomListing;
  @Output() onJoin = new EventEmitter<number>();

  private accessToken$: Observable<string>;

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.accessToken$ = this.ngRedux.select(state => state.session.accessToken);
  }

  private join = (id: number) => this.onJoin.emit(id);
}
