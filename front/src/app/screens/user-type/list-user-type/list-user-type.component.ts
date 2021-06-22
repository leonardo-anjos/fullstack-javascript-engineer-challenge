import { Component, OnInit } from '@angular/core';
import { IUserType } from '../../../interfaces/user-type.interfaces';
import { UserTypeService } from '../../../service/user-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user-type',
  templateUrl: './list-user-type.component.html',
  styleUrls: ['./list-user-type.component.scss']
})
export class ListUserTypeComponent implements OnInit {

  usersType: IUserType[];

  displayedColumns = [
    'description',
    'active',
    'action'
  ];

  constructor(
    private readonly userTypeService: UserTypeService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.userTypeService.getAll()
      .then((data) => {
        this.usersType = data;
      })
      .catch((err) => {
        console.error("Err load events", err);
      });
  }

  navigateToUserTypeAdd(): void {
    this.router.navigate(['/user-type/add'])
  }

}
