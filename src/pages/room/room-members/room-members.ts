import { Component, Input } from '@angular/core';

import { User } from '../../../core/api/listjockey/models/users.models';

@Component({
  selector: 'room-members',
  templateUrl: 'room-members.html'
})
export class RoomMembers {

  @Input() users: User[];
}
