require('dotenv').config();

module.exports = {
    host: new URL(process.env.URL || 'https://localhost').host,
    trello_board: process.env.TRELLO_BOARD_URL || 'https://trello.com/b/BHLrP0F4/noel',
    tistory: process.env.TISTORY_ADDRESS || 'https://frontdev.tistory.com/',
    github: process.env.GITHUB_ADDRESS || 'https://github.com/oinochoe/connect-Trello',
};
