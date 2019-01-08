import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SysStatusService } from './core/services/sys-status.service';
import { BasicConfig } from './core/models/basic-config.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Pyrasite App';


}
