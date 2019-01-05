import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// COMPONENTS
import { AppComponent } from './app.component';
import { RealtimeChartComponent } from './charts/realtime-chart/realtime-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    RealtimeChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
