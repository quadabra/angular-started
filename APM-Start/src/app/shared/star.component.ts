import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component ({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent  implements OnChanges {
  starWidth: number;
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  onClick(): void {
    this.ratingClicked.emit(`The Rating ${this.rating} was clicked`);
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * (86 / 5);
  }
}
