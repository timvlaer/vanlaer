import {Component, Input, Output, OnChanges, SimpleChange, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Client} from '../../../domain/Client';
import {Document, DocumentType} from '../../../domain/Document';

import {ClientService} from '../../../services/ClientService'
import {DocumentService} from '../../../services/DocumentService'

@Component({
  selector: 'document-list',
  templateUrl: './app/components/facturatie/document-list/document-list.component.html',
  directives: [CORE_DIRECTIVES]
})
export class DocumentListCmp implements OnChanges {
  @Input() client:Client;

  @Output() select:EventEmitter<Document> = new EventEmitter();

  documentService:DocumentService;

  selectedDocument:Document = null;

  documents:Document[] = [];

  constructor(documentService:DocumentService) {
    this.documentService = documentService;
    this.documentService.documents$.subscribe(documents => {
      this.documents = documents;
      //erase selection if new collection doesn't contain selection
      if(this.selectedDocument && this.documents.indexOf(this.selectedDocument) < 0) {
        this.selectDocument(null);
      }
    });
  }

  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    if(this.client) {
      this.documentService.loadDocuments(this.client);
    }
  };

  selectDocument(document:Document) {
    this.selectedDocument = document;
    this.select.emit(document);
    console.log(document);
  };

  createNewDocument(type:DocumentType) {
    var document = this.documentService.createNewDocument(this.client, type);
    this.documents.push(document);
  };



}
