import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { Router } from '@angular/router';
import { IUser, UserDto } from '../../../interfaces/user.interfaces';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: UserDto;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  userAdd(): void {
    // this.userService.save(user)
    //   .then((data) => {
    //     this.router.navigate(['/user/list'])
    //     return data;
    //   })
    //   .catch((err) => {
    //     console.error("Err load events", err);
    //   });
  }

  cancel(): void {
    this.router.navigate(['/user/list'])
  }

}
