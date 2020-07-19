import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import {PopoverController} from '@ionic/angular';
import {PopovercomponentPage} from '../popovercomponent/popovercomponent.page';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private authService:AuthenticationService,
    private router: Router, private popover:PopoverController) { }

  ngOnInit() {
  }

  onSignOut(){
    this.authService.SignOut();
  }
  CreatePopover()
   {
    this.popover.create({component:PopovercomponentPage,
    showBackdrop:false}).then((popoverElement)=>{
    popoverElement.present();
    })
   }

}
