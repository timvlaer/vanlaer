System.register(['angular2/core', '../../services/ClientService', '../facturatie/client-list/client-list.component', '../facturatie/client-form/client-form.component', '../facturatie/document-list/document-list.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ClientService_1, client_list_component_1, client_form_component_1, document_list_component_1;
    var FacturatieCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ClientService_1_1) {
                ClientService_1 = ClientService_1_1;
            },
            function (client_list_component_1_1) {
                client_list_component_1 = client_list_component_1_1;
            },
            function (client_form_component_1_1) {
                client_form_component_1 = client_form_component_1_1;
            },
            function (document_list_component_1_1) {
                document_list_component_1 = document_list_component_1_1;
            }],
        execute: function() {
            FacturatieCmp = (function () {
                function FacturatieCmp(clientService) {
                    this.clientEditMode = false;
                    this.selectClient = function (client) {
                        this.selectedClient = client;
                    };
                    this.createNewClient = function () {
                        this.selectedClient = this.clientService.createNewClient();
                        this.clientEditMode = true;
                    };
                    this.editSelectedClient = function () {
                        this.clientEditMode = true;
                    };
                    this.clientEditingDone = function (client) {
                        this.clientEditMode = false;
                    };
                    this.clientService = clientService;
                }
                FacturatieCmp = __decorate([
                    core_1.Component({
                        selector: 'facturatie',
                        templateUrl: './app/components/facturatie/facturatie.component.html',
                        directives: [client_list_component_1.ClientListCmp, client_form_component_1.ClientFormCmp, document_list_component_1.DocumentListCmp]
                    }), 
                    __metadata('design:paramtypes', [ClientService_1.ClientService])
                ], FacturatieCmp);
                return FacturatieCmp;
            })();
            exports_1("FacturatieCmp", FacturatieCmp);
        }
    }
});
//# sourceMappingURL=facturatie.component.js.map