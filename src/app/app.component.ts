import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `<div>{{message}}</div>`,
})
export class AppComponent {
  message = '';

  constructor(private http: HttpClient) {
    let queryParams = new HttpParams().append("name","Mitch");
    this.http.get('/api/message', {responseType: 'text', params: queryParams}).pipe(tap(console.log))
      .subscribe((resp: string) => this.message = resp);
  }
}