import { AuthTokens } from '../core/api/spotify/models/authorization.models';

export const tokens: AuthTokens = {
  accessToken: 'access token',
  expiresOn: 30000,
  refreshToken: 'refresh token'
};

export const error = 'error';

export const userObjectPrivate: SpotifyApi.UserObjectPrivate = {
  'birthdate': '1937-06-01',
  'country': 'SE',
  'display_name': 'JM Wizzler',
  'email': 'email@example.com',
  'external_urls': {
    'spotify': 'https://open.spotify.com/user/wizzler'
  },
  'followers': {
    'href': null,
    'total': 3829
  },
  'href': 'https://api.spotify.com/v1/users/wizzler',
  'id': 'wizzler',
  'images': [ ],
  'product': 'premium',
  'type': 'user',
  'uri': 'spotify:user:wizzler'
};
