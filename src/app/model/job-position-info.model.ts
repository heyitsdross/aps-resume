import {Duration} from "./duration.model";
import {ProjectInfo} from "./project-info.model";

export interface JobPositionInfo {
  title: string,
  company: string,
  duration: Duration,
  projects: Array<ProjectInfo>
}

