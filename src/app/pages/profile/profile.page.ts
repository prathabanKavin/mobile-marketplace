import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import {PopoverController} from '@ionic/angular';
import {PopovercomponentPage} from '../popovercomponent/popovercomponent.page';
import { DataAccessService } from 'src/app/services/data-access.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user;
  data;

  constructor(private authSvc:AuthenticationService,
    private dataSvc: DataAccessService,
    private router: Router, 
    private popover:PopoverController) {

      this.authSvc.getUser().subscribe(user => {
        this.user = user; 
        this.dataSvc.getProfileData(this.user.uid).subscribe(result=>{
          console.log(result)
          this.data = result;
        })
      
       });
     }

  ngOnInit() {
  }

  onSignOut(){
    this.authSvc.SignOut();
  }

  CreatePopover()
   {
    this.popover.create({component:PopovercomponentPage,
    showBackdrop:false}).then((popoverElement)=>{
    popoverElement.present();
    })
   }

  editProfilePage(){
    this.router.navigate(['profile-edit']);
  }

}
