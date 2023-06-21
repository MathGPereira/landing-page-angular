import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarouselComponent } from './core/components/carousel/carousel.component';
import { SlidesComponent } from './core/components/carousel/slides/slides.component';
import { HowWeDoComponent } from './core/components/how-we-do/how-we-do.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CarouselComponent,
        children: [
            {
                path: '',
                component: SlidesComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
