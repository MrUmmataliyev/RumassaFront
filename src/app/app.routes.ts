import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { NotFound404Component } from './components/pages/not-found404/not-found404.component';
import { ObmeniComponent } from './components/pages/obmeni/obmeni.component';
import { OplataComponent } from './components/pages/oplata/oplata.component';
import { SkidkiComponent } from './components/pages/skidki/skidki.component';
import { DostavkaComponent } from './components/pages/dostavka/dostavka.component';
import { LoginComponent } from './components/login/login.component';
import { KakoformitComponent } from './components/pages/kakoformit/kakoformit.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConsultationComponent } from './components/pages/consultation/consultation.component';
import { VkladkiComponent } from './components/pages/vkladki/vkladki.component';
import { InfoComponent } from './components/pages/info/info.component';
import { KartochkaComponent } from './components/pages/kartochka/kartochka.component';
import { authGuard, expireGuard } from './guard/auth.guard';
import { UserprofileComponent } from './components/pages/userprofile/userprofile.component';
import { KorzinaComponent } from './components/pages/korzina/korzina.component';
import { PreparadiComponent } from './components/pages/preparadi/preparadi.component';
import { ProductModel } from './interfaces/productmodel';
import { OPOneComponent } from './components/pages/o-p/o-p-one/o-p-one/o-p-one.component';
import { CategoryNavbarComponent } from './crud/categorycrud/category-navbar/category-navbar.component';
import { CategorycrudComponent } from './crud/categorycrud/categorycrud.component';
import { CreateCategoryComponent } from './crud/categorycrud/create-category/create-category.component';
import { CategoryUpdateComponent } from './crud/categorycrud/category-update/category-update.component';
import { DeleteCatgeoryComponent } from './crud/categorycrud/delete-catgeory/delete-catgeory.component';
import { GetByIdComponent } from './crud/categorycrud/get-by-id/get-by-id.component';
import { GetAllComponent } from './crud/categorycrud/get-all/get-all.component';
import { CrudComponent } from './crud/crud.component';
import { CouponNavbarComponent } from './crud/coupon-crud/coupon-navbar/coupon-navbar.component';
import { CouponCreateComponent } from './crud/coupon-crud/coupon-create/coupon-create.component';
import { CouponUpdateComponent } from './crud/coupon-crud/coupon-update/coupon-update.component';
import { GetAllCouponComponent } from './crud/coupon-crud/get-all/get-all.component';
import { GetByIdCouponComponent } from './crud/coupon-crud/get-by-id/get-by-id.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThanksComponent } from './components/pages/thanks/thanks.component';
import { AdressDostavkaComponent } from './components/pages/adress-dostavka/adress-dostavka.component';





export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'adress', component: AdressDostavkaComponent},
    {path: 'thanks', component: ThanksComponent},
    {path:'preporadi', component:PreparadiComponent},
    {path:'oplata', component:OplataComponent},
    {path:'obmeni', component:ObmeniComponent},
    {path:'skidki', component:SkidkiComponent, },
    {path:'dostavka', component:DostavkaComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegistrationComponent},
    {path:'kakoformit', component:KakoformitComponent},
    {path:'consultation', component:ConsultationComponent},
    {path:'vkladki', component:VkladkiComponent},
    {path:'info', component:InfoComponent},
    {path:'kartochka', component:KartochkaComponent},
    {path:'userprofile', component:UserprofileComponent},
    {path:'korzina', component:KorzinaComponent},
    {path:'products', component:OPOneComponent},
    {path:'category-navbar',component:CategoryNavbarComponent},
    {path:'app-category-navbar',component:CategoryNavbarComponent},
    {path:'app-create-category',component:CreateCategoryComponent},
    {path:'app-category-update',component:CategoryUpdateComponent},
    {path:'app-delete-catgeory',component:DeleteCatgeoryComponent},
    {path:'app-get-all',component:GetAllComponent},
    {path:'app-get-by-id',component:GetByIdComponent},
    {path:'app-coupon-navbar',component:CouponNavbarComponent},
    {path:'app-coupon-create',component:CouponCreateComponent},
    {path:'app-coupon-update',component:CouponUpdateComponent},
    {path:'coupon-get-all',component:GetAllCouponComponent},
    {path:'coupon-get-by-id',component:GetByIdCouponComponent},
    {path:'app-admin',component:AdminComponent},
    {path:'app-crud',component:CrudComponent},
    {path:'**', component:NotFound404Component},


];
