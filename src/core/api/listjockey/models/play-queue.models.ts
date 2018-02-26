export interface PlayQueue {
  songs: PlayQueueItem[];
}

export interface PlayQueueItem {
  title: string;
  artist: string;
  album: {
    title: string;
    cover_art: string;
  };
}
