import {Component, Input, Output, OnChanges, SimpleChange, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Client} from '../../../domain/Client';
import {Document, DocumentType} from '../../../domain/Document';

import {ClientService} from '../../../services/ClientService'

@Component({
  selector: 'document-list',
  templateUrl: './app/components/facturatie/document-list/document-list.component.html',
  directives: [CORE_DIRECTIVES]
})
export class DocumentListCmp implements OnChanges {
  @Input() client:Client;

  @Output() select:EventEmitter<Document> = new EventEmitter();

  selectedDocument:Document = null;

  documents:Document[] = [];

  //constructor(clientService:ClientService) {
  //  this.clientService = clientService;
  //  this.clients = this.clientService.getClients();
  //  this.filteredClientList = this.clients;
  //}

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    console.log('ngOnChanges - myProp = ' + changes['client'].currentValue);
    //TODO load documents
    if(this.client) {

    }
  };

  selectDocument(document:Document) {
    this.selectedDocument = document;
    this.select.emit(document);
    console.log(document);
  };

  createNewDocument(type:DocumentType) {
    var document = new Document();
    document.number = new Date().getFullYear() + "/001"; //TODO get next number
    document.date = new Date();
    document.type = type;
    this.documents.push(document);
  };



}
