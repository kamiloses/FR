import { Component } from '@angular/core';
import {Header} from './header/header.component';
import {LeftSidebar} from './left-sidebar/left-sidebar';
import {RightSidebar} from './right-sidebar/right-sidebar';
import {PostListComponent} from './post-list/post-list.component';

@Component({
  selector: 'app-home-layout',
  imports: [
    Header,
    LeftSidebar,
    RightSidebar,
    PostListComponent
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css',
})
export class HomeLayoutComponent {

}
