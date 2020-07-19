import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopovercomponentPage} from '../popovercomponent/popovercomponent.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private popover:PopoverController) { }

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
