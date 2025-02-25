export class Game extends Phaser.Scene
{
    constructor()
    {
        super('Game');
    }

    create()
    {
        this.add.text(640, 360, 'Welcome to Carpe Geom!', {
            font: '32px Arial',
            fill: '#ffffff'
        }).setOrigin(0.5);
    }
}
