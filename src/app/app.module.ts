import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule }   from '@angular/common/http';
import { AddCharPipe } from './pipes/add-char.pipe';
import { CharLimitPipe } from './pipes/char-limit.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarsDirective } from './directive/stars.directive';
import { OrderPageComponent } from './modules/forms-module/components/pages/order-page/order-page.component';
import { OrganaizerComponent } from './modules/forms-module/components/organaizer/organaizer.component';
import { CheckActiveDayDirective } from './modules/forms-module/directives/organaizer/check-active-day.directive';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { MainComponent } from './components/pages/main/main.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { FinishOrderPageComponent } from './modules/forms-module/components/pages/finish-order-page/finish-order-page.component';
import { NewProductPageComponent } from './modules/new-product/components/pages/new-product-page/new-product-page.component';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ParallaxComponent,
    ProductListComponent,
    FooterComponent,
    MainSliderComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    AddCharPipe,
    CharLimitPipe,
    ProductPageComponent,
    ProductInfoComponent,
    StarsDirective,
    OrderPageComponent,
    OrganaizerComponent,
    CheckActiveDayDirective,
    ContactFormComponent,
    FinishOrderPageComponent,
    NewProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-M23jh49wnJ7kOgftpq2rMi7g-y3shsE'
    }),
    FontAwesomeModule,
    ReactiveFormsModule,
    FileUploadModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideFunctions(() => getFunctions()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }