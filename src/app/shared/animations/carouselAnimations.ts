import { style, trigger, animate, transition, state, group } from '@angular/animations';

export const opacityAnimations = trigger('opacityAnimations', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate('1500ms', style({ opacity: 1 }))
    ])
]);

export const positionAnimation = trigger('positionAnimation', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate('1100ms', style({ opacity: 1 }))
    ]),
    transition('* => void', [
        animate('1100ms', style({ opacity: 0 }))
    ])
]);
