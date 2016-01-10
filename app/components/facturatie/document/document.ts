import {Component, Input, CORE_DIRECTIVES} from 'angular2/core';

import {Client} from '../../../domain/Client';

@Component({
  selector: 'document',
  templateUrl: './app/components/facturatie/document/document.html',
  directives: [CORE_DIRECTIVES]
})
export class DocumentCmp {

  @Input() client:Client;
  //@Input() document = { lines: [] };

}
