import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LinkToggleComponent } from './app/link-toggle/link-toggle.component';

const appref= bootstrapApplication(LinkToggleComponent, appConfig);
appref.then(ref=> bootstrapApplication(AppComponent,appConfig));
