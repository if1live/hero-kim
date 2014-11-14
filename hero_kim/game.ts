module HeroKim {
    export class Game extends Phaser.Game {
        constructor() {
            // this.device is created in boot(), but I need it now.
            var device = new Phaser.Device(this);
            // for mobile browser, use fullsize
            if (device.desktop) {
                var w = 480;
                var h = 640;
            } else {
                var w = window.innerWidth;
                var h = window.innerHeight;
            } 

            super(w, h, Phaser.AUTO, 'content', null);
            

            this.state.add('TitleState', TitleState, false);
            this.state.add('TutorialState', TutorialState, false);

            this.state.add('StoryState', StoryState, false);

            this.state.add('PreoareBattleState', PrepareBattleState, false);
            this.state.add('StoreState', StoreState, false);
            
            this.state.add('BattleState', BattleState, false);

            this.state.start('TitleState');
        }
    }

}