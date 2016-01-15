import {Injectable} from 'angular2/core';

import {Client} from '../Domain/Client';

@Injectable()
export class FirebaseService {
  url = "https://blazing-torch-8523.firebaseio.com/";

  clientDataRef:Firebase;
  documentDataRef:Firebase;
  docCounterDataRef:Firebase;

  constructor() {
    this.clientDataRef = new Firebase(this.url + 'clients');
    this.documentDataRef = new Firebase(this.url + 'documents');
    this.docCounterDataRef = new Firebase(this.url + 'global/documentCounter');
  }

  getDocumentDataRef = function(client:Client):Firebase {
      return new Firebase(this.url + "clients/" + client.id + "/documents")
  };

  getNextDocNumber = function():Promise<Number> {
    return new Promise((resolve, reject) => {
      this.docCounterDataRef.transaction(
          function (currentValue) {
            return (currentValue||0) + 1
          },
          function (error, committed, snapshot) {
            if (error) {
              reject(error);
            } else if (committed) {
              resolve(snapshot.val());
            }
          },
          false
      );
    });
  };
}
