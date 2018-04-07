import { SongQueue } from './song-queue.models';
import { Song } from './songs.models';
import { User } from './users.models';

export interface CreateRoom {
  username: string;
  title: string;
  description: string;
  isTemporary: boolean;
}

export interface RoomListing {
  id: number;
  title: string;
  description: string;
  host: User;
  listeners: number;
  genres: string[];
  now_playing: Song;
}

export interface Room extends RoomListing {
  isTemporary: boolean;
  play_queue: SongQueue;
}
