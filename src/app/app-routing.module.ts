import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarouselComponent } from './core/components/carousel/carousel.component';
import { SlidesComponent } from './core/components/carousel/slides/slides.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CarouselComponent,
        children: [{
            path: '',
            component: SlidesComponent,
            data: {animation: 'routeAnimations', src: ''}
        }]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
