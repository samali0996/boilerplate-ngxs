import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeesRoutingModule} from './fees-routing.module';
import {FeesComponent} from './components/fees.component';
import {NgxsModule} from '@ngxs/store';
import {FeesState} from './state/fees.state';

@NgModule({
  declarations: [FeesComponent],
  imports: [
    NgxsModule.forFeature([FeesState]),
    CommonModule,
    FeesRoutingModule,
  ],
})
export class FeesModule {}
