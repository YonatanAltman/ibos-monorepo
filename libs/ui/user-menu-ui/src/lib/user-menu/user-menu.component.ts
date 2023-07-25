import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ListItem } from '@ibis-monorepo-template/common/common-interface';

@Component({
  selector: 'ibis-user-menu',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule],
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent<T> {
  @Input({ required: true }) items!: ListItem[];
  @Output() clicked = new EventEmitter<ListItem>();
}
