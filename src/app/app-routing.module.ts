import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UrlFragments} from './@shared/routing/url-fragments';

const routes: Routes = [
  {
    path: UrlFragments.Empty,
    children: [
      {
        path: UrlFragments.Fees,
        loadChildren: () =>
          import('./fees/fees.module').then(m => m.FeesModule),
      },
    ],
  },

  {path: '**', redirectTo: UrlFragments.Empty, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
