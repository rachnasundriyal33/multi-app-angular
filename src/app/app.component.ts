import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatDrawerMode, MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { BooleanInput } from '@angular/cdk/coercion';
import {BreakpointObserver} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlatformEventService } from './platformevent.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, MatListModule,CommonModule,MatProgressSpinnerModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multi-app-angular';
  mdcBackdrop: BooleanInput = false;
  drawerMode: MatDrawerMode = "push";
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  constructor(private events:PlatformEventService,private router:Router){
    events.routeEvent.subscribe(r=>{
      this.router.navigate([r]);
    })
  }
  
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
