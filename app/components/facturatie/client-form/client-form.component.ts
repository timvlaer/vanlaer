import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {Client} from '../../../domain/Client';

import {ClientService} from '../../../services/ClientService'

@Component({
  selector: 'client-form',
  templateUrl: './app/components/facturatie/client-form/client-form.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ClientFormCmp {

  @Input() client:Client;

  clientService:ClientService;

  @Output() done = new EventEmitter();

  constructor(clientService:ClientService) {
    this.clientService = clientService;
  }

  emitDoneEvent = function() {
    this.done.emit(this.client);
  };

  saveClient = function() {
    this.clientService.saveClient(this.client);
  };

  cancel = function() {
    this.clientService.rollbackClient(this.client);
  };

  remove = function() {
    this.clientService.removeClient(this.client);
    this.done.emit(this.client);
  };





}
