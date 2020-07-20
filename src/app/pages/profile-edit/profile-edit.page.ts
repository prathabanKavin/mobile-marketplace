import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import {PopoverController} from '@ionic/angular';
import {PopovercomponentPage} from '../popovercomponent/popovercomponent.page';
import { DataAccessService } from 'src/app/services/data-access.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {

  user;
  data;
  editprofile_form: FormGroup;


  constructor(private authSvc:AuthenticationService,
    private dataSvc: DataAccessService,
    private formBuilder:FormBuilder,
    private router: Router, 
    private popover:PopoverController,
    private util: UtilService) { 

      this.editprofile_form = this.formBuilder.group({
      
        firstname: new FormControl('', Validators.compose([
          Validators.required,
        ])),
        lastname: new FormControl('', Validators.compose([
          Validators.required
        ])),
        phone: new FormControl('', Validators.compose([
          Validators.required
        ])),
      });

      this.authSvc.getUser().subscribe(user => {
        this.user = user;
        console.log(user) 
      
       });

    }

  ngOnInit() {

  }

  onClickSave(){
    let profile ={
      firstname:this.editprofile_form.value.firstname,
      lastname:this.editprofile_form.value.lastname,
      phone:this.editprofile_form.value.phone
    }

    this.dataSvc.updatefirstName(this.user.uid, profile.firstname);
    this.dataSvc.updateLastName(this.user.uid, profile.lastname);
    this.dataSvc.updatePhone(this.user.uid, profile.phone);

    console.log(this.user)
    this.router.navigate(['tabs/profile']);

    }
}
