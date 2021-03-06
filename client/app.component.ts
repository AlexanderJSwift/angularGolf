import { Component } from '@angular/core';

import { Parties } from '../both/collections/parties.collection'
//noinspection TypeScriptCheckImport
import template from './app.component.html';

@Component({
  selector: 'app',
  template
})
export class AppComponent {
  parties: Mongo.Cursor<any>;

  constructor() {
    this.parties = Parties.find();
  }
}
