import { Component, Input } from '@angular/core';

@Component({
  selector: 'room-list-item',
  templateUrl: 'room-list-item.html'
})
export class RoomListItem {

  @Input() title: string;

  constructor() { }
}
