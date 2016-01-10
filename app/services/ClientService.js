System.register(['angular2/core', '../domain/Client', './FirebaseService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Client_1, FirebaseService_1;
    var ClientService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Client_1_1) {
                Client_1 = Client_1_1;
            },
            function (FirebaseService_1_1) {
                FirebaseService_1 = FirebaseService_1_1;
            }],
        execute: function() {
            ClientService = (function () {
                function ClientService() {
                    this.STORAGE_KEY = "clients";
                    this.clients = [];
                    this.listeners = [];
                    this.getClients = function () {
                        return this.clients;
                    };
                    this.createNewClient = function () {
                        var client = new Client_1.Client();
                        client.name = " ";
                        this.clients.push(client);
                        return client;
                    };
                    this.saveClient = function (client) {
                        var existingClient = this.clients.find(function (c) { return c.id == client.id; });
                        if (!existingClient) {
                            this.clients.push(client);
                        }
                        else {
                        }
                        var newClientRef = this.dataRef.push();
                        client.id = newClientRef.key();
                        newClientRef.set(client);
                        //TODO check client.id -> save or update
                        this._store();
                    };
                    this.removeClient = function (client) {
                        this.clients = this.clients.splice(this.clients.indexOf(client), 1);
                        this._store();
                    };
                    this.rollbackClient = function (client) {
                        this._load();
                    };
                    this._store = function () {
                        //localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.clients));
                    };
                    this._load = function () {
                        //if (localStorage.getItem(this.STORAGE_KEY)) {
                        //  this.clients = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
                        //}
                        this.dataRef.on("value", function (snapshot) {
                            var clientPairs = snapshot.val();
                            console.log(clientPairs);
                            this.clients = _.values(clientPairs);
                        }, function (errorObject) {
                            console.log("The read failed: " + errorObject.code);
                        }, this);
                    };
                    this.dataRef = new FirebaseService_1.FirebaseService().clientDataRef;
                    this._load();
                }
                ClientService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ClientService);
                return ClientService;
            })();
            exports_1("ClientService", ClientService);
        }
    }
});
//# sourceMappingURL=ClientService.js.map