import { Component } from '@angular/core';
import { GamePage } from './components/game/game.page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Start', url: '/main', icon: 'play', function:'start'},
    { title: 'Rechnen', url: '/main', icon: 'paper-plane', function: 'calculate'},
    { title: 'Neue Runde', url: '/main', icon: 'heart', function: 'rematch'},
    { title: 'Reset', url: '/main', icon: 'archive', function:'reset'},
    { title: 'Spieler hinzufügen', url: '/main', icon: 'trash', function:'addPlayer'},
    { title: 'Spam', url: '/main', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private gamePage: GamePage) {}

  action(func: string){
    switch(func) {
      case 'start': {
        this.gamePage.isRunning;
      }
      case 'calculate': {
        this.gamePage.calculate();
        break;
      }
      case 'rematch': {
        this.gamePage.rematch();
        break;
      }
      case 'reset': {
        this.gamePage.reset();
        break;
      }
      case 'reset': {
        this.gamePage.addPlayer();
        break;
      }
    }
  }
}
