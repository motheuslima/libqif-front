import { Component, OnInit, Inject, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MethodService } from 'src/services/method.service';
import { Method, Parameter, ParameterType } from 'src/shared/method';
import { Subject, takeUntil } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-try-method-dialog',
  templateUrl: './try-method-dialog.component.html',
  styleUrls: ['./try-method-dialog.component.scss']
})
export class TryMethodDialogComponent implements OnInit, OnDestroy {

  parameters = new Map<any, any>();

  hasResult = false;

  destroy$: Subject<boolean> = new Subject<boolean>();

  controls = new Array<FormControl>();

  resultFormControl = new FormControl();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Method,
    private service: MethodService) {}

  ngOnInit(): void {
    this.initializeParameters();
  }

  initializeParameters() {
    this.data.parameters.forEach(param => {
      this.controls.push(new FormControl())
    });
  }

  prepareValue(value: string, param: Parameter): any {
    switch(param.type) {
      case ParameterType.RATIONAL:
        let ret = "";
        if (param.isMatrix) {
          ret = "[";
          let str = value.slice(1, value.length-1);
          let rows = str.match(/(\[(?:\[??[^\[]*?\]))/g) || [];
          rows.forEach(row => {
            let rats = row.match(/([0-9]\/*[0-9]*)+/g) || [];
            let rv = "";
            rats.forEach(rat => {
              let rvv = "";
              rat.split("/").forEach(r => {
                rvv += r + ","
              })
              rv += "[" + rvv + "],"
            });
            ret += "[" + rv + "],"
          });
          ret += "]"
        } else if (param.isArray) {
          let rats = value.match(/([0-9]\/*[0-9]*)+/g) || [];
          let rv = "";
          rats.forEach(rat => {
            let rvv = "";
            rat.split("/").forEach(r => {
              rvv += r + ","
            })
            rv += "[" + rvv + "],"
          });
          ret += "[" + rv + "]"
        }
        return JSON.parse(ret.replaceAll(',]', ']'));
      case ParameterType.STRING:
        return value;
      default:
        return JSON.parse(value);
    }
  }

  getPlaceholder(param: Parameter): string {
    switch(param.type) {
      case ParameterType.DOUBLE:
        if (param.isArray) return "[0.5, 0.3, 1]";
        else if (param.isMatrix) return "[[0.1, 0.5, 1], [0.2, 0.3, 0.5], [0.4, 0.4, 0.1]]";
        else return "0.5";
      case ParameterType.RATIONAL:
        if (param.isArray) return "[1/2, 4/2, 3/2]";
        else if (param.isMatrix) return "[[2/2, 1/2, 3/2], [1, 1/3, 1/4], [1/2, 1/5, 3/2]]";
        else return "1/2";
      case ParameterType.BOOLEAN:
        return "True";
      case ParameterType.STRING:
        return "factorize";
      default:
        return "";
    }
  }

  runMethod() {
    let obj = {
      'isRatio': this.data.isRatio
    }

    this.data.parameters.forEach(
      (param, i) => {
        obj = {...obj, ...{
          [param.name]: this.prepareValue(this.controls[i].value, param)
        }}
      }
    )

    console.log(obj);

    this.service.callMethod(this.data.url, obj)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (res) => {
        this.hasResult = true;
        this.resultFormControl.setValue(res.result);
        this.resultFormControl.updateValueAndValidity();
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
