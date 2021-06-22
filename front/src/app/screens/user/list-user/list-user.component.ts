import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../interfaces/user.interfaces';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: IUser[];

  displayedColumns = [
    'nickname',
    'name',
    'phone',
    'email',
    'user_type',
    'active',
    'action'
  ];

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getAll()
      .then((data) => {
        this.users = data;
      })
      .catch((err) => {
        console.error("Err load events", err);
      });
  }

  navigateToUserAdd(): void {
    this.router.navigate(['/user/add'])
  }
}
