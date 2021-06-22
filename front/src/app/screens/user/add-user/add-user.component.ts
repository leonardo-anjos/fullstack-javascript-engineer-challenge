import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { IUser, UserDto } from '../../../interfaces/user.interfaces';
import { IUserType } from '../../../interfaces/user-type.interfaces';
import { UserTypeService } from '../../../service/user-type.service';
import { UserService } from '../../../service/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  formUser: FormGroup;
  submitted: boolean = false;

  userTypes: IUserType[];
  userTypeSelected: string;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private readonly userTypeService: UserTypeService
  ) {
    this.userTypeSelected = '';

    this.userTypeService.getAll()
      .then((data) => {
        this.userTypes = data;
      })
      .catch((err) => {
        console.error("Err load events", err);
      });
  }

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      nickname: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
      user_type: ['', Validators.required],
      active: ['', Validators.required],
    });
  }

  cancel(): void {
    this.router.navigate(['/user/list'])
  }

  onSubmit() {
    if (this.handleFormValidate(this.formUser.value)) {
      console.log(this.formUser.value)
      // this.userService.save(this.formUser.value)
      //   .then(data => {
      //     this.snackBar.open('sucess!' || data, 'Ok', { panelClass: 'errorSnackBarCustom', duration: 10000 });
      //     this.router.navigate(['/user/list'])
      //   }).catch(err => {
      //     console.log('err', err)
      //     this.snackBar.open('error!' || err, 'Ok', { panelClass: 'errorSnackBarCustom', duration: 10000 });
      //   });
    }

  }

  public handleFormValidate(formData): boolean {
    this.submitted = true;

    if (!formData.nickname) {
      return false;
    }

    if (!formData.name) {
      return false;
    }

    if (!formData.phone) {
      return false;
    }

    if (!formData.email) {
      return false;
    }

    if (!formData.user_type) {
      return false;
    }

    if (!formData.active) {
      return false;
    }

    return true;
  }

  get f() { return this.formUser.controls; }

}
