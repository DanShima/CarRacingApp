import { Component } from '@angular/core';
import { Race } from './race';
import { RaceService } from './race.service';
import { RACES } from './mocks';

@Component({
    selector: 'my-races',
    templateUrl: './races.component.html',
    styleUrls: [ './races.component.css']
})
export class RacesComponent {
  heading = 'Ultra Racing Schedule';
  races: Race[];
  cash = 10000;

  constructor(private racingDataService: RaceService) { }

// invoked after the component is constructed and is the best place to initialize property values
  ngOnInit() {
      this.racingDataService.getRaces()
        .subscribe(data => this.races = data);
  }

  totalCost() {
    if (Array.isArray(this.races)) {
        return this.races
            .filter(race => race.isRacing)
            .reduce((prev, next) => prev + next.entryFee, 0);
    }
  }

  castDate(date) {
    return new Date(date);
}

  cashLeft() {
    return this.cash - this.totalCost();
  }

  cancelRace(race) {
      race.isRacing = false;
  }

  enterRace(race) {
      if (race.entryFee > this.cashLeft()) {
        alert('You don\'t have enough cash');
        return;
      }
      race.isRacing = true;
  }
}
