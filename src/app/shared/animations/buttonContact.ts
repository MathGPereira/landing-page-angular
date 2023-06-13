import { trigger, state, animate, transition, style } from '@angular/animations';


export const topBorder = trigger('topBorder', [
    state('default', style({
        'background-color': '#c4956a',
        height: '1.2px',
        left: '0',
        top: '0',
        width: '100%'
    })),
    state('topBorderAnimated', style({
        'background-color': '#c4956a',
        height: '1.2px',
        top: '0',
        left: '100%'
    })),
    transition('default => topBorderAnimated', [
        animate('1s')
    ])
]);

export const bottomBorder = trigger('bottomBorder', [
    state('bottomBorderAnimated', style({
        'background-color': '#c4956a',
        bottom: '0',
        height: '1.2px',
        right: '0',
        width: '100%'
    })),
    state('default', style({
        'background-color': '#c4956a',
        bottom: '0',
        height: '1.2px',
        right: '100%'
    })),
    transition('bottomBorderAnimated => default', [
        animate('1s')
    ])
]);

export const rightBorder = trigger('rightBorder', [
    state('default', style({
        'background-color': '#c4956a',
        height: '100%',
        right: '0',
        top: '0',
        width: '1.2px'
    })),
    state('rightBorderAnimated', style({
        'background-color': '#c4956a',
        height: '0',
        right: '0',
        top: '0',
        width: '1.2px'
    })),
    transition('* => default', [
        animate('1s')
    ])
]);

export const leftBorder = trigger('leftBorder', [
    state('default', style({
        'background-color': '#c4956a',
        bottom: '0',
        height: '100%',
        left: '0',
        width: '1.2px'
    })),
    state('leftBorderAnimated', style({
        'background-color': '#c4956a',
        bottom: '0',
        height: '0',
        left: '0',
        width: '1.2px'
    })),
    transition('leftBorderAnimated => *', [
        animate('1s')
    ])
]);
