import { Component } from '@angular/core';
import { MealsService } from '../services/meals-service';

@Component({
  selector: 'app-pizza',
  imports: [],
  templateUrl: './pizza.html',
  styleUrl: './pizza.css'
})
export class Pizza {
  mealsList: any[] = [];

  constructor(private mealsService: MealsService) { }

  ngOnInit(): void {
    this.mealsService.getMealsByCategory('pizza').subscribe({
      next: (res) => (this.mealsList = res.meals),
      error: (err) => console.error(err)
    });
  }
}
