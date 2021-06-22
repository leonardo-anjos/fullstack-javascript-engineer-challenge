import { Component, OnInit } from '@angular/core';
import { UserTypeDto } from '../../../interfaces/user-type.interfaces';
import { UserTypeService } from '../../../service/user-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-type',
  templateUrl: './add-user-type.component.html',
  styleUrls: ['./add-user-type.component.scss']
})
export class AddUserTypeComponent implements OnInit {

  userType: UserTypeDto;

  constructor(
    private userTypeService: UserTypeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  userTypeAdd(): void {
    // this.userTypeService.save(user)
    //   .then((data) => {
    //     this.router.navigate(['/user-type/list'])
    //     return data;
    //   })
    //   .catch((err) => {
    //     console.error("Err load events", err);
    //   });
  }

  cancel(): void {
    this.router.navigate(['/user-type/list'])
  }

}
