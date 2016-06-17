const videoGameRoutes = require('./videoGames/videoGameRoutes')

module.exports = app => {
  videoGameRoutes(app);
}
