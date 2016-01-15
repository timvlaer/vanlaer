import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {ClientService} from './services/ClientService';
import {DocumentService} from './services/DocumentService';

import {AppCmp} from './components/app/app';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

bootstrap(AppCmp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ClientService,
  DocumentService
]);
