import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'page-not-found',
  standalone: true,
  imports: [
    MatCardModule,
    TranslateModule
  ],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['../app.component.scss'],
})
export class PageNotFoundComponent { }
