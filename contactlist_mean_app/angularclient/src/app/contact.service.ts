import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  baseurl = "http://localhost:3000/api/";

  //retrieving ContactService
  getContacts() {
    return this.http.get(this.baseurl + 'contacts');
    // .map(res => res.json());
    // this.http.get(this.baseurl + 'contacts').pipe(
      // map(response => response.json())
    // );

  }

  //add contact
  addContact(newContact: Contact){
    
    var httpheaders = new HttpHeaders();
    httpheaders.append('Content-type', 'application/json');
    return this.http.post(this.baseurl + 'contact', newContact, {headers: httpheaders});
    // .map(res=>res.json());
  }

  //delete contact
  deleteContact(id: string){
    return this.http.delete(this.baseurl + 'contact/'+id, );

    // .map(res=>res.json());
  }

}
