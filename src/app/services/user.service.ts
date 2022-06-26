import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverURL : string = "http://localhost:3000/users";
  constructor(private httpClient : HttpClient) { }

  createUser(user : any) {
    return this.httpClient.post<{message : any}>(this.serverURL,user);
  }

  getAllUsers(){
    return this.httpClient.get<{users : any}>(this.serverURL);
  }

  getUserById(userId: any){
    return this.httpClient.get<{user : any}>(`${this.serverURL}/${userId}`);
  }

  updateUser(user : any){
    return this.httpClient.put<{message : any}>(`${this.serverURL}/${user._id}`,user);
  }

  deleteUser(userId : any){
    return this.httpClient.delete<{message : any}>(`${this.serverURL}/${userId}`)
  }
  
}
