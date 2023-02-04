import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {environment} from '@env/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsModule} from '@ngxs/store';
import {FeesState} from './fees/state/fees.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxsModule.forRoot([FeesState]),
    BrowserModule,
    AppRoutingModule,
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
