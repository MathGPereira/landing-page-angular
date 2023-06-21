import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'Designing & Building';
    text = 'Contact us';
    activeId = 1;
    howWeDo = [
        {
            id: 1,
            title: 'Meet and define goals',
            image: 'image1',
            firstDescription: 'The first thing we do is meeting with our clients and talk through their goals on a future project. During this meeting, feel free to communicate your ideas and ask lots of questions.',
            secondDescription: 'This stage is highly decisive as you can evaluate the work of your potential architect by browsing their portfolio. As a client, you may also assess whether the architect listens to your needs and confirms that he or she understands them.'
        },
        {
            id: 2,
            title: 'Working on the conecpt',
            image: 'image2',
            firstDescription: 'The next step of our cooperation lies in developing the concept of your future home. It helps us define every single factor that makes the construction process of your home successful.',
            secondDescription: 'Our team of designers and architects has to plan every single step of the project to make sure that the final result will meet not only your requirements but also international construction and safety standards. This is when monitoring & control begin.'
        },
        {
            id: 3,
            title: 'Building yout home',
            image: 'image3',
            firstDescription: 'There’s no doubt that the most important and responsible part of building a home is its construction process. As we work with reliable contractors, a great result is guaranteed.',
            secondDescription: 'This stage is one of the most complex ones as it includes a variety of tasks that must be controlled - from preparing the construction site to installing insulation and completing drywall as well as working on exterior.'
        },
        {
            id: 4,
            title: 'Completing a project',
            image: 'image4',
            firstDescription: 'When the project gets to its final stage, our quality control team conducts the final check of the building to make sure everything has been carried out the proper way.',
            secondDescription: 'Our employees will also make sure that all interior elements & fixtures are correctly installed during this final step. After everything is completed, we invite our client to assess the final result and experience the quality performance of our project.'
        }
    ];

    public changeId(id: number): void {
        this.activeId = id;
    }
}
