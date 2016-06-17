const videoGames = [
    {
        title: `Call of Duty`,
        rating: `M`
    },
    {
        title: `Starcraft`,
        rating: `T`
    },
    {
        title: `Mortal Kombat`,
        rating: `M`
    }
]

module.exports = {
    getGames(req, res, next) {
        return res.status(200).json(videoGames);
    }
}
