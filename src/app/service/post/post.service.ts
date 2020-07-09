import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../models/Post';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostsofUser(userId): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
}
