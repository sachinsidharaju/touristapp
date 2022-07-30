import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-create-tourist',
  templateUrl: './create-tourist.component.html',
  styleUrls: ['./create-tourist.component.css']
})
export class CreateTouristComponent implements OnInit {
  tourist:Tourist=new Tourist();
  alert:boolean=false;
  alert1:boolean=false;
  
  

  constructor(private touristService:TouristService) { }

  ngOnInit(): void {
  }

  saveTourist(userForm:NgForm)
  {
      this.touristService.createTourist(this.tourist).subscribe(data=>{
        console.log(data);
        this.alert=true;
        userForm.reset();
        

      },error=>{
        console.log(error)
        this.alert1=true;
       
        });
      
      
  }
onSubmit(userForm:NgForm)
{
   
  this.saveTourist(userForm);
 
 

}
closeAlert()
{
  this.alert=false;
}
closeAlert1()
{
  this.alert1=false;
}

}
