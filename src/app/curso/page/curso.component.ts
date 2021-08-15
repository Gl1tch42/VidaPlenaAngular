import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/auth/user.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
  }

}
