import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HomeComponent } from './home/home.component';
import { ChannelComponent } from './channel/channel.component';
import { MeasureComponent } from './measure/measure.component';
import { TryMethodDialogComponent } from './shared/try-method-dialog/try-method-dialog.component';

import { HttpClientModule } from '@angular/common/http';
import { MethodService } from 'src/services/method.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './shared/item/item.component';
import { ProbabComponent } from './probab/probab.component';
import { MetricComponent } from './metric/metric.component';
import { MechanismComponent } from './mechanism/mechanism.component';
import { RefinementComponent } from './refinement/refinement.component';
import { UtilityComponent } from './utility/utility.component';
import { LpComponent } from './lp/lp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChannelComponent,
    MeasureComponent,
    TryMethodDialogComponent,
    ItemComponent,
    ProbabComponent,
    MetricComponent,
    MechanismComponent,
    RefinementComponent,
    UtilityComponent,
    LpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MethodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
