import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { PostDataService } from './post-data.service';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'posts', component: PostsComponent},
	{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	RouterModule.forRoot(appRoutes,{enableTracing: false})
  ],
  providers: [PostDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
