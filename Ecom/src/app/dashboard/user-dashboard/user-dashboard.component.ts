import { Component, OnInit } from '@angular/core';
import { DashBoardService } from '../dash-board.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  items:any=[]

  constructor( private dashboardService:DashBoardService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(){
    this.dashboardService.getProductList().subscribe((result:any)=>{
      this.items=result
      
    })
  }

}
