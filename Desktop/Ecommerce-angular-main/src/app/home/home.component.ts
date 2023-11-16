import { Component, OnInit } from '@angular/core';
import { gounsPage1 } from 'src/data/Gouns/gouns';
import { menJeans } from 'src/data/Men/men_Jeans';
import { lehngacholiPage2 } from 'src/data/Saree/lenghaCholiPage2';
import { mensKurta } from 'src/data/Men/men_kurta';
import { mensShoesPage1 } from 'src/data/shoes';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  menJeans: any;
  womenGouns: any;
  lenghaCholi: any;
  mensKurta: any;
  mensShoes: any;

  ngOnInit() {
    this.menJeans = menJeans.slice(0, 5);
    this.womenGouns = gounsPage1.slice(0, 5);
    this.lenghaCholi = lehngacholiPage2.slice(0, 5);
    this.mensKurta = mensKurta.slice(0,5);
    this.mensShoes=mensShoesPage1.slice(0,5);
  }
}
