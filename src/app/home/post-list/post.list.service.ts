import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostResponseModel} from './post.response.model';
import {Observable, timeout} from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)

export class PostListService {
//todo const a readonly
  private readonly apiUrl = 'http://localhost:8080/api/posts';

  constructor(private readonly http: HttpClient) { }



  getAllPosts():Observable<PostResponseModel[]> {
    const username = "kamilosesx"
    return this.http.get<PostResponseModel[]>(`${this.apiUrl}?username=${username}`
    ); //todo pipe(timeout)
  } //todo jak to jest ze timeout bez new sie odwołuje

  sendPost(text:string):Observable<any>{
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel augue in purus dictum blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dictum orci vel lorem sollicitudin, vel pharetra elit viverra. Quisque at erat ut erat feugiat dapibus. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.\n";
    const body = { content: text };
    return this.http.post("http://localhost:8080/api/posts/kamiloses1", body);
  }

}
