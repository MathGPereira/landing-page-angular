import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselControlService {

    public info!: any;

    public testInfo(info: number): void {
        this.info = info;
    }
}
