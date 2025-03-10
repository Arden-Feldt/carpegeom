import { Start } from './scenes/Start.js';
import { Game } from './scenes/Game.js';


const config = {
    type: Phaser.AUTO,
    title: 'CarpeGeom',
    parent: 'game-container',
    width: 1920,
    height: 1080,
    pixelArt: true,
    scene: [
        Start
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}
new Phaser.Game(config);
            