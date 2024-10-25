import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatCell, MatColumnDef, MatHeaderCell, MatHeaderRow, MatRow, MatTable} from "@angular/material/table";

interface Activity {
  date: string;
  activity: string;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatToolbar,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatRow
  ],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Define data for recent activity table
  activityData: Activity[] = [
    { date: '2023-10-01', activity: 'User login', status: 'Success' },
    { date: '2023-10-01', activity: 'Payment processed', status: 'Completed' },
    { date: '2023-10-02', activity: 'User signup', status: 'Pending' },
    { date: '2023-10-03', activity: 'Account update', status: 'Success' },
  ];
  displayedColumns: string[] = ['date', 'activity', 'status'];
}
