import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'intern-training-app01';

  ngOnInit() {
    setTimeout(() => {
      this.title = 'Title has been changed';
    }, 5000);
  }

  ngOnChanges() {

  }

  notifyFromChild(e: any) {
    console.log('Event from child : ', e);
  }
}
