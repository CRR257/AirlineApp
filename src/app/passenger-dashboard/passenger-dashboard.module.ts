import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

import { PassengerActionsComponent } from './components/passenger-actions/passenger-actions.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';

import { PassengerService } from './services/passenger-dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { PassengerViewComponent } from './components/passenger-view/passenger-view.component';

const routes: Routes = [
    {
        path: 'passengers',
        children: [
            {path: '', component: PassengerDashboardComponent},
            { path: ':id', component: PassengerViewComponent}
        ]
    }
];

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerActionsComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerInfoComponent,
        PassengerFormComponent,
        PassengerViewComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        BrowserModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        PassengerService
    ],
    exports: [
        PassengerDashboardComponent,
        PassengerViewComponent
    ]
})
export class PassengerDashboardModule { }
