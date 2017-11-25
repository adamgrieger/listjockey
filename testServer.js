const express = require('express');
const request = require('request');
const app = express();

const clientID = 'c5d6aaada19d4fc9868813c0d1516457';
const clientSecret = 'e5c141e4bc164563aef78fa37d482e11';
const redirectUri = 'http://localhost:3000/callback';
const baseUrl = 'https://accounts.spotify.com';

app.get('/authorize', function(req, res) {
  let url = baseUrl + '/authorize/?client_id=' + clientID + '&response_type=code&redirect_uri=' + encodeURIComponent(redirectUri);
  res.send(url);
});

app.get('/callback', function(req, res) {
  request.post({
    url: 'https://accounts.spotify.com/api/token',
    json: true,
    form: {
      code: req.query.code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + new Buffer(clientID + ':' + clientSecret).toString('base64')
    }
  }, (error, response, body) => {
    res.send(body);
  });
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000');
});