import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RestrauntslistComponent } from './restrauntslist/restrauntslist.component';
import { RestrauntdetailsComponent } from './restrauntdetails/restrauntdetails.component';
import { ServiceService } from './service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { provideRoutes } from '@angular/router';
import { Observable } from 'rxjs';
import { MatAutocompleteModule, MatToolbarModule, MatInputModule, MatButtonModule, MatCardModule, MatMenuModule, MatGridListModule, MatIconModule } from '@angular/material';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'search/:city', component: RestrauntslistComponent },
  { path: 'restrauntslist', component: RestrauntslistComponent },
  { path: 'restrauntdetails', component: RestrauntdetailsComponent },
  { path: '**', redirectTo: '/search', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    RestrauntslistComponent,
    RestrauntdetailsComponent,
    SearchComponent,
    FooterComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
