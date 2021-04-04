require('dotenv').config();

module.exports = {
    host: new URL(process.env.URL || 'https://localhost').host,
    trello_board: process.env.TRELLO_BOARD_URL || 'https://trello.com/b/BHLrP0F4/noel',
};
