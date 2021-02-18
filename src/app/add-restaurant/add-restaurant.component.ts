import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  alert:boolean=false;
  addRestaurant=new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')

  })
  constructor(private resto:CommonService) { }

  ngOnInit(): void {
  }
  createResto(){
   this.resto.addResto(this.addRestaurant.value).subscribe((result)=>{
     this.alert=true;
     this.addRestaurant.reset({});
   console.log("Get data from service",result)

   })

  }
  closeAlert(){
    this.alert=false;
  }

}
