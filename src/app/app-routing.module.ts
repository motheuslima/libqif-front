import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channel/channel.component';
import { HomeComponent } from './home/home.component';
import { MeasureComponent } from './measure/measure.component';
import { ProbabComponent } from './probab/probab.component';
import { MetricComponent } from './metric/metric.component';
import { RefinementComponent } from './refinement/refinement.component';
import { UtilityComponent } from './utility/utility.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'channel', component: ChannelComponent },
  { path: 'measure', component: MeasureComponent },
  { path: 'probab', component: ProbabComponent },
  { path: 'metric', component: MetricComponent },
  { path: 'refinement', component: RefinementComponent },
  { path: 'utility', component: UtilityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
