import { trigger, state, transition, animate, style } from '@angular/animations';

export const carouselImage = trigger('carouselImage', [
    state('default', style({})),
    state('changed', style({
        opacity: '0'
    })),
    transition('default <=> *', [
        animate(1000)
    ])
]);
