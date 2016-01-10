System.register(['angular2/core', 'angular2/common', '../../../services/ClientService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, ClientService_1;
    var ClientListCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ClientService_1_1) {
                ClientService_1 = ClientService_1_1;
            }],
        execute: function() {
            ClientListCmp = (function () {
                function ClientListCmp(clientService) {
                    this.select = new core_1.EventEmitter();
                    this.filteredClientList = this.clients;
                    this.selectedClient = null;
                    this.selectClient = function (client) {
                        this.selectedClient = client;
                        if (client) {
                            this.select.next(client);
                        }
                    };
                    this.filterClient = function (event) {
                        if (event && event.target && event.target.value) {
                            var filterValue = event.target.value.toLowerCase();
                            this.filteredClientList = this.clients.filter(function (client) { return client.name && client.name.toLowerCase().indexOf(filterValue) >= 0; });
                            if (this.filteredClientList.length == 1) {
                                this.selectClient(this.filteredClientList[0]);
                            }
                        }
                        else {
                            this.filteredClientList = this.clients;
                        }
                    };
                    this.clientService = clientService;
                    this.clients = this.clientService.getClients();
                    this.filteredClientList = this.clients;
                }
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ClientListCmp.prototype, "select", void 0);
                ClientListCmp = __decorate([
                    core_1.Component({
                        selector: 'client-list',
                        templateUrl: './app/components/facturatie/client-list/client-list.component.html',
                        styleUrls: ['./app/components/facturatie/client-list/client-list.css'],
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [ClientService_1.ClientService])
                ], ClientListCmp);
                return ClientListCmp;
            })();
            exports_1("ClientListCmp", ClientListCmp);
        }
    }
});
//# sourceMappingURL=client-list.component.js.map