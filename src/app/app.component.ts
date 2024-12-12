// src/app/app.component.ts
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'admin-dashboard';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // Set default language
    this.translate.use('en'); // Use default language
  }

  switchLanguage(language: string) {
    this.translate.use(language); // Change language dynamically
  }
}
