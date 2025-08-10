import { Component } from '@angular/core';
import { MealsService } from '../services/meals-service';

@Component({
  selector: 'app-corn',
  imports: [],
  templateUrl: './corn.html',
  styleUrl: './corn.css'
})
export class Corn {
  mealsList: any[] = [];

  constructor(private mealsService: MealsService) { }

  ngOnInit(): void {
    this.mealsService.getMealsByCategory('pizza').subscribe({
      next: (res) => (this.mealsList = res.meals),
      error: (err) => console.error(err)
    });
  }
}
