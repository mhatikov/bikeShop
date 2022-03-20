import { Component, HostListener, Input, OnInit } from '@angular/core';
import { LinkMainMenu } from 'src/app/models/link';
import { MainMenuService } from 'src/app/services/main-menu.service';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(private mainMenuService:MainMenuService) { 

  }

  links:LinkMainMenu[];

  ngOnInit(): void {
    this.links = this.mainMenuService.links;
  }

  @Input() changeBackgroundColor:boolean = true;

}
