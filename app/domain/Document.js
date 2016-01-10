System.register([], function(exports_1) {
    var Document, DocumentType;
    return {
        setters:[],
        execute: function() {
            Document = (function () {
                function Document() {
                    this.generateUUID = function () {
                        //var d = new Date().getTime();
                        //if (window.performance && typeof window.performance.now === "function") {
                        //  d += performance.now(); //use high-precision timer if available
                        //}
                        //return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        //  var r = (d + Math.random() * 16) % 16 | 0;
                        //  d = Math.floor(d / 16);
                        //  return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                        //});
                    };
                    this.id = this.generateUUID();
                }
                return Document;
            })();
            exports_1("Document", Document);
            (function (DocumentType) {
                DocumentType[DocumentType["OFFERTE"] = 0] = "OFFERTE";
                DocumentType[DocumentType["FACTUUR"] = 1] = "FACTUUR";
                DocumentType[DocumentType["VERZENDNOTA"] = 2] = "VERZENDNOTA";
            })(DocumentType || (DocumentType = {}));
            exports_1("DocumentType", DocumentType);
        }
    }
});
//# sourceMappingURL=Document.js.map