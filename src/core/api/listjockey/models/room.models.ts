import { PlayQueueItem, PlayQueue } from './play-queue.models';

export interface Room {
  id: number;
  title: string;
  description: string;
  isTemporary: boolean;
  host: {
    username: string;
    display_name: string;
    avatar_url: string;
  };
  listeners: number;
  genres: string[];
  now_playing: PlayQueueItem;
  play_queue: PlayQueue;
}
