import { Component, OnInit } from '@angular/core';
import { raw_guide_data } from '../guide-data';

@Component({
  selector: 'app-guide-builder',
  templateUrl: './guide-builder.component.html',
  styleUrls: ['./guide-builder.component.css']
})
export class GuideBuilderComponent implements OnInit {

  guide_data?: string;

  constructor() { }

  ngOnInit(): void {
  }

  loadGuideData(): void {
    this.guide_data = raw_guide_data;
  }

}
