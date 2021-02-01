import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {

  constructor(private contactService: ContactService) { }
  contacts: Contact[];
  contact: Contact;
  first_name: string;
  last_name: string;
  phone: string;

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((conts: any) => this.contacts = conts);
  }

  deleteContact(id: any) {
    var contacts = this.contacts;
    this.contactService.deleteContact(id).subscribe((data) => {
      this.contactService.getContacts().subscribe((conts: any) => this.contacts = conts);  
    });

  }

  addContact()
  {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    this.contactService.addContact(newContact).subscribe(contact =>{
      this.contactService.getContacts().subscribe((conts: any) => this.contacts = conts);  
    })
    
     
  }
}
