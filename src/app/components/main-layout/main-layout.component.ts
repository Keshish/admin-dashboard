import { AfterViewInit, Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {NavbarComponent} from "../navbar/navbar.component";
import {MatIconButton} from "@angular/material/button";
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    NavbarComponent,
    MatIconButton,
    SidebarComponent,
  ],
})
export class MainLayoutComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
      // Trigger change detection after updating sidenav mode
      this.cdRef.detectChanges();
    });
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
