import { style, trigger, animate, transition } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
    transition('* <=> *', [
        style({
            opacity: '1'
        }),
        style({
            opacity: '0'
        })
    ])
]);
