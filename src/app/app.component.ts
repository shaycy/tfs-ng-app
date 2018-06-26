///<reference types="vss-web-extension-sdk" />

import { Component } from '@angular/core';
import { TfsApiService, AreaPathConfiguration } from './services/tfs-api.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  projectName: string = '';
  teamName: string = '';
  areaPathConfigurations: AreaPathConfiguration[];

  constructor(private tfsApiService: TfsApiService) { }

  ngOnInit() {

    this.tfsApiService.getProjectName().then(name => { this.projectName = name; });
    this.tfsApiService.getTeamName().then(name => { this.teamName = name; });
    this.tfsApiService.GetAreaPaths().then(areaPathConfigs => { this.areaPathConfigurations = areaPathConfigs; });

  }



}
