export interface Album {
  title: string;
  cover_art: string;
}

export interface Song {
  track_id: string;
  added_by: string;
  title: string;
  artist: string;
  album: Album;
  duration: number;
  offset: number;
}
