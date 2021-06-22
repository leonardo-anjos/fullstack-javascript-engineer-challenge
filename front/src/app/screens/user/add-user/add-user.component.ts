import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { IUser, UserDto } from '../../../interfaces/user.interfaces';
import { IUserType } from '../../../interfaces/user-type.interfaces';
import { UserTypeService } from '../../../service/user-type.service';
import { UserService } from '../../../service/user.service';
interface SelectForm {
  label: string,
  value: boolean
}
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  formPaciente: FormGroup;
  submitted: boolean = false;

  userTypes: IUserType[];
  userTypeSelected: string;

  status: SelectForm[];
  statusSelected: boolean;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
    private readonly userTypeService: UserTypeService
  ) {
    this.userTypeSelected = '';
    this.statusSelected = true;

    this.userTypeService.getAll()
      .then((data) => {
        this.userTypes = data;
      })
      .catch((err) => {
        console.error("Err load events", err);
      });

    this.status = [
      { label: 'true', value: true },
      { label: 'false', value: false },
    ];
  }

  ngOnInit(): void {
    this.formPaciente = this.formBuilder.group({
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
    if (this.formularioValido(this.formPaciente.value)) {
      this.userService.save(this.formPaciente.value)
        .then(data => {
          this.snackBar.open('sucess!' || data, 'Ok', { panelClass: 'errorSnackBarCustom', duration: 10000 });
          this.router.navigate(['/user/list'])
        }).catch(err => {
          console.log('err', err)
          this.snackBar.open('error!' || err, 'Ok', { panelClass: 'errorSnackBarCustom', duration: 10000 });
        });
    }

  }

  public formularioValido(dadosForm): boolean {
    this.submitted = true;

    if (!dadosForm.nickname) {
      return false;
    }

    if (!dadosForm.name) {
      return false;
    }

    if (!dadosForm.phone) {
      return false;
    }

    if (!dadosForm.email) {
      return false;
    }

    if (!dadosForm.user_type) {
      return false;
    }

    if (!dadosForm.active) {
      return false;
    }

    return true;
  }

  get f() { return this.formPaciente.controls; }

}
