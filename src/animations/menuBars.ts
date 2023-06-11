import { trigger, state, style, animate, transition, query, group } from '@angular/animations';


export const topBar = trigger('topBar', [
    state('default', style({
        width: '0'
    })),
    state('hover',style({
        width: '100%'
    })),
    transition('default => hover', [
        animate('200ms ease-in-out')
    ]),
    transition('hover => default', [
        animate('200ms ease-in-out')
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
        animate('200ms ease-in-out')
    ]),
    transition('hover => default', [
        animate('200ms ease-in-out')
    ])
]);

export const hamburguerMenuX = trigger('hamburguerMenuX', [
    state('hamburguer', style({
        width: '100%'
    })),
    state('topBar', style({
        transform: 'rotate(45deg)',
        transformOrigin: 'left',
        margin: '6px',
    })),
    state('middleBar', style({
        opacity: 0
    })),
    state('bottomBar', style({
        transform: 'rotate(-45deg)',
        transformOrigin: 'left',
        margin: '6px',
    })),
    transition('* => *', [
        animate(200)
    ])
]);
