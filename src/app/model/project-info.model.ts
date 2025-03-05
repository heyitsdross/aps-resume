import {Duration} from "./duration.model";

export interface ProjectInfo {
    name: string,
    description: string,
    duration: Duration,
    technologies: Array<string>
}
