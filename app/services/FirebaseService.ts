import {Injectable} from 'angular2/core';

@Injectable()
export class FirebaseService{
  clientDataRef: Firebase;
  documentDataRef: Firebase;
  constructor() {
    let url = "https://blazing-torch-8523.firebaseio.com/";
    this.clientDataRef = new Firebase(url + 'clients');
    this.documentDataRef = new Firebase(url + 'documents');
  }
}
