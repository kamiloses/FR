import { Component } from '@angular/core';
import {PostResponseModel} from './post.response.model';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-post-list',
  imports: [
    PostComponent
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {

  posts: PostResponseModel[] = [
    {
      id: 'p1',
      user: {
        id: 'u1',
        username: 'john123',
        password: 'pass123',
        isOnline: true,
        firstName: 'John',
        lastName: 'Doe',
        chatId: 'chat-u1'
      },
      content: 'Hello Angular! 👋',
      createdAt: new Date().toISOString(),
      likeCount: 10,
      retweetCount: 2,
      commentsCount: 5,
      retweetedByMe: false,
      likedByMe: true,
      isDeleted: false
    },
    {
      id: 'p2',
      user: {
        id: 'u2',
        username: 'alice',
        password: 'alice123',
        isOnline: false,
        firstName: 'Alice',
        lastName: 'Wonder',
        chatId: 'chat-u2'
      },
      content: 'Dzisiaj uczę się TypeScript! 🤓',
      createdAt: new Date().toISOString(),
      likeCount: 3,
      retweetCount: 1,
      commentsCount: 0,
      retweetedByMe: false,
      likedByMe: false,
      isDeleted: false
    },
    {
      id: 'p3',
      user: {
        id: 'u3',
        username: 'bobDev',
        password: 'bob321',
        isOnline: true,
        firstName: 'Bob',
        lastName: 'Builder',
        chatId: 'chat-u3'
      },
      content: 'Angular > React? 😆',
      createdAt: new Date().toISOString(),
      likeCount: 22,
      retweetCount: 4,
      commentsCount: 8,
      retweetedByMe: true,
      likedByMe: true,
      isDeleted: false
    },
    {
      id: 'p4',
      user: {
        id: 'u1',
        username: 'john123',
        password: 'pass123',
        isOnline: true,
        firstName: 'John',
        lastName: 'Doe',
        chatId: 'chat-u1'
      },
      content: 'Wracam do kodzenia po kawie ☕',
      createdAt: new Date().toISOString(),
      likeCount: 5,
      retweetCount: 0,
      commentsCount: 1,
      retweetedByMe: false,
      likedByMe: false,
      isDeleted: false
    },
    {
      id: 'p5',
      user: {
        id: 'u2',
        username: 'alice',
        password: 'alice123',
        isOnline: false,
        firstName: 'Alice',
        lastName: 'Wonder',
        chatId: 'chat-u2'
      },
      content: 'Dzień bez bugów to dzień stracony 😂',
      createdAt: new Date().toISOString(),
      likeCount: 15,
      retweetCount: 3,
      commentsCount: 2,
      retweetedByMe: false,
      likedByMe: true,
      isDeleted: false
    }
  ];


}
