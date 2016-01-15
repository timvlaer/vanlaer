import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Client} from '../../domain/Client';
import {Document} from '../../domain/Document';

import {ClientService} from '../../services/ClientService'

import {ClientListCmp} from '../facturatie/client-list/client-list.component';
import {ClientFormCmp} from '../facturatie/client-form/client-form.component';
import {DocumentListCmp} from '../facturatie/document-list/document-list.component';
import {DocumentCmp} from '../facturatie/document/document.component';

@Component({
  selector: 'facturatie',
  templateUrl: './app/components/facturatie/facturatie.component.html',
  directives: [ClientListCmp, ClientFormCmp, DocumentListCmp, DocumentCmp, CORE_DIRECTIVES]
})
export class FacturatieCmp {

  clientEditMode:boolean = false;

  selectedClient:Client;
  selectedDocument:Document;

  clientService:ClientService;

  constructor(clientService:ClientService) {
    this.clientService = clientService;
  }

  selectClient = function(client:Client) {
    this.selectedClient = client;
  };

  selectDocument = function(document:Document) {
    this.selectedDocument = document;
  };

  createNewClient = function () {
    var newClient = this.clientService.createNewClient();
    this.selectedClient = newClient;
    this.clientEditMode = true;
  };

  editSelectedClient = function () {
    this.clientEditMode = true;
  };

  clientEditingDone = function (client:Client) {
    this.clientEditMode = false;
  };

}
