import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{AuthService} from '../../services/auth/auth.service'
import { MatDialog } from '@angular/material/dialog';
import { CreateFolderDialogComponent } from '../dialog/create-folder-dialog/create-folder-dialog.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public route:Router,public auth:AuthService) { }

  ngOnInit(): void {
  }


  inputBackgroundFlip={
    'background':'white'
  }

  changeInputColor(color:string){
    this.inputBackgroundFlip = {
      'background':color
    }
  }

  


  // check(){
  //   console.log(this.auth.user);
  // }
}
