System.register(['angular2/core', 'angular2/common', '../../services/ClientService', '../facturatie/client-list/client-list.component', '../facturatie/client-form/client-form.component', '../facturatie/document-list/document-list.component', '../facturatie/document/document.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, ClientService_1, client_list_component_1, client_form_component_1, document_list_component_1, document_component_1;
    var FacturatieCmp;
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
            },
            function (client_list_component_1_1) {
                client_list_component_1 = client_list_component_1_1;
            },
            function (client_form_component_1_1) {
                client_form_component_1 = client_form_component_1_1;
            },
            function (document_list_component_1_1) {
                document_list_component_1 = document_list_component_1_1;
            },
            function (document_component_1_1) {
                document_component_1 = document_component_1_1;
            }],
        execute: function() {
            FacturatieCmp = (function () {
                function FacturatieCmp(clientService) {
                    this.clientEditMode = false;
                    this.selectClient = function (client) {
                        this.selectedClient = client;
                    };
                    this.selectDocument = function (document) {
                        this.selectedDocument = document;
                    };
                    this.createNewClient = function () {
                        var newClient = this.clientService.createNewClient();
                        this.selectedClient = newClient;
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
                        directives: [client_list_component_1.ClientListCmp, client_form_component_1.ClientFormCmp, document_list_component_1.DocumentListCmp, document_component_1.DocumentCmp, common_1.CORE_DIRECTIVES]
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