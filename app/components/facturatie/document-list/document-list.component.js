System.register(['angular2/core', 'angular2/common', '../../../domain/Client', '../../../domain/Document'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Client_1, Document_1;
    var DocumentListCmp;
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
            function (Document_1_1) {
                Document_1 = Document_1_1;
            }],
        execute: function() {
            DocumentListCmp = (function () {
                function DocumentListCmp() {
                    this.select = new core_1.EventEmitter();
                    this.selectedDocument = null;
                    this.documents = [];
                }
                //constructor(clientService:ClientService) {
                //  this.clientService = clientService;
                //  this.clients = this.clientService.getClients();
                //  this.filteredClientList = this.clients;
                //}
                DocumentListCmp.prototype.ngOnChanges = function (changes) {
                    console.log('ngOnChanges - myProp = ' + changes['client'].currentValue);
                    //TODO load documents
                    if (this.client) {
                    }
                };
                ;
                DocumentListCmp.prototype.selectDocument = function (document) {
                    this.selectedDocument = document;
                    this.select.emit(document);
                    console.log(document);
                };
                ;
                DocumentListCmp.prototype.createNewDocument = function (type) {
                    var document = new Document_1.Document();
                    document.number = new Date().getFullYear() + "/001"; //TODO get next number
                    document.date = new Date();
                    document.type = type;
                    this.documents.push(document);
                };
                ;
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Client_1.Client)
                ], DocumentListCmp.prototype, "client", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], DocumentListCmp.prototype, "select", void 0);
                DocumentListCmp = __decorate([
                    core_1.Component({
                        selector: 'document-list',
                        templateUrl: './app/components/facturatie/document-list/document-list.component.html',
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DocumentListCmp);
                return DocumentListCmp;
            })();
            exports_1("DocumentListCmp", DocumentListCmp);
        }
    }
});
//# sourceMappingURL=document-list.component.js.map