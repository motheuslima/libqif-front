import { Component, OnInit } from '@angular/core';
import { MethodComponent, Parameter, ParameterType } from 'src/shared/method';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit {

  constructor() { }

  metricComponents = new Array<MethodComponent>();

  ngOnInit(): void {
    this.initializeComponents();
  }

  initializeComponents() {
    this.metricComponents = [
      {
        title: "qif.metric.optimize.l1_diameter(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "l1_diameter(C: Mat<double>, method: str = 'direct') → Tuple[float, int, int]",
            method: {
              name: "Probab | L1 Diameter",
              call: "l1_diameter(C: Mat<double>, method: str = 'direct')",
              returnType: "Tuple[float, int, int]",
              parameters: [
                new Parameter("C", ParameterType.DOUBLE, false, true),
                new Parameter("method", ParameterType.STRING, false, false),
              ],
              isRatio: false,
              url: "metric/l1-diameter"
            }
          },
          {
            description: "l1_diameter(C: Mat<rat>, method: str = 'direct') → Tuple[mppp::rational<1>, int, int]",
            method: {
              name: "Probab | L1 Diameter",
              call: "l1_diameter(C: Mat<rat>, method: str = 'direct')",
              returnType: "Tuple[mppp::rational<1>, int, int]",
              parameters: [
                new Parameter("C", ParameterType.RATIONAL, false, true),
                new Parameter("method", ParameterType.STRING, false, false),
              ],
              isRatio: true,
              url: "metric/l1-diameter"
            }
          },
        ]
      },
      {
        title: "qif.metric.optimize.l2_min_enclosing_ball(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "l2_min_enclosing_ball(C: Mat<double>) → Tuple[float, Row<double>]",
            method: {
              name: "Probab | L2 Min Enclosing Ball",
              call: "l2_min_enclosing_ball(C: Mat<double>)",
              returnType: "Tuple[float, Row<double>]",
              parameters: [
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "metric/l2-min-enclosing-ball"
            }
          }
        ]
      },
      {
        title: "qif.metric.optimize.simplex_l1_min_enclosing_ball(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "simplex_l1_min_enclosing_ball(C: Mat<double>, method: str = 'lp', in_conv_hull: bool = False) → Tuple[float, Row<double>]",
            method: {
              name: "Probab | Simplex L1 Min Enclosing Ball",
              call: "simplex_l1_min_enclosing_ball(C: Mat<double>, method: str = 'lp', in_conv_hull: bool = False)",
              returnType: "Tuple[float, Row<double>]",
              parameters: [
                new Parameter("C", ParameterType.DOUBLE, false, true),
                new Parameter("method", ParameterType.STRING, false, false),
                new Parameter("in_conv_hull", ParameterType.BOOLEAN, false, false)
              ],
              isRatio: false,
              url: "metric/simplex-l1"
            }
          },
          {
            description: "simplex_l1_min_enclosing_ball(C: Mat<rat>, method: str = 'lp', in_conv_hull: bool = False) → Tuple[mppp::rational<1>, Row<rat>]",
            method: {
              name: "Probab | Simplex L1 Min Enclosing Ball",
              call: "simplex_l1_min_enclosing_ball(C: Mat<rat>, method: str = 'lp', in_conv_hull: bool = False)",
              returnType: "Tuple[mppp::rational<1>, Row<rat>]",
              parameters: [
                new Parameter("C", ParameterType.RATIONAL, false, true),
                new Parameter("method", ParameterType.STRING, false, false),
                new Parameter("in_conv_hull", ParameterType.BOOLEAN, false, false)
              ],
              isRatio: true,
              url: "metric/simplex-l1"
            }
          },
        ]
      },
      {
        title: "qif.metric.optimize.simplex_project(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "simplex_project(pi: Row<double>) → Row<double>",
            method: {
              name: "Probab | Simplex Project",
              call: "simplex_project(pi: Row<double>)",
              returnType: "Row<double>",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "metric/simplex-project"
            }
          },
          {
            description: "simplex_project(pi: Row<rat>) → Row<rat>",
            method: {
              name: "Probab | Simplex Project",
              call: "simplex_project(pi: Row<rat>)",
              returnType: "Row<rat>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
              ],
              isRatio: true,
              url: "metric/simplex-project"
            }
          },
        ]
      },
    ]
  }
}
