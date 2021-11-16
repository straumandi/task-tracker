import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //template: '<p>text</p>' --> inline template definition
  styleUrls: ['./header.component.css']
})
//parent of button
export class HeaderComponent implements OnInit {
  title : string = 'Task Tracker';
  showAddTask?: boolean;
  subscription?: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    //set up subscription to onToggle() from UiService
    //call onToggle() and get value from Subject with help of .next method
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value;
    });
   }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: String) {
    return this.router.url === route;
  }

}
