import {Component, OnInit, signal} from '@angular/core';
import {PostResponseModel} from './post.response.model';
import {PostComponent} from './post/post.component';
import {PostListService} from './post.list.service';

@Component({
  selector: 'app-post-list',
  imports: [
    PostComponent
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {

serverError=signal<string|null>(null);
isLoading=signal<boolean>(false);
  fetchedPosts=signal<PostResponseModel[]>([])
  constructor(private readonly postListService: PostListService) {
  }

  ngOnInit(): void {
    this.loadPosts();
  }//todo function export itp

  loadPosts():void {
     this.isLoading.set(true);
     this.postListService.getAllPosts().subscribe({
       next: (posts) => {
         this.fetchedPosts.set(posts)
         this.isLoading.set(false);
       },
       error: (err) => {
         this.serverError.set("There was an error fetching posts.");
         console.error(err);
         this.isLoading.set(false);
       }
     })

   }

  reloadPosts(): void {
    this.loadPosts();
  }


}
