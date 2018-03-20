import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { Device } from '../../../core/api/spotify/models/devices.models';
import { AppState } from '../../../core/redux/store/models';

@Component({
  selector: 'device-select',
  templateUrl: 'device-select.html'
})
export class DeviceSelect implements OnInit {

  @Output() onSelectDevice = new EventEmitter<Device>();

  private devices$: Observable<Device[]>;

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.devices$ = this.ngRedux.select(state => state.devices.devices);
  }

  private selectDevice = (device: Device) => this.onSelectDevice.emit(device);
}
