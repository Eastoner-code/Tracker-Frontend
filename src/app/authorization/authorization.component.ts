import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  public imageLoaded = false;

  private setDelay() {
    setTimeout(() => {
      this.imageLoaded = true;
      document.getElementById('dynamical_bg').setAttribute('style', 'opacity: 1 !important;');
    }, 3000);
  }

  public ngOnInit() {
    this.setDelay();
  }
}
