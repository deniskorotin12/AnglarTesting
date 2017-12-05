import { Component, Inject, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-test',
  templateUrl: 'modal-window.component.html',
  styleUrls: ['modal-window.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalWindowComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<ModalWindowComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public close() {
    this.matDialogRef.close();
  }
}

