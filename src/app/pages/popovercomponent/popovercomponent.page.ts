import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {AuthenticationService} from 'src/app/services/authentication.service';
@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {

  constructor(private popover:PopoverController, private authService:AuthenticationService) { }
  ngOnInit() {
  }
  ClosePopover(){
    this.popover.dismiss();
  }

  onSignOut(){
    this.authService.SignOut();
  }


}
