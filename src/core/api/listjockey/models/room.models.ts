import { PlayQueue, PlayQueueItem } from './play-queue.models';
import { User } from './user.models';

export interface Room {
  id: number;
  title: string;
  description: string;
  isTemporary: boolean;
  host: User;
  listeners: number;
  genres: string[];
  now_playing: PlayQueueItem;
  play_queue: PlayQueue;
}
