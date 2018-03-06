import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { CreateRoom } from '../../../core/api/listjockey/models/room-list.models';
import { AppState } from '../../../core/redux/store/models';

@Component({
  selector: 'create-room-form',
  templateUrl: 'create-room-form.html'
})
export class CreateRoomForm implements OnInit {

  @Output() onCreateRoom = new EventEmitter<CreateRoom>();

  private accessToken$: Observable<string>;

  private room: FormGroup;

  constructor(private ngRedux: NgRedux<AppState>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.accessToken$ = this.ngRedux.select(state => state.session.tokens.accessToken);

    this.room = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      isTemporary: [false]
    });
  }

  private createRoom = () => this.onCreateRoom.emit(this.room.value);
}
