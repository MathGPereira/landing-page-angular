import { trigger, state, animate, transition, style } from '@angular/animations';

export const animatedBorder = trigger('animatedBorder', [
    state('default', style({
        border: '1px solid #c4956a'
    })),
]);
