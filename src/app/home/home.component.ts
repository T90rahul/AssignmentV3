import { Component, OnInit } from '@angular/core';
import { GithubService } from '../Service/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: GithubService) { }
  data;

  fetchUser() {
    this.service.fetchUser().subscribe(res => {
      this.data = res;
    });
  }

  ngOnInit() {
    this.fetchUser();
  }

}
