import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AreaPathConfiguration {
  Path: string;
  IncludeChildren: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class TfsApiService {

  constructor() { }

  // getTFSData()  {

  //   let me = this;
  //   VSS.require(["VSS/Service", "TFS/WorkItemTracking/RestClient"], (VSS_Service, WorkRestClient) => {

  //     // let webContext: WebContext = VSS.getWebContext();
  //     // this.projectName = webContext.project.name;
  //     // this.tfsData.team = webContext.team.name;

  //   });

  // }

  public getProjectName(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      VSS.require(["VSS/Service"], (VSS_Service) => {
        let webContext = VSS.getWebContext();
        resolve(webContext.project.name);
      });
    });

  }
  public getTeamName(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      VSS.require(["VSS/Service"], (VSS_Service) => {
        let webContext = VSS.getWebContext();
        resolve(webContext.team.name);
      });
    });

  }

  public GetAreaPaths(): Promise<AreaPathConfiguration[]> {

    return new Promise<AreaPathConfiguration[]>((resolve, reject) => {

      VSS.require(["VSS/Service", "TFS/Work/RestClient"], (VSS_Service, WorkRestClient) => {

        let context: WebContext = VSS.getWebContext();
        let client = WorkRestClient.getClient();

        var teamContext = {
          project: context.project.name,
          projectId: context.project.id,
          team: context.team.name,
          teamId: context.team.id
        };

        //query the area paths
        client.getTeamFieldValues(teamContext).then((settings) => {
            var areaPaths = new Array<AreaPathConfiguration>();
            settings.values.forEach(item => {
                areaPaths.push({ Path: item.value, IncludeChildren: item.includeChildren });
            });
            resolve(areaPaths);
        });
      });
    });
  }
}
