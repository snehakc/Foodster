import { Component, OnInit,ViewChild, NgModule} from '@angular/core';
import {ServiceService} from '../service/service.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Input } from '@angular/compiler/src/core';
import { FormControl } from '@angular/forms';
import {map, startWith,debounce, debounceTime, filter} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Restaurant,Restaurant2, RestrauntFound} from '../model/restraunts' ;
import { MatOptionSelectionChange } from '@angular/material';



@Component({
  selector: 'app-restrauntslist',
  templateUrl: './restrauntslist.component.html',
  styleUrls: ['./restrauntslist.component.scss'],
  providers:[ServiceService]
})
export class RestrauntslistComponent implements OnInit {
 
  restraunts:Restaurant[];
  city:string;
  cityId:number;
  cityName:string;
  totalPages:string;
  constructor(private httpClient:ServiceService,  private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.cityId = params.locationId;
      this.cityName = params.locationName
    });

    this.httpClient.getRestraunts(this.cityId).subscribe(data => {
      this.restraunts = data;
      this.city = data[0].restaurant.location.city;
    });

  }

public OnClick(eventName: MatOptionSelectionChange, restaurant:Restaurant){
    console.log(restaurant.restaurant.id);
    this.router.navigate(['/restrauntdetails'],{
      queryParams:{
        "restaurantId":restaurant.restaurant.id 
           }
    });
}

}
