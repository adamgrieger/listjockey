import { Component, Input } from '@angular/core';

import { Song } from '../../../core/api/listjockey/models/songs.models';

@Component({
  selector: 'now-playing',
  templateUrl: 'now-playing.html'
})
export class NowPlaying {

  @Input() song: Song;
}
