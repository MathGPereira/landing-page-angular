import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent {

    public team = [
        {
            img: '../../../../../assets/images/team-1-290x284.png',
            name: 'Mary Scot',
            function: 'Lead Interior Designer'
        },
        {
            img: '../../../../../assets/images/team-2-290x284.png',
            name: 'John Balmer',
            function: 'Senior Architect'
        },
        {
            img: '../../../../../assets/images/team-3-290x284.png',
            name: 'Ann Smith',
            function: 'Exterior & Landscape Designer'
        },
        {
            img: '../../../../../assets/images/team-4-290x284.png',
            name: 'Kate Mcmillan',
            function: 'Project Manager'
        }
    ]
}
