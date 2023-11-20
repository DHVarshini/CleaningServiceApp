import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProviderLoginComponent } from './provider-login/provider-login.component';
import { ProviderRegisterComponent } from './provider-register/provider-register.component';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';
import { PackageCardsComponent } from './package-cards/package-cards.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'
import { BookComponent } from './book/book.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { RatingComponent } from './rating/rating.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { ProviderSidebarComponent } from './provider-sidebar/provider-sidebar.component';
import { ProviderBookingsComponent } from './provider-bookings/provider-bookings.component';
import { PmyprofileComponent } from './pmyprofile/pmyprofile.component';
import { UserdashboarddisplayComponent } from './userdashboarddisplay/userdashboarddisplay.component';
import { ProviderdashboarddisplayComponent } from './providerdashboarddisplay/providerdashboarddisplay.component';
import { PratingComponent } from './prating/prating.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    SidebarComponent,
    ProviderLoginComponent,
    ProviderRegisterComponent,
    ProviderDashboardComponent,
    PackageCardsComponent,
    AboutComponent,
    BookComponent,
    MyprofileComponent,
    BookingsComponent,
    RatingComponent,
    UserHeaderComponent,
    ProviderSidebarComponent,
    ProviderBookingsComponent,
    PmyprofileComponent,
    UserdashboarddisplayComponent,
    ProviderdashboarddisplayComponent,
    PratingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
