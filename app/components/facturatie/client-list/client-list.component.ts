import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Client} from '../../../domain/Client';

import {ClientService} from '../../../services/ClientService'

@Component({
  selector: 'client-list',
  templateUrl: './app/components/facturatie/client-list/client-list.component.html',
  styleUrls: ['./app/components/facturatie/client-list/client-list.css'],
  directives: [CORE_DIRECTIVES]
})
export class ClientListCmp {
  @Output() select:EventEmitter = new EventEmitter();

  clientService:ClientService;

  clients:Client[];
  filteredClientList:Client[] = this.clients;

  selectedClient:Client = null;

  constructor(clientService:ClientService) {
    this.clientService = clientService;
    this.clients = this.clientService.getClients();
    this.filteredClientList = this.clients;
  }

  selectClient = function(client:Client) {
    this.selectedClient = client;
    if(client) {
      this.select.next(client);
    }
  };

  filterClient = function(event:any) {
    if(event && event.target && event.target.value) {
      let filterValue = event.target.value.toLowerCase();
      this.filteredClientList = this.clients.filter((client:Client) => client.name && client.name.toLowerCase().indexOf(filterValue) >= 0);
      if(this.filteredClientList.length == 1) {
        this.selectClient(this.filteredClientList[0]);
      }
    } else {
      this.filteredClientList = this.clients;
    }
  }

}
