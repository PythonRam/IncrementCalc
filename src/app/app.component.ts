import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  increments = [];
  addIncrement() {
    this.increments.push({
      final: null,
      leaves: []
    });
  }
  yearsData(data, index) {
    this.increments[index]['final'] = data.final;
    this.increments[index]['leaves'] = data.leaves;
  }
}
