import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-restrauntdetails',
  templateUrl: './restrauntdetails.component.html',
  styleUrls: ['./restrauntdetails.component.scss']
})
export class RestrauntdetailsComponent implements OnInit {
 
  resId:string;
  resDetails:string;
  constructor(private httpClient:ServiceService, private route: ActivatedRoute ) { }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
      this.resId = params.restaurantId;
    });

    this.httpClient.getRestraunts(this.resId).subscribe(data => {
      this.resDetails=data.toString();
    });
  }

}
