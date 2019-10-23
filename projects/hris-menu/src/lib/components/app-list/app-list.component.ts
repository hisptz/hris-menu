import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hris-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {
  @Input() appList: any[];
  @Input() loading: boolean;
  constructor() {}

  ngOnInit() {}
}
