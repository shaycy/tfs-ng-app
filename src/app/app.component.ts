
import { Component } from '@angular/core';

import * as VSS_Context from 'VSS/Context';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'app';

    constructor()
    {
        var ctx = VSS_Context.getDefaultWebContext();
    }
}
