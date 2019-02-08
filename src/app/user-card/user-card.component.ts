import { Component, OnInit, Input } from '@angular/core';
import { MatDialog} from '@angular/material';
import { MoreInfoComponent } from '../more-info/more-info.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() data;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  showInfo() {
    this.dialog.open(MoreInfoComponent, {
      data: this.data
    });
  }

}
