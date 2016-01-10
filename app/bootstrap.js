System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', './services/ClientService', './components/app/app', 'rxjs/add/operator/map', 'rxjs/add/operator/do'], function(exports_1) {
    var browser_1, router_1, http_1, ClientService_1, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ClientService_1_1) {
                ClientService_1 = ClientService_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            browser_1.bootstrap(app_1.AppCmp, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                ClientService_1.ClientService
            ]);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map