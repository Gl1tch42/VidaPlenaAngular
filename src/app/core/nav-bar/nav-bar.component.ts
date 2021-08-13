import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() isHome: boolean;

  constructor() { }

  scroll() {
    let el: HTMLElement = document.querySelector('#section-2')
    el.scrollIntoView({behavior: 'smooth'});
  }

  ngOnInit() {
  }

}
