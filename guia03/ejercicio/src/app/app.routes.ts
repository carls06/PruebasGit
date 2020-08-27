import { Routes, RouterModule } from '@angular/router';

import { Ejer1Component } from './components/ejer1/ejer1.component';
import { Ejer2Component } from './components/ejer2/ejer2.component';

const APP_ROUTES: Routes = [
    
    { path: 'ejer1', component: Ejer1Component },
    { path: 'ejer2', component: Ejer2Component },
    
   
    { path: '**', pathMatch:'full', redirectTo:'ejer1' },
    ];


export const  APP_ROUTING = RouterModule.forRoot(APP_ROUTES);