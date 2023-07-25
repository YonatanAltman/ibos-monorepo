import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserMenuComponent } from '@ibis-monorepo-template/ui/user-menu-ui';
import { ListItem } from '@ibis-monorepo-template/common/common-interface';

@Component({
  standalone: true,
  imports: [RouterModule, UserMenuComponent],
  selector: 'ibis-monorepo-template-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ibos';
  userMenuList: ListItem[] = [
    { label: 'Login', value: 'login' },
    { label: 'Settings', value: 'settings' },
    { label: 'Contact us', value: 'contactUs' },
    { label: 'Check for updates', value: 'checkForUpdates' },
  ];

  onClicked($event: ListItem<string>) {
    console.log('this is what you clicked', $event);
  }
}
