import { trigger, state, style, animate, transition } from '@angular/animations';

export const topBar = trigger('topBar', [
    state('default', style({
        width: '0'
    })),
    state('hover',style({
        width: '100%'
    })),
    transition('default => hover', [
        animate('500ms ease-in-out')
    ]),
    transition('hover => default', [
        animate('500ms ease-in-out')
    ])
]);

export const bottomBar = trigger('bottomBar', [
    state('default', style({
        width: '60%'
    })),
    state('hover', style({
        width: '100%'
    })),
    transition('default => hover', [
        animate('500ms ease-in-out')
    ]),
    transition('hover => default', [
        animate('500ms ease-in-out')
    ])
]);
