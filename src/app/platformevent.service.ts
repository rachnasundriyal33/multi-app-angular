import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,map, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'platform'
})
export class PlatformEventService {
  
  public routeEvent: EventEmitter<String> = new EventEmitter<String>();

  constructor() { 
      console.log("new platform event service created");
    }

  emitRE(re:String){
    this.routeEvent.emit(re);
  }


}