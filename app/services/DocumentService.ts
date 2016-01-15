import {Injectable} from 'angular2/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

import {Client} from '../domain/Client';
import {Document, DocumentType} from '../domain/Document';
import {FirebaseService} from './FirebaseService';

@Injectable()
export class DocumentService {

  documents$: Observable<Array<Document>>;
  private _documentsObserver: any;

  firebaseService:FirebaseService;

  documents: Document[] = [];

  constructor() {
    this.firebaseService = new FirebaseService();
    this.documents$ = new Observable(observer => this._documentsObserver = observer).share();
  }

  loadDocuments = function(client:Client) {
    this.firebaseService.getDocumentDataRef(client).once("value", function (snapshot) {
      let documentPairs = snapshot.val();
      this.documents = _.values(documentPairs);
      this._notify();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
      //TODO tim: handle error
    }, this);
  };

  createNewDocument = function(client: Client, type:DocumentType):Document {
    let document = new Document();
    let clientDocumentsDataRef = this.firebaseService.getDocumentDataRef(client);
    document.id = clientDocumentsDataRef.push().key();
    document.clientId = client.id;
    document.date = moment().format('DD/MM/YYYY');
    document.type = type;

    this.firebaseService.getNextDocNumber().then(number => {
      document.number = new Date().getFullYear() + "/" + _.padLeft(number, 3, '0');
      this.saveDocument(client, document);
      this._notify();
    }); //TODO .error(err => handle)

    return document;
  };

  saveDocument = function(client: Client, document:Document) {
    this.firebaseService.getDocumentDataRef(client).child(document.id).set(document);
  };

  _notify = function() {
    if(this._documentsObserver) {
      this._documentsObserver.next(this.documents);
    }
  }
}
