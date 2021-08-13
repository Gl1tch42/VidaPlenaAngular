import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() isHome: boolean;
  scrool: HTMLElement;

  constructor() { }

  onClick() {
    console.log(this.scrool);
    this.scrool.scrollTo({
      behavior: 'smooth'
    })
    // this.scrool.scrollTo({ 
    //   behavior: 'smooth'
    // });
  }

  ngOnInit() {
    this.scrool = document.querySelector('#section-2');
  }

}
