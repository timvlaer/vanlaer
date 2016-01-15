import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Client} from '../../../domain/Client';
import {Document} from '../../../domain/Document';

@Component({
  selector: 'document',
  templateUrl: './app/components/facturatie/document/document.component.html',
  styleUrls: ['./app/components/facturatie/document/document.component.css'],
  directives: [CORE_DIRECTIVES]
})
export class DocumentCmp {

  @Input() client:Client;
  @Input() document:Document;

}
