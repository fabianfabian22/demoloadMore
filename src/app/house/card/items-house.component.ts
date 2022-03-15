import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-house',
  templateUrl: './items-house.component.html',
  styleUrls: ['./items-house.component.scss']
})
export class ItemsHouseComponent implements OnInit {
  @Input() flat: any;
  atributes: any;

  constructor() { }

  ngOnInit(): void {
   this.atributes = this.flat['attributes'];
  }


}
