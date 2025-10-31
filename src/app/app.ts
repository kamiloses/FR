import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {LeftSidebar} from './left-sidebar/left-sidebar';
import {RightSidebar} from './right-sidebar/right-sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, LeftSidebar, RightSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FriendHub');
}
