export class Document {
  id: string;
  clientId: string;
  number: string;
  date: string;
  type: DocumentType;
  payment: string;
}

export enum DocumentType {
  OFFERTE, FACTUUR, VERZENDNOTA
}
