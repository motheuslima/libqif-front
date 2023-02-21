import { Component, OnInit } from '@angular/core';
import { MethodComponent, Parameter, ParameterType } from 'src/shared/method';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.scss']
})
export class UtilityComponent implements OnInit {

  constructor() { }

  utilityComponents = new Array<MethodComponent>();

  ngOnInit(): void {
    this.initializeComponents();
  }

  initializeComponents() {
    this.utilityComponents = [
      {
        title: "qif.utility.expected_distance(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "expected_distance(D: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Utility | Parallel",
              call: "expected_distance(D: Mat<double>, pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("D", ParameterType.DOUBLE, false, true),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "utility/expected-distance"
            }
          },
          {
            description: "expected_distance(D: Mat<rat>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Utility | Parallel",
              call: "expected_distance(D: Mat<rat>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("D", ParameterType.RATIONAL, false, true),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "utility/expected-distance"
            }
          },
        ]
      },
    ];
  }

}
