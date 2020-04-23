import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;
  response = null;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    // this.backendService.getYelpData().subscribe((data) => {
    //   this.data = data, null, 2;
    // });
  }

  request(model) {
    this.backendService.postUserForm(model).subscribe((res) => {
      this.response = res;
      console.log(this.response);
    });
  }
}
