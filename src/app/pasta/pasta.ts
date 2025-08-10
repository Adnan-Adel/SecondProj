import { Component } from '@angular/core';
import { MealsService } from '../services/meals-service';

@Component({
  selector: 'app-pasta',
  imports: [],
  templateUrl: './pasta.html',
  styleUrl: './pasta.css'
})
export class Pasta {
  mealsList: any[] = [];
  
    constructor(private mealsService: MealsService) { }
  
    ngOnInit(): void {
      this.mealsService.getMealsByCategory('pasta').subscribe({
        next: (res) => (this.mealsList = res.meals),
        error: (err) => console.error(err)
      });
    }
}
