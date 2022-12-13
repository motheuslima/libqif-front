import { Component, OnInit } from '@angular/core';
import { MethodComponent, Parameter, ParameterType } from 'src/shared/method';

@Component({
  selector: 'app-refinement',
  templateUrl: './refinement.component.html',
  styleUrls: ['./refinement.component.scss']
})
export class RefinementComponent implements OnInit {

  refinementComponents = new Array<MethodComponent>();

  ngOnInit(): void {
    this.initializeComponents();
  }

  constructor() { }

  initializeComponents() {
    this.refinementComponents = [
      {
        title: "qif.refinement.add_metric(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "add_metric(pi: Row<double>, A: Mat<double>, B: Mat<double>) → Tuple[float, Mat<double>]",
            method: {
              name: "Refinement | Assert Proper",
              call: "add_metric(pi: Row<double>, A: Mat<double>, B: Mat<double>)",
              returnType: "Tuple[float, Mat<double>]",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("A", ParameterType.DOUBLE, false, true),
                new Parameter("B", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "refinement/add-metric"
            }
          },
          {
            description: "add_metric(pi: Row<rat>, A: Mat<rat>, B: Mat<rat>) → Tuple[float, Mat<rat>]",
            method: {
              name: "Refinement | Assert Proper",
              call: "add_metric(pi: Row<rat>, A: Mat<rat>, B: Mat<rat>)",
              returnType: "Tuple[float, Mat<rat>]",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("A", ParameterType.RATIONAL, false, true),
                new Parameter("B", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "refinement/add-metric"
            }
          },
        ]
      },
      {
        title: "qif.add_metric_bound(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "add_metric_bound(pi: Row<double>, A: Mat<double>, B: Mat<double>) → float",
            method: {
              name: "Refinement | Add Metric Bound",
              call: "add_metric_bound(pi: Row<double>, A: Mat<double>, B: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("A", ParameterType.DOUBLE, false, true),
                new Parameter("B", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "refinement/add-metric-bound"
            }
          },
          {
            description: "add_metric_bound(pi: Row<rat>, A: Mat<rat>, B: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Refinement | Add Metric Bound",
              call: "add_metric(pi: Row<rat>, A: Mat<rat>, B: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("A", ParameterType.RATIONAL, false, true),
                new Parameter("B", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "refinement/add-metric-bound"
            }
          },
        ]
      },
      {
        title: "qif.max_refined_by(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "max_refined_by(A: Mat<double>, B: Mat<double>) → bool",
            method: {
              name: "Refinement | Max Refined By",
              call: "max_refined_by(A: Mat<double>, B: Mat<double>)",
              returnType: "bool",
              parameters: [
                new Parameter("A", ParameterType.DOUBLE, false, true),
                new Parameter("B", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "refinement/max-refined-by"
            }
          },
          {
            description: "max_refined_by(A: Mat<rat>, B: Mat<rat>) → bool",
            method: {
              name: "Refinement | Max Refined By",
              call: "add_metric(A: Mat<rat>, B: Mat<rat>)",
              returnType: "bool",
              parameters: [
                new Parameter("A", ParameterType.RATIONAL, false, true),
                new Parameter("B", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "refinement/max-refined-by"
            }
          },
        ]
      },
      {
        title: "qif.priv_refined_by(*args, **kwargs)",
        description: "",
        items: [
          {
            description: "refined_by(A: Mat<double>, B: Mat<double>) → bool",
            method: {
              name: "Refinement | Priv Refined By",
              call: "refined_by(A: Mat<double>, B: Mat<double>)",
              returnType: "bool",
              parameters: [
                new Parameter("A", ParameterType.DOUBLE, false, true),
                new Parameter("B", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "refinement/priv-refined-by"
            }
          },
        ]
      },
      {
        title: "qif.refined_by(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "refined_by(A: Mat<double>, B: Mat<double>, method: str = 'factorize') → obj",
            method: {
              name: "Refinement | Refined By",
              call: "refined_by(A: Mat<double>, B: Mat<double>, method: str = 'factorize')",
              returnType: "obj",
              parameters: [
                new Parameter("A", ParameterType.DOUBLE, false, true),
                new Parameter("B", ParameterType.DOUBLE, false, true),
                new Parameter("method", ParameterType.STRING, false, false),
              ],
              isRatio: false,
              url: "refinement/refined-by"
            }
          },
          {
            description: "refined_by(A: Mat<rat>, B: Mat<rat>, method: str = 'factorize') → obj",
            method: {
              name: "Refinement | Refined By",
              call: "refined_by(A: Mat<rat>, B: Mat<rat>, method: str = 'factorize')",
              returnType: "obj",
              parameters: [
                new Parameter("A", ParameterType.RATIONAL, false, true),
                new Parameter("B", ParameterType.RATIONAL, false, true),
                new Parameter("method", ParameterType.STRING, false, false),
              ],
              isRatio: true,
              url: "refinement/refined-by"
            }
          },
        ]
      },
    ]
  }

}
