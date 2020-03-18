import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-the-mode',
  templateUrl: './show-the-mode.component.html',
  styleUrls: ['./show-the-mode.component.scss'],
})
export class ShowTheModeComponent implements OnInit {
  @Input() mode: string;

  constructor() { }

  ngOnInit() {}

}
