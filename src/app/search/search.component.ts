import { Component,  NgModule, OnInit, ViewChild } from '@angular/core';
import {ServiceService} from '../service/service.service';
import { Router } from "@angular/router";
import { Input } from '@angular/compiler/src/core';
import { FormControl } from '@angular/forms';
import {map, startWith,debounce, debounceTime, filter} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { LocationSuggestion } from '../model/cities';
import { MatOptionSelectionChange } from '@angular/material';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers:[ServiceService]
})

export class SearchComponent implements OnInit {
  title = "Foodster"
  searchControl = new FormControl()
  locations:LocationSuggestion[] 

  constructor(private httpClient:ServiceService, private router:Router) {  }
 
  ngOnInit() {
    this.searchControl.valueChanges
    .pipe(
      debounceTime(100),
      filter((value)=> value.length>2) //search results after the user has typed 3 or more characters
    )
    .subscribe(data => {
      this.onSearchChange(data)
    })
  }

  private onSearchChange(searchValue: string) {
      this.httpClient.citySearch(searchValue).subscribe(data => {
         this.locations = data;
        });
  }

public onSelectionChanged(eventName: MatOptionSelectionChange, location:LocationSuggestion){
  if(eventName.source.selected){
    console.log(location.id);
    this.router.navigate(['/restrauntslist'],{
      queryParams:{
        "locationId":location.id,
        "locationName":location.name
      }
    });
  }
  
}

}

