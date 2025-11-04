import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './home/header/header.component';
import {LeftSidebar} from './home/left-sidebar/left-sidebar';
import {RightSidebar} from './home/right-sidebar/right-sidebar';
import {HomeLayoutComponent} from './home/home-layout.component';

@Component({
  selector: 'app-root',
  imports: [HomeLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FriendHub');
}
