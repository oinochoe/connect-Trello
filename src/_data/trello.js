const fetch = require('node-fetch');
require('dotenv').config();
const {
  TRELLO_BOARD_URL='https://trello.com/b/dprLtAO4/noel',
  TRELLO_LIST_ID='606921d56c782b5f5a65471e',
  BRANCH } = process.env;


module.exports = () => {
  return fetch(TRELLO_BOARD_URL + '.json')
    .then(res => res.json())
    .then(json => {

      let contentCards = json.cards.filter(card => {
        return card.idList == TRELLO_LIST_ID && !card.closed;
      });

      let contextCards = contentCards.filter(card => {
        return card.labels.filter(label => (
          label.name.toLowerCase() == 'live' ||
          label.name.toLowerCase() == BRANCH
        )).length;
      });

      contextCards.forEach(card => {
        if(card.attachments.length) {
          card.name = "";
          card.desc = card.desc + `\n![${card.name}](${card.attachments[0].url} '${card.name}')`;
        }
      })

      return contextCards;
  });
};
