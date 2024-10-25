import { Component } from '@angular/core';
import {MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    MatNavList,
    MatIcon
  ]
})
export class SidebarComponent {}
