import {Component} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

interface SkillAssetMapping {
    name: string,
    file: string
}

@Component({
    selector: 'employee-skills',
    standalone: true,
    imports: [
        NgOptimizedImage,
        NgForOf
    ],
    templateUrl: './employee-skills.component.html',
    styleUrl: './employee-skills.component.scss'
})
export class EmployeeSkillsComponent {

    protected readonly skillList: Array<SkillAssetMapping> = [
        {name: 'AWS', file: '/aws.svg'},
        {name: 'Docker', file: '/docker.svg'},
        {name: 'git', file: '/git.svg'},
        {name: 'Java', file: '/java-48.svg'},
        {name: 'jira', file: '/jira.svg'},
        {name: 'Kubernetes', file: '/k8s.svg'},
        {name: 'Linux', file: '/linux.svg'},
        {name: 'Rust', file: '/rust.svg'},
        {name: 'Spring Boot', file: '/spring.svg'},
        {name: 'TeamCity', file: '/teamcity.svg'}
    ];

    protected readonly assetPath = 'assets/img/skill';
}
