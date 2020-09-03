import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import {BreadcrumItem} from './breadcrum-item';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataService } from 'src/app/services/data/data.service';
import { Folder } from 'src/app/models/folder.model';

import { BreadcrumbsService } from 'angular-breadcrumbs-light';
import routes from './routes';
@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.scss']
})
export class BreadcrumComponent implements OnInit,DoCheck {

  constructor(public auth:AuthService,public data:DataService,public breadcrumbs:BreadcrumbsService) { }

//   @Input()
//   items:Array<BreadcrumItem> = new Array<BreadcrumItem>();
//   folder:Array<Folder> = new Array<Folder>();
//   @Output()
//   clickItem: EventEmitter<BreadcrumItem> = new EventEmitter<BreadcrumItem>();


//   ngOnInit(): void {
//   }

//   public onClickItem(item:BreadcrumItem){
//     let startIndex = this.items.findIndex((i)=>i.id == item.id);
//     if(startIndex != -1 && startIndex< this.items.length){
//        this.items.splice(startIndex+1,this.items.length-startIndex-1);
//        this.clickItem.emit(item);
//     }
// }
private location: string;
public crumbs: any;

/* ------------------------------------------------------------------- */
/*                             Constructor
/* ------------------------------------------------------------------- */

/* ------------------------------------------------------------------- */
/*                              Lifecycle
/* ------------------------------------------------------------------- */

public ngOnInit() {
  // Get first crumbs
  this.updateCrumbs();
  this.ngDoCheck();
}

public ngDoCheck() {
  if (this.location !== window.location.pathname)
    this.updateCrumbs();
}


private updateCrumbs() {
  // Get current location
  this.location = window.location.pathname;

  // Get crumbs for this location
  this.crumbs = this.breadcrumbs.getBreadcrumbs(routes, this.location);
}

}





