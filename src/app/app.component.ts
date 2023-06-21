import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'Designing & Building';
    text = 'Contact us';

    firstExample = {
        title: 'Meet and define goals',
        image: 'image1',
        firstDescription: 'The first thing we do is meeting with our clients and talk through their goals on a future project. During this meeting, feel free to communicate your ideas and ask lots of questions.',
        secondDescription: 'This stage is highly decisive as you can evaluate the work of your potential architect by browsing their portfolio. As a client, you may also assess whether the architect listens to your needs and confirms that he or she understands them.'
    }
}
