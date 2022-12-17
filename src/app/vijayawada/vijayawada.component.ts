import { Component } from '@angular/core';

@Component({
  selector: 'app-vijayawada',
  templateUrl: './vijayawada.component.html',
  styleUrls: ['./vijayawada.component.css']
})
export class VijayawadaComponent {
  city_name='Vijayawada';
  Temples=[
    {
    temple_name:'Kanaka Durga Temple',
    temple_src:'https://cdn.s3waas.gov.in/s3c399862d3b9d6b76c8436e924a68c45b/uploads/2019/07/2019073034.jpg',
    distance_from_airport:'From Airport: 19-23Km',
    distance_from_railwaystation:'From RailwayStation: 2-3Km',
    distance_from_bustand:'From Bustand: 2.2Km',
  },
  {
    temple_name:'Sri Lakshmi Narasimha Swamy Temple',
    temple_src:'https://vijayawadatourism.com/images/places-to-visit/headers/mangalagiri-vijayawada-entry-fee-timings-holidays-reviews-header.jpg',
    distance_from_airport:'From Airport: 31Km',
    distance_from_railwaystation:'From RailwayStation: 13Km',
    distance_from_bustand:'From Bustand: 12.5Km',
  },
  {
    temple_name:'Sri Lakshmi Narasimha Swamy Temple',
    temple_src:'https://vijayawadatourism.com/images/places-to-visit/headers/mangalagiri-vijayawada-entry-fee-timings-holidays-reviews-header.jpg',
    distance_from_airport:'From Airport: 31Km',
    distance_from_railwaystation:'From RailwayStation: 13Km',
    distance_from_bustand:'From Bustand: 12.5Km',
  }

]

}
