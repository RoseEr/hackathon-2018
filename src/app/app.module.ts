import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { HandComponent } from './hand/hand.component';
import { RavenComponent } from './raven/raven.component';
import { PsychicCompleteVisionComponent } from './psychic-complete-vision/psychic-complete-vision.component';
import { GhostContainerComponent } from './ghost-container/ghost-container.component';
import { PsychicContainerComponent } from './psychic-container/psychic-container.component';
import { PsychicSelectComponent } from './psychic-select/psychic-select.component';
import { CurrentCategoryComponent } from './current-category/current-category.component';
import { CardCollectionComponent } from './card-collection/card-collection.component';

const appRoutes: Routes = [
  { path: '**', redirectTo: '/playerSelect'},
  { path: 'psychic', component: PsychicContainerComponent },
  { path: 'ghost', component: GhostContainerComponent },
  { path: 'playerSelect', component: PsychicSelectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    HandComponent,
    RavenComponent,
    PsychicCompleteVisionComponent,
    GhostContainerComponent,
    PsychicContainerComponent,
    PsychicSelectComponent,
    CurrentCategoryComponent,
    CardCollectionComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }