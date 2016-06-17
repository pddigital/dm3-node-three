const videoGameCtrl = require('./videoGameCtrl');

module.exports = app => {
    app.get('/api/video-games', videoGameCtrl.getGames);
}
