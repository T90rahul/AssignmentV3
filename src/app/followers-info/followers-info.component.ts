import { Component, OnInit } from '@angular/core';
import { GithubService } from '../Service/github.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-followers-info',
  templateUrl: './followers-info.component.html',
  styleUrls: ['./followers-info.component.css']
})
export class FollowersInfoComponent implements OnInit {

  constructor(private service: GithubService, private activatedRoute: ActivatedRoute) { }
  followers;
  displayedColumns: string[] = ['login', 'type', 'avatar_url'];
  dataSource;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.service.getUserFollowers(params.login).subscribe(res => {
        this.followers = res;
      });
    });
  }

}
