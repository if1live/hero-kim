module HeroKim {
    export class Boot extends Phaser.State {
        preload() {
            this.load.image('preloadBar', 'assets/loader.png');
        }

        create() {
            alert('hello world');
        }
    }
}