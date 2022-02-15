import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/main', icon: 'mail' },
    { title: 'Outbox', url: '/main', icon: 'paper-plane' },
    { title: 'Favorites', url: '/main', icon: 'heart' },
    { title: 'Archived', url: '/main', icon: 'archive' },
    { title: 'Trash', url: '/main', icon: 'trash' },
    { title: 'Spam', url: '/main', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
