import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/Router";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./header/header.component";
import { GameFormComponent } from "./game-form/game-form.component";
import { GameTableComponent } from "./game-table/game-table.component";
import { AppViewComponent } from "./app-view/app-view.component";
import { AppSearchComponent } from "./app-search/app-search.component";
import { SearchFormComponent } from './search-form/search-form.component';

const routes: Routes = [
  { path: "", redirectTo: "view", pathMatch: "full" },
  { path: "view", component: AppViewComponent, pathMatch: "full" },
  { path: "search", component: AppSearchComponent, pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameFormComponent,
    GameTableComponent,
    AppViewComponent,
    AppSearchComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
