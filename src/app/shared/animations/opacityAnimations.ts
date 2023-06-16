import { style, trigger, animate, transition, state } from '@angular/animations';

export const opacityAnimations = trigger('opacityAnimations', [
    state('default', style({
        opacity: '1'
    })),
    state('invisible', style({
        opacity: '0'
    })),
    transition('* <=> *', [
        animate('1.9s ease-in-out')
    ])
]);
