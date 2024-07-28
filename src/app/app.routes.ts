import { Routes } from '@angular/router';
import { AtypeComponent } from './atype/atype.component';
import { BtypeComponent } from './btype/btype.component';

export const routes: Routes = [
    {path: 'a', component: AtypeComponent},
    {path: 'b', component: BtypeComponent},
];
