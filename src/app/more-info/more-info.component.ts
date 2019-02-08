import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GithubService } from '../Service/github.service';
import { FollowersInfoComponent } from '../followers-info/followers-info.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data, private matDialogRef: MatDialogRef<MoreInfoComponent>,
    private service: GithubService,
    private router: Router
  ) { }

  userInfo;
  userRepoInfo;
  followers;


  ngOnInit() {
    this.service.getUserDetails(this.data.login).subscribe(res => {
      this.userInfo = res;
    });


    this.service.getUserRepoDeatails(this.data.login).subscribe(res => {
      this.userRepoInfo = res;
    });

    this.service.getUserFollowers(this.data.login).subscribe(res => {
      this.followers = res;
    });
  }
  showFollowers() {
    console.log('navigate');
    this.matDialogRef.close();
    this.router.navigate([`user/${this.data.login}/followers`]);
  }
}
