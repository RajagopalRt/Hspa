import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/James/dashboard.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularMaterialModule } from './pages/Modules/angular-material/angular-material.module';
import { FlagComponent } from './pages/VAPInterview/flag/flag.component';
import { FlagRouteModule } from './pages/VAPInterview/flag/flag-route.module';
import { PropertyCardComponent } from './pages/HSPA/Front/property-card/property-card.component';
import { PropertyListComponent } from './pages/HSPA/Front/property-list/property-list.component';
import { NavBarComponent } from './pages/HSPA/Front/nav-bar/nav-bar.component';
import { DashComponent } from './pages/HSPA/Front/dash.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FlagComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    FlagRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
