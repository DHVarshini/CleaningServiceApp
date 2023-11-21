import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';
import { ProviderRegisterComponent } from './provider-register/provider-register.component';
import { ProviderLoginComponent } from './provider-login/provider-login.component';
import { PackageCardsComponent } from './package-cards/package-cards.component';
import { BookComponent } from './book/book.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { BookingsComponent } from './bookings/bookings.component';
import { RatingComponent } from './rating/rating.component';
import { ProviderBookingsComponent } from './provider-bookings/provider-bookings.component';
import { PmyprofileComponent } from './pmyprofile/pmyprofile.component';
import { UserdashboarddisplayComponent } from './userdashboarddisplay/userdashboarddisplay.component';
import { ProviderdashboarddisplayComponent } from './providerdashboarddisplay/providerdashboarddisplay.component';
import { PratingComponent } from './prating/prating.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"userDashboard/:uid",
    component:UserDashboardComponent,
    children:[
      {
        path:"myprofile",
        component:MyprofileComponent
      },
      {
        path:"packageCard",
        component:PackageCardsComponent
      },
      {
        path:"bookings",
        component:BookingsComponent
      },
      {
        path:"rating",
        component:RatingComponent
      },
      {
        path:"book",
        component:BookComponent
      },
      {
        path:"",
        component:UserdashboarddisplayComponent
      },
      {
        path:"userdashboarddisplay",
        component:UserdashboarddisplayComponent
      }
    ]  
  },
  {
    path:"providerDashboard/:psid",
    component:ProviderDashboardComponent,
    children:[
      {
        path:"pmyprofile",
        component:PmyprofileComponent
      },
      {
        path:"providerDashboard",
        component:ProviderDashboardComponent
      },
      {
        path:"providerBookings",
        component:ProviderBookingsComponent
      },
      {
        path:"prating",
        component:PratingComponent
      },
      {
        path:"",
        component:ProviderdashboarddisplayComponent
      },
      {
        path:"providerdashboarddisplay",
        component:ProviderdashboarddisplayComponent
      }
    ]
  },
  {
    path:"providerRegister",
    component:ProviderRegisterComponent
  },
  {
    path:"providerlogin",
    component:ProviderLoginComponent
  }
  // {
  //   path : "category", // blog/1    blog/2   blog/4323   blog/political-update
  //   component : CategoryComponent,
  //   children : [
  //     {
  //       path : ":categoryId",         //      /category/dsadsa
  //       component : ArticleComponent
  //     },
  //     {
  //       path : "article/:blogId", //     /blog/article/1
  //       component : BlogComponent
  //     }
  //   ]
  // }
  // {
  //   path:"about",
  //   component:AboutComponent
  // },
  // {
  //   path:"servies",
  //   component:
  // },
  // {
  //   path:"contact",
  //   component:ContactComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
