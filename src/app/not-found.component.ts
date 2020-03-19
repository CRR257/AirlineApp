import { Component } from '@angular/core';

@Component({
    selector: 'passenger-not-found',
    template: `
    <div>
        You haven't selected a passenger. <a routerLink="/passengers">Go select passenger</a> ?
    </div>
    `
})

export class NotFoundComponent {};