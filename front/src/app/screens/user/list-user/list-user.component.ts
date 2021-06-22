import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { IUserType } from '../../../interfaces/user-type.interfaces';
import { IUser } from '../../../interfaces/user.interfaces';
import { UserTypeService } from '../../../service/user-type.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: IUser[];
  userTypes: IUserType[];

  displayedColumns = [
    'nickname',
    'name',
    'phone',
    'email',
    'user_type',
    'active',
    'action'
  ];

  dataSource: MatTableDataSource<IUser>;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly userTypeService: UserTypeService,
  ) {

  }

  ngOnInit(): void {
    this.userService.getAll()
      .then((data) => {
        this.users = data;
        this.dataSource = new MatTableDataSource(this.users);
      })
      .catch((err) => {
        console.error("Err load events", err);
      });
  }

  navigateToUserAdd(): void {
    this.router.navigate(['/user/add'])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
