import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { ClickActionComponent } from './components/click-action/click-action.component';
import { HtmlPropertiesComponent } from './components/html-properties/html-properties.component';
import { TwoWayBidingComponent } from './components/two-way-biding/two-way-biding.component';
import { TemplateComponent } from './components/template/template.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStylesComponent } from './components/ng-styles/ng-styles.component';
import { ModulesComponentsComponent } from './components/modules-components/modules-components.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    ClickActionComponent,
    HtmlPropertiesComponent,
    TwoWayBidingComponent,
    TemplateComponent,
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStylesComponent,
    ModulesComponentsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, PokemonBaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
