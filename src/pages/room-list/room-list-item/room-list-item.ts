import { Component, Input, EventEmitter, Output } from '@angular/core';

import { RoomListing } from '../../../core/api/listjockey/models/room-list.models';

@Component({
  selector: 'room-list-item',
  templateUrl: 'room-list-item.html'
})
export class RoomListItem {

  @Input() listing: RoomListing;
  @Output() onJoin = new EventEmitter<number>();

  constructor() { }

  private join = (id: number) => this.onJoin.emit(id);
}
