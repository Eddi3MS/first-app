import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { ClickActionComponent } from './click-action/click-action.component';
import { HtmlPropertiesComponent } from './html-properties/html-properties.component';
import { TwoWayBidingComponent } from './two-way-biding/two-way-biding.component';
import { TemplateComponent } from './template/template.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStylesComponent } from './ng-styles/ng-styles.component';
import { ModulesComponentsComponent } from './modules-components/modules-components.component';

@NgModule({
  declarations: [AppComponent, StringInterpolationComponent, ClickActionComponent, HtmlPropertiesComponent, TwoWayBidingComponent, TemplateComponent, NgIfComponent, NgForComponent, NgClassComponent, NgStylesComponent, ModulesComponentsComponent, ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, PokemonBaseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
