import { Component } from '@angular/core';
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    MatNavList,
    MatIcon,
    MatListItem,
    RouterLink,
    RouterLinkActive
  ]
})
export class SidebarComponent {}
