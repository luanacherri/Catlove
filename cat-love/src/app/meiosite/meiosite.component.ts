import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meiosite',
  templateUrl: './meiosite.component.html',
  styleUrls: ['./meiosite.component.css']
})
export class MeiositeComponent implements OnInit {

  cards: string[] = [
    "Card 1",
    "Card 2" ];

    mostrarCard: boolean = true;
    cardUnico: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
