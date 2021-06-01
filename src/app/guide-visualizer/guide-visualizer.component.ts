import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guide-visualizer',
  templateUrl: './guide-visualizer.component.html',
  styleUrls: ['./guide-visualizer.component.css']
})
export class GuideVisualizerComponent implements OnInit {

  @Input() guide_data?: string;

  constructor() { }

  ngOnInit(): void {
    this.guide_data = ""
  }

}
