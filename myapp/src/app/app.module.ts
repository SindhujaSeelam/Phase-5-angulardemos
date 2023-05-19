import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningalertComponent } from './warning-alert/warning-alert.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { NamesComponent } from './names/names.component';
import { ClicklogsComponent } from './clicklogs/clicklogs.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ProductComponent } from './products/product/product.component';
import { LifecycledemoComponent } from './lifecycledemo/lifecycledemo.component';
import { BasicHighlightDirective } from './CustomDirectives/BasicHighlightDirective';
import { BetterHighlightDirectivesDirective } from './CustomDirectives/better-highlight-directives.directive';
import { AccountsComponent } from './accounts/accounts.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { AccountComponent } from './accounts/account/account.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ObservabledemosComponent } from './observabledemos/observabledemos.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { BlogpostComponent } from './blogposts/blogpost/blogpost.component';
import { ProjectComponent } from './project/project.component';
import { SingleqComponent } from './project/singleq/singleq.component';
import { ScoreComponent } from './project/score/score.component';
import { WelcomeComponent } from './project/welcome/welcome.component';
import { UpdateComponent } from './foodblogproject/singleblog/update/update.component';
import { FoodblogprojectComponent } from './foodblogproject/foodblogproject.component';
import { SingleblogComponent } from './foodblogproject/singleblog/singleblog.component';
import { KitchenStoryComponent } from './kitchen-story/kitchen-story.component';
import { PaymentComponent } from './kitchen-story/payment/payment.component';
import { ConfirmationpageComponent } from './kitchen-story/confirmationpage/confirmationpage.component';
import { HomepageComponent } from './kitchen-story/homepage/homepage.component';
import { AdminComponent } from './kitchen-story/admin/admin.component';
import { AdminportalComponent } from './kitchen-story/admin/adminportal/adminportal.component';
import { MedicareprojectComponent } from './medicareproject/medicareproject.component';
import { MedicarehomeComponent } from './medicareproject/medicarehome/medicarehome.component';
import { MedicareadminComponent } from './medicareproject/medicareadmin/medicareadmin.component';
// import { FoodblogprojectComponent } from './foodblogproject/foodblogproject.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MedicaresingleproductComponent } from './medicareproject/medicaresingleproduct/medicaresingleproduct.component';
import { MedicarepaymentComponent } from './medicareproject/medicarepayment/medicarepayment.component';
import { MedicareconfirmationpageComponent } from './medicareproject/medicareconfirmationpage/medicareconfirmationpage.component';
import { MedicareadminportalComponent } from './medicareproject/medicareadmin/medicareadminportal/medicareadminportal.component';
import { CartComponent } from './medicareproject/cart/cart.component';

const approutes:Routes=[
  {path :'home', component:HomeComponent},
  {path:'server',component:ServerComponent},
  {path:'warningalert',component:WarningalertComponent},
  {path:'names',component:NamesComponent},
  {path:'products',component:ProductsComponent},
  {path:'observe',component:ObservabledemosComponent},
  {path:'score',component:ScoreComponent},
  {path:'blogposts',component:BlogpostsComponent},
  {path:'search',component:Ng2SearchPipeModule},
  {path:'cart',component:CartComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WarningalertComponent,
    SuccessAlertComponent,
    ServerComponent,
    NamesComponent,
    ClicklogsComponent,
    AddproductComponent,
    ProductComponent,
    LifecycledemoComponent,
    BasicHighlightDirective,
    BetterHighlightDirectivesDirective,
    AccountsComponent,
    NewaccountComponent,
    AccountComponent,
    HomeComponent,
    ObservabledemosComponent,
    BlogpostsComponent,
    BlogpostComponent,
    ProjectComponent,
    SingleqComponent,
    ScoreComponent,
    WelcomeComponent,
    UpdateComponent,
    FoodblogprojectComponent,
    SingleblogComponent,
    KitchenStoryComponent,
    PaymentComponent,
    ConfirmationpageComponent,
    HomepageComponent,
    AdminComponent,
    AdminportalComponent,
    MedicareprojectComponent,
    MedicarehomeComponent,
    MedicareadminComponent,
    MedicaresingleproductComponent,
    MedicarepaymentComponent,
    MedicareconfirmationpageComponent,
    MedicareadminportalComponent,
    CartComponent,
    
    // FoodblogprojectComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(approutes),
    HttpClientModule,Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }