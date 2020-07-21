import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from "rxjs/operators";

import { User } from "./user";
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersURL = 'api/users';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(msg: string): void {
    this.messageService.add(`UserService: ${msg}`);
  }

  // 处理错误
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    }
  }

  getUsers(): Observable<User[]> {
    this.log('已经获取到用户列表！');
    return this.http.get<User[]>(this.usersURL)
      .pipe(catchError(this.handleError('getUsers', [])))
  }

  getUser(id: number): Observable<User> {
    this.log(`已经获取到用户 id=${id}`);
    
    // 大多数内存 Web API 都可以通过 "api/user/:id" 的形式支持根据 id 获取单个对象
    const url = `${this.usersURL}/${id}`
    
    return this.http.get<User>(url)
      .pipe(
        tap( _ => this.log(`fetched user id = ${id}`)),
        catchError(this.handleError<User>(`getUser id=${id}`))
      )
  }

}
