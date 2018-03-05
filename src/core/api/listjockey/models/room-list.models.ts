import { PlayQueueItem } from './play-queue.models';
import { User } from './user.models';

export interface RoomListing {
  id: number;
  title: string;
  description: string;
  host: User;
  listeners: number;
  genres: string[];
  now_playing: PlayQueueItem;
}

export interface CreateRoom {
  title: string;
  description: string;
  isTemporary: boolean;
}
