import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {environment} from '@env/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {RouterModule} from '@angular/router';
import {NgxsModule} from '@ngxs/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxsModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
