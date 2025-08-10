import { Component, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MealsService } from '../services/meals-service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './meals.html',
  styleUrl: './meals.css'
})
export class Meals {
  mealsSub = new Subscription();
  mealsList: IMeal[] = [];
  selectedCategory: string = 'pizza'; // Default

  constructor(private mealsService: MealsService, 
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getMeals('pizza'); // default load
  }

  getMeals(category: string): void {
    if (this.mealsSub) {
      this.mealsSub.unsubscribe();
    }
    this.selectedCategory = category;

    this.mealsSub = this.mealsService.getMealsByCategory(category).subscribe({
      next: (res) => {
        console.log(res);
        this.mealsList = res.recipes;
        console.log(this.mealsList);
        this.cdr.detectChanges();  // Trigger CD to update the view
      },
      error: (err) => console.error(err),
      complete: () => console.log(`${category} loaded`)
    });
  }

  ngOnDestroy(): void {
    this.mealsSub.unsubscribe();
  }
}