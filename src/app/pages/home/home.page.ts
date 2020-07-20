import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopovercomponentPage} from '../popovercomponent/popovercomponent.page';
import { DataAccessService } from 'src/app/services/data-access.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user;
  data;
  constructor(private popover:PopoverController,
    private dataSvc:DataAccessService,
    private authSvc:AuthenticationService) { 

      this.authSvc.getUser().subscribe(user => {
        this.user = user; 
        this.dataSvc.getAllListings().subscribe(result=>{
          console.log(result)
          this.data = result;
        })
      
       });

    }

  ngOnInit() {
    
  }

  CreatePopover()
   {
    this.popover.create({component:PopovercomponentPage,
    showBackdrop:false}).then((popoverElement)=>{
    popoverElement.present();
    })
   }

}
