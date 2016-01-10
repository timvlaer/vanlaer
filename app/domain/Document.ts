export class Document {
  generateUUID = function(): string {
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

  id: string = this.generateUUID();
  number: string;
  date: Date;
  type: DocumentType;
  payment: string;


}

export enum DocumentType {
  OFFERTE, FACTUUR, VERZENDNOTA
}