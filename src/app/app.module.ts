import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { CertificationComponent } from './certification/certification.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ScrollVisibilityDirective } from './scroll-visibility.directive';
import { VantaelementComponent } from './vantaelement/vantaelement.component';



const routes: Routes = [
  {path:'', component:AppComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomecomponentComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
    CertificationComponent,
    ScrollVisibilityDirective,
    VantaelementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    PdfViewerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
