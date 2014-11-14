module HeroKim {
    
    export class TitleState extends Phaser.State {
        title: Phaser.Image;
        tutorialButton: Phaser.Button;
        startButton: Phaser.Button;

        preload() {
            this.load.spritesheet('tutorial_button', 'assets/buttons/tutorial_button_sprite_sheet.png', 193, 71);
            this.load.spritesheet('start_button', 'assets/buttons/game_start_button_sprite_sheet.png', 193, 71);
        }

        create() {
            //this.title = this.add.sprite(0, 200, 'title');
            //this.title.fixedToCamera = true;

            var text = "ABC\n한글\n";
            var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
            var t = this.add.text(this.world.centerX, this.world.centerY, text, style);


            this.tutorialButton = this.add.button(
                this.world.centerX - 95, this.world.height - 200,
                'tutorial_button', this.tutorialClick, this,
                2, 1, 0
                );

            this.startButton = this.add.button(
                this.world.centerX - 95, this.world.height - 100,
                'start_button', this.startClick, this, 
                2, 1, 0
                );
        }

        tutorialClick() {
            this.game.state.start('TutorialState', true, false);
        }

        startClick() {
            alert('튜토리얼을 보지 않으면 게임을 시작할수 없습니다.');
            //this.game.state.start('StoryState', true, false);
        }
    }
}