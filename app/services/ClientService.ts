import {Injectable} from 'angular2/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

import {Client} from '../domain/Client';
import {FirebaseService} from './FirebaseService';

@Injectable()
export class ClientService {

  clients$: Observable<Array<Client>>;
  private _clientsObserver: any;

  dataRef:Firebase;

  clients: Client[] = [];
  listeners:Function[] = [];

  constructor() {
    this.dataRef = new FirebaseService().clientDataRef;
    this.clients$ = new Observable(observer => this._clientsObserver = observer).share();
  }

  getClients = function(): Promise<Array<Client>> {
    return this.clients;
  };

  loadClients = function() {
    this.dataRef.once("value", function (snapshot) {
      let clientPairs = snapshot.val();
      this.clients = _.values(clientPairs);
      this._notify();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
      //TODO tim: handle error
    }, this);
  };

  createNewClient = function():Client {
    let client = new Client();
    client.id = this.dataRef.push().key();

    this.clients.push(client);
    this._notify();

    return client;
  };

  saveClient = function(client:Client) {
    this.dataRef.child(client.id).set(client);
  };

  removeClient = function(client:Client) {
    if(client.id) {
      this.dataRef.child(client.id).remove();
    }
  };

  rollbackClient = function(client:Client) {
      //TODO tim implement
  };

  _notify = function() {
    this._clientsObserver.next(this.clients);
  }
}
