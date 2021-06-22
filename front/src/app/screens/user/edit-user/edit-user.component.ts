import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { IUserType } from '../../../interfaces/user-type.interfaces';
import { IUser } from '../../../interfaces/user.interfaces';
import { UserTypeService } from '../../../service/user-type.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId: string;

  formUser: FormGroup;
  submitted: boolean = false;

  userTypes: IUserType[];
  userTypeSelected: string;

  constructor(
    private readonly userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private readonly userTypeService: UserTypeService
  ) {
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

    this.getIdUser();
  }

  getIdUser() {
    this.userId = this.route.snapshot.paramMap.get("id");

    this.userService.getById(this.userId)
      .then((data) => {
        if (data !== {}) {
          this.f.nickname.setValue(data.nickname)
          this.f.name.setValue(data.name)
          this.f.phone.setValue(data.phone)
          this.f.email.setValue(data.email)
          this.f.user_type.setValue(data.user_type.id)
          this.f.active.setValue(data.active.toString())
        }
      })
      .catch((err) => {
        console.error("Err load events", err);
      });
  }

  cancel(): void {
    this.router.navigate(["/user/list"]);
  }

  onSubmit() {
    if (this.handleFormValidate(this.formUser.value)) {
      let isTrueSet = (this.formUser.value.active === 'true');
      this.formUser.value.active = isTrueSet;

      console.log(this.formUser.value)

      this.userService.update(this.userId, this.formUser.value)
        .then(data => {
          this.snackBar.open('sucess!' || data, 'Ok', { panelClass: 'errorSnackBarCustom', duration: 10000 });
          this.router.navigate(['/user/list'])
        }).catch(err => {
          console.log('err', err)
          this.snackBar.open('error!' || err, 'Ok', { panelClass: 'errorSnackBarCustom', duration: 10000 });
        });
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
