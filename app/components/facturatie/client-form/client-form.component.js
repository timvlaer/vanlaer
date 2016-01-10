System.register(['angular2/core', 'angular2/common', '../../../domain/Client', '../../../services/ClientService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Client_1, ClientService_1;
    var ClientFormCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Client_1_1) {
                Client_1 = Client_1_1;
            },
            function (ClientService_1_1) {
                ClientService_1 = ClientService_1_1;
            }],
        execute: function() {
            ClientFormCmp = (function () {
                function ClientFormCmp(clientService) {
                    this.done = new core_1.EventEmitter();
                    this.emitDoneEvent = function () {
                        this.done.emit(this.client);
                    };
                    this.saveClient = function () {
                        this.clientService.saveClient(this.client);
                    };
                    this.cancel = function () {
                        this.clientService.rollbackClient(this.client);
                    };
                    this.remove = function () {
                        this.clientService.removeClient(this.client);
                        this.done.emit(this.client);
                    };
                    this.clientService = clientService;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Client_1.Client)
                ], ClientFormCmp.prototype, "client", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ClientFormCmp.prototype, "done", void 0);
                ClientFormCmp = __decorate([
                    core_1.Component({
                        selector: 'client-form',
                        templateUrl: './app/components/facturatie/client-form/client-form.component.html',
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [ClientService_1.ClientService])
                ], ClientFormCmp);
                return ClientFormCmp;
            })();
            exports_1("ClientFormCmp", ClientFormCmp);
        }
    }
});
//# sourceMappingURL=client-form.component.js.map