import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {FacturatieCmp} from '../facturatie/facturatie.component';


@Component({
  selector: 'app',
  templateUrl: './app/components/app/app.html',
  styleUrls: ['./app/components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: FacturatieCmp, as: 'Facturatie' }
])
export class AppCmp {}
