import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserTypeService } from '../../../service/user-type.service';
@Component({
  selector: 'app-add-user-type',
  templateUrl: './add-user-type.component.html',
  styleUrls: ['./add-user-type.component.scss']
})
export class AddUserTypeComponent implements OnInit {
  formUserType: FormGroup;
  submitted: boolean = false;

  constructor(
    private userTypeService: UserTypeService,
    private router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.formUserType = this.formBuilder.group({
      description: ['', Validators.required],
      active: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.handleFormValidate(this.formUserType.value)) {
      this.userTypeService.save(this.formUserType.value)
        .then(data => {
          this.snackBar.open('sucess!' || data, 'Ok', { panelClass: 'errorSnackBarCustom', duration: 10000 });
          this.router.navigate(['/user-type/list'])
        }).catch(err => {
          console.log('err', err)
          this.snackBar.open('error!' || err, 'Ok', { panelClass: 'errorSnackBarCustom', duration: 10000 });
        });
    }
  }

  public handleFormValidate(formData): boolean {
    this.submitted = true;

    if (!formData.description) {
      return false;
    }

    if (!formData.active) {
      return false;
    }

    return true;
  }

  get f() { return this.formUserType.controls; }


  cancel(): void {
    this.router.navigate(['/user-type/list'])
  }

}
