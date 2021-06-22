import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserTypeService } from '../../../service/user-type.service';
import { IUserType } from '../../../interfaces/user-type.interfaces';

@Component({
  selector: 'app-list-user-type',
  templateUrl: './list-user-type.component.html',
  styleUrls: ['./list-user-type.component.scss']
})
export class ListUserTypeComponent implements OnInit {

  displayedColumns = ['id', 'description', 'active'];

  usersType: IUserType[];
  dataSource: MatTableDataSource<IUserType>;

  constructor(
    private readonly userTypeService: UserTypeService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.userTypeService.getAll()
      .then((data) => {
        this.usersType = data;
        this.dataSource = new MatTableDataSource(this.usersType);
      })
      .catch((err) => {
        console.error("Err load events", err);
      });
  }

  navigateToUserTypeAdd(): void {
    this.router.navigate(['/user-type/add'])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
