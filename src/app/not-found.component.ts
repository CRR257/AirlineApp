import { Component } from '@angular/core';

@Component({
    selector: 'passenger-not-found',
    template: `
    <div>
        Not found. <a routerLink="/">Go home</a> ?
    </div>
    `
})

export class NotFoundComponent {};