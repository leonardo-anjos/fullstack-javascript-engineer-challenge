import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../interfaces/user.interfaces';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: IUser;

  constructor(
    private readonly userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.userService.getById(id)
      .then((data) => {
        this.user = data;
      })
      .catch((err) => {
        console.error("Err load events", err);
      });
  }

  updateProduct(): void {
    this.userService.update(this.user.id)
      .then((data) => {
        this.router.navigate(["/user/list"]);
        return data;
      })
      .catch((err) => {
        console.error("Err load events", err);
      });
  }

  cancel(): void {
    this.router.navigate(["/user/list"]);
  }

}
