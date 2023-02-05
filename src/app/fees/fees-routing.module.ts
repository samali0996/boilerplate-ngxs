import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UrlFragments} from 'app/@shared/routing/url-fragments';
import {FeesComponent} from './components/fees.component';

const routes: Routes = [
  {
    path: UrlFragments.Empty,
    component: FeesComponent,
  },
  {
    path: '**',
    redirectTo: UrlFragments.Empty,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeesRoutingModule {}
