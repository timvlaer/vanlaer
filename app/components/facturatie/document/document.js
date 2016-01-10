System.register(['angular2/core', '../../../domain/Client'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Client_1;
    var DocumentCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Client_1_1) {
                Client_1 = Client_1_1;
            }],
        execute: function() {
            DocumentCmp = (function () {
                function DocumentCmp() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Client_1.Client)
                ], DocumentCmp.prototype, "client", void 0);
                DocumentCmp = __decorate([
                    core_1.Component({
                        selector: 'document',
                        templateUrl: './app/components/facturatie/document/document.html',
                        directives: [core_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DocumentCmp);
                return DocumentCmp;
            })();
            exports_1("DocumentCmp", DocumentCmp);
        }
    }
});
//# sourceMappingURL=document.js.map