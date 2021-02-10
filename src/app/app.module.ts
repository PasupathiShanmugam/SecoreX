import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { HeadNavbarComponent } from './components/head-navbar/head-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { LoginComponent } from './components/login/login.component';

import { SettingsService } from './services/settings.service';
import { RootComponent } from './components/root/root.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IdCardApprovalComponent } from './components/id-card-approval/id-card-approval.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SideNavbarComponent,
    HeadNavbarComponent,
    LineChartComponent,
    BarChartComponent,
    LoginComponent,
    RootComponent,
    NavBarComponent,
    IdCardApprovalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,ChartsModule,
    FlexLayoutModule
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
