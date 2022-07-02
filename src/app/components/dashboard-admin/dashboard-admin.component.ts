import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  admins: any;
  chefs: any;
  clients: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersByRole("admin").subscribe(
      (data) => {
        console.log(data.users);

        this.admins = data.users;
      }
    )
    this.userService.getUsersByRole("chef").subscribe(
      (data) => {
        console.log(data.users);

        this.chefs = data.users;
      }
    )
    this.userService.getUsersByRole("client").subscribe(
      (data) => {
        console.log(data.users);

        this.clients = data.users;
      }
    )
  }
}
