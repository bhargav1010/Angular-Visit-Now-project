import { Component } from '@angular/core';

@Component({
  selector: 'app-tirupati',
  templateUrl: './tirupati.component.html',
  styleUrls: ['./tirupati.component.css']
})
export class TirupatiComponent {
  city_name='Tirupati';
  Temples=[
    {
      temple_name:'Tirumala',
      temple_src:'https://tirupati-balaji.com/wp-content/uploads/2019/07/Blog-5-Featured-Image-780x405.jpg',
      distance_from_airport:'From Airport: 40Km',
      distance_from_railwaystation:'From RailwayStation: 21Km',
      distance_from_bustand:'From Bustand: 23Km',
    },
    {
      temple_name:'Tiruchanoor Sri Padmavathi Devi Temple',
      temple_src:'https://www.saiprashnavali.com/wp-content/uploads/2020/04/Tiruchanoor-Sri-Padmavathi-Devi-Temple-Timings.jpg',
      distance_from_airport:'From Airport: 15-17Km',
      distance_from_railwaystation:'From RailwayStation: 5-7Km',
      distance_from_bustand:'From Bustand: 5Km',
    },
    {
      temple_name:'Srinivasa Mangapuram',
      temple_src:'https://tirupatitirumalainfo.com/wp-content/uploads/2017/06/kalyana-venkateswara-swamy.jpg',
      distance_from_airport:'From Airport: 28-30Km',
      distance_from_railwaystation:'From RailwayStation: 11-13Km',
      distance_from_bustand:'From Bustand: 14-15Km',
    },
    { 
      temple_name:'Kapila Theertham',
      temple_src:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/af/53/34/pool-inside-kapila-theertham.jpg?w=1200&h=-1&s=1',
      distance_from_airport:'From Airport: 18-22Km',
      distance_from_railwaystation:'From RailwayStation: 3.4Km',
      distance_from_bustand:'From Bustand: 3.5Km',
    },
    {
      temple_name:'Srikalahasteeswara Temple',
      temple_src:'https://lh3.googleusercontent.com/places/ABKp1IoyZDGiMW2oHCCyLXjLsIv1uLud9n7NPgDzDL0fnmgkO4TCreEv-QZd7y0rFBw8kJkHMXGuwfLhAgCfeTDzAPdhsMdef-yqfKg=s500-w500',
      distance_from_airport:'From Airport: 31-35Km',
      distance_from_railwaystation:'From RailwayStation: 45Km',
      distance_from_bustand:'From Bustand: 44Km',
    },
    {
      temple_name:'Kanipakam',
      temple_src:'https://www.holidify.com/images/cmsuploads/compressed/Kanipakam1_20200508124710_20200508124815.jpg',
      distance_from_airport:'From Airport: 78Km',
      distance_from_railwaystation:'From RailwayStation: 63Km',
      distance_from_bustand:'From Bustand: 64Km',
    },
    {
      temple_name:'Govindaraja Swami Temple',
      temple_src:'https://pbs.twimg.com/media/E-zhCfBVQAU8Kql.jpg',
      distance_from_airport:'From Airport: 18-21Km',
      distance_from_railwaystation:'From RailwayStation: 300m',
      distance_from_bustand:'From Bustand: 1.3Km',
    },
    {
      temple_name:'Iskon Temple',
      temple_src:'https://iskcontirupati.info/wp-content/uploads/2021/02/5.jpg',
      distance_from_airport:'From Airport: 19-21Km',
      distance_from_railwaystation:'From RailwayStation: 3-4.4Km',
      distance_from_bustand:'From Bustand: 3-4Km',
    },
    {
      temple_name:'Vakula Matha Temple',
      temple_src:'https://assets.thehansindia.com/h-upload/2022/06/09/1296956-tpt.jpg',
      distance_from_airport:'From Airport: 23-25Km',
      distance_from_railwaystation:'From RailwayStation: 9Km',
      distance_from_bustand:'From Bustand: 10Km',
    },
    {
      temple_name:'Prasanna Venkateswara Temple, Appalayagunta',
      temple_src:'http://www.touritvirtually.com/wp-content/uploads/2020/02/_MG_0170.JPG',
      distance_from_airport:'From Airport: 22-28Km',
      distance_from_railwaystation:'From RailwayStation: 16-26Km',
      distance_from_bustand:'From Bustand: 16-25Km',
    },
    
  ]
  
}
