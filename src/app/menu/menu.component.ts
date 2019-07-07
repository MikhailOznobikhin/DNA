import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor() { }
  public list: string[] = [];
  public activeItem: string;

  public onSelectItem(item: string): void {
    this.activeItem = item;
  }
 

}
