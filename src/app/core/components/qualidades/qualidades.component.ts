import { Component } from '@angular/core';

@Component({
  selector: 'app-qualidades',
  templateUrl: './qualidades.component.html',
  styleUrls: ['./qualidades.component.scss']
})
export class QualidadesComponent {

    public mouseState = false;

    public changeImagePosition(event: MouseEvent): void {
        const backgroundImage: HTMLDivElement = <HTMLDivElement>document.querySelector("#movedBackground");

        backgroundImage.style.backgroundPositionX = -(event.offsetX) / 15 + 'px';
        backgroundImage.style.backgroundPositionY = -(event.offsetY) / 15 + 'px';
    }
}
