import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  scrool: HTMLElement;

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
