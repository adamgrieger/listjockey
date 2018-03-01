export interface PlayQueue {
  songs: PlayQueueItem[];
}

export interface PlayQueueItem {
  song: string;
  artist: string;
  album: {
    title: string;
    cover_art: string;
  };
}
