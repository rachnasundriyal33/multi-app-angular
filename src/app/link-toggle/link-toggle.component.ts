import { CommonModule, NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { PlatformEventService } from '../platformevent.service';

@Component({
  selector: 'app-link-toggle',
  standalone: true,
  imports: [CommonModule,NgClass,MatIcon],
  templateUrl: './link-toggle.component.html',
  styleUrl: './link-toggle.component.css'
})
export class LinkToggleComponent{

  links: any;
  @ViewChild("linkList") list:ElementRef<HTMLInputElement>;

  constructor(private events: PlatformEventService,
    private router: Router
  ){
  }

  ngOnInit() {
    this.load();
  }

  load(){
    this.links=[
      'a','b'
    ];
  }

  open(l:string){
    console.log("show "+l);
    this.events.emitRE(l);
  }

}
