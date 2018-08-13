import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Subscription } from '../../../../node_modules/rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit, OnDestroy {
  public id: number;
  subscriptions=new Subscription();
  public backgroundColor: string;
  constructor(public settingService: SettingsService) {
    this.id = settingService.getSidebarImageIndex() + 1;
    this.backgroundColor = settingService.getSidebarColor();
  }

  ngOnInit() {
    this.subscriptions.add=this.settingService.sidebarImageIndexUpdate.subscribe((id: number) => {
      this.id = id + 1;
    });
    this.subscriptions.add=this.settingService.sidebarColorUpdate.subscribe((color: string) => {
      this.backgroundColor = color;
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    // this.settingService.sidebarImageIndexUpdate.unsubscribe();
    // this.settingService.sidebarColorUpdate.unsubscribe();
  }
}
