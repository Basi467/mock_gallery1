import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  private accessKey = 'DL-kscjO4dwUVTt3smJ_lxj3NLyRvUNJLS5WpLt3xlw'; // Replace with your Unsplash Access Key
  private apiUrl = `https://api.unsplash.com/photos/random`;

  constructor(private http: HttpClient) {}

  getImages(count: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?count=${count}&client_id=${this.accessKey}`);
  }
}
