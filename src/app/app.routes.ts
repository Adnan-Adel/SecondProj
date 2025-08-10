import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Meals } from './meals/meals';
import { Team } from './team/team';
import { Contacts } from './contacts/contacts';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    {
        path: 'meals', component: Meals, children: [
            { path: '', redirectTo: 'pizza', pathMatch: 'full' },
            { path: 'pizza', component: Meals },
            { path: 'pasta', component: Meals },
            { path: 'corn', component: Meals }
        ]
    },
    { path: 'team', component: Team },
    { path: 'contacts', component: Contacts },
    { path: '**', component: Notfound }
];