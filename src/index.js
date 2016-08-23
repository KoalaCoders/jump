
import Player from './js/player.js';
import Game from './js/game.js';

import game from './js/game.js';

window.onblur = () => { game.pause = true; };
window.onfocus = () => { game.pause = false; };

game.player = new Player(game.rootElement);

game.factory();
