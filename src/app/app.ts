import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {LeftSidebar} from './left-sidebar/left-sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LeftSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FriendHub');
}
