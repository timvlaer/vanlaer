System.register([], function(exports_1) {
    var Document, DocumentType;
    return {
        setters:[],
        execute: function() {
            Document = (function () {
                function Document() {
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