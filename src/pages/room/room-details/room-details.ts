import { Component, Input } from '@angular/core';

import { Room } from '../../../core/api/listjockey/models/rooms.models';

@Component({
  selector: 'room-details',
  templateUrl: 'room-details.html'
})
export class RoomDetails {

  @Input() room: Room;
}
