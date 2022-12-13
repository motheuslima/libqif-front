import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Method, MethodComponent } from 'src/shared/method';
import { TryMethodDialogComponent } from '../try-method-dialog/try-method-dialog.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() components = new Array<MethodComponent>();
  @Input() title = "";
  @Input() description = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openTryMethod(method: Method) {
    console.log(method);
    if (method != null) {
      this.dialog.open(TryMethodDialogComponent, {
        data: method,
      })
    }
  }

}
