export interface SimplifiedRoom {
  id: number;
  title: string;
  description: string;
  host: {
    username: string;
    display_name: string;
    avatar_url: string;
  };
  listeners: number;
  genres: string[];
  now_playing: {
    artist: string;
    song: string;
    album: {
      title: string;
      cover_art: string;
    };
  };
}

export interface Room extends SimplifiedRoom {

}
