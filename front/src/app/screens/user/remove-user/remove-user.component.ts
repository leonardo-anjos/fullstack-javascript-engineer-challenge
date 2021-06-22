import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../interfaces/user.interfaces';
import { UserService } from '../../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss']
})
export class RemoveUserComponent implements OnInit {
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

  deleteProduct(): void {
    this.userService.delete(this.user.id)
      .then((data) => {
        this.router.navigate(["/user"]);
        return data;
      })
      .catch((err) => {
        console.error("Err load events", err);
      });
  }

  cancel(): void {
    this.router.navigate(["/user"]);
  }

}
