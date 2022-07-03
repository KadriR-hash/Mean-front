import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  @Input() childChef: any;
  @Output() newChefs = new EventEmitter<any>();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  
  deleteChef(id) {
    this.userService.deleteUser(id).subscribe(
      (data) => {
        console.log(data.message);
        this.userService.getUsersByRole('role').subscribe(
          (data) => {
            //declenchement  of event
            this.newChefs.emit(data.users)
          }
        )
      }
    )
  }
}
