import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { MyComponentModule } from "../navbar/components.module";
import { footerComponent } from '../footer/components.module';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, MyComponentModule,footerComponent]
})
export class HomePage {
  constructor() {}
}
