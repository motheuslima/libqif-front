import { Component, OnInit } from '@angular/core';
import { MethodComponent, Parameter, ParameterType } from 'src/shared/method';

@Component({
  selector: 'app-probab',
  templateUrl: './probab.component.html',
  styleUrls: ['./probab.component.scss']
})
export class ProbabComponent implements OnInit {

  constructor() { }

  probabComponents = new Array<MethodComponent>();

  ngOnInit(): void {
    this.initializeComponents();
  }

  initializeComponents() {
    this.probabComponents = [
      {
        title: "qif.probab.assert_proper(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "assert_proper(pi: Row<double>) → None",
            method: {
              name: "Probab | Assert Proper",
              call: "assert_proper(pi: Row<double>)",
              returnType: "None",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "probab/assert-proper"
            }
          },
          {
            description: "assert_proper(pi: Row<rat>) → None",
            method: {
              name: "Probab | Assert Proper",
              call: "assert_proper(pi: Row<rat>)",
              returnType: "None",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
              ],
              isRatio: true,
              url: "probab/assert-proper"
            }
          },
        ]
      },
      {
        title: "qif.probab.from_grid(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "from_grid(grid: Mat<double>) → Row<double>",
            method: {
              name: "Probab | From Grid",
              call: "from_grid(grid: Mat<double>)",
              returnType: "Row<double>",
              parameters: [
                new Parameter("grid", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "probab/from-grid"
            }
          },
          {
            description: "from_grid(grid: Mat<rat>) → Row<rat>",
            method: {
              name: "Probab | From Grid",
              call: "assert_proper(grid: Mat<rat>)",
              returnType: "Row<rat>",
              parameters: [
                new Parameter("grid", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "probab/from-grid"
            }
          },
        ]
      },
      {
        title: "qif.probab.is_proper(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "is_proper(pi: Row<double>, mrd: float = 2.220446049250313e-14) → bool",
            method: {
              name: "Probab | Is Proper",
              call: "is_proper(pi: Row<double>, mrd: float = 2.220446049250313e-14)",
              returnType: "bool",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("mrd", ParameterType.FLOAT, false, false),
              ],
              isRatio: false,
              url: "probab/is-proper"
            }
          },
          {
            description: "is_proper(pi: Row<rat>, mrd: mppp::rational<1> = Fraction(0, 1)) → bool",
            method: {
              name: "Probab | Is Proper",
              call: "is_proper(pi: Row<rat>, mrd: mppp::rational<1> = Fraction(0, 1))",
              returnType: "bool",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("mrd", ParameterType.RATIONAL, false, false),
              ],
              isRatio: true,
              url: "probab/is-proper"
            }
          },
        ]
      },
      {
        title: "qif.probab.is_uniform(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "is_uniform(pi: Row<double>, mrd: float = 2.220446049250313e-14) → bool",
            method: {
              name: "Probab | Is Uniform",
              call: "is_uniform(pi: Row<double>, mrd: float = 2.220446049250313e-14)",
              returnType: "bool",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("mrd", ParameterType.FLOAT, false, false),
              ],
              isRatio: false,
              url: "probab/is-uniform"
            }
          },
          {
            description: "is_uniform(pi: Row<rat>, mrd: mppp::rational<1> = Fraction(0, 1)) → bool",
            method: {
              name: "Probab | Is Uniform",
              call: "is_uniform(pi: Row<rat>, mrd: mppp::rational<1> = Fraction(0, 1))",
              returnType: "bool",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("mrd", ParameterType.RATIONAL, false, false),
              ],
              isRatio: true,
              url: "probab/is-uniform"
            }
          },
        ]
      },
      {
        title: "qif.probab.normalize(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "normalize(pi: Row<double>) → Row<double>",
            method: {
              name: "Probab | Normalize",
              call: "normalize(pi: Row<double>)",
              returnType: "Row<double>",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "probab/normalize"
            }
          },
          {
            description: "normalize(pi: Row<rat>) → Row<rat>",
            method: {
              name: "Probab | Normalize",
              call: "normalize(pi: Row<rat>)",
              returnType: "Row<double>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
              ],
              isRatio: true,
              url: "probab/normalize"
            }
          },
        ]
      },
      {
        title: "qif.probab.point(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "point(n_elem: int, x: int = 0, type: class[double] = 1) → Row<double>",
            method: {
              name: "Probab | Point",
              call: "point(n_elem: int, x: int = 0, type: class[double] = 1)",
              returnType: "Row<double>",
              parameters: [
                new Parameter("n_elem", ParameterType.INTEGER, false, false),
                new Parameter("x", ParameterType.INTEGER, false, false),
                new Parameter("type", ParameterType.INTEGER, false, false),
              ],
              isRatio: false,
              url: "probab/point"
            }
          },
          {
            description: "point(n_elem: int, x: int = 0, type: class[fraction] = 1) → Row<rat>",
            method: {
              name: "Probab | Point",
              call: "point(n_elem: int, x: int = 0, type: class[fraction] = 1)",
              returnType: "Row<double>",
              parameters: [
                new Parameter("n_elem", ParameterType.INTEGER, false, false),
                new Parameter("x", ParameterType.INTEGER, false, false),
                new Parameter("type", ParameterType.INTEGER, false, false),              
              ],
              isRatio: true,
              url: "probab/point"
            }
          },
        ]
      }, 
      {
        title: "qif.probab.randu(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "randu(n_elem: int, type: class[double] = 1) → Row<double>",
            method: {
              name: "Probab | Randu",
              call: "randu(n_elem: int, type: class[double] = 1)",
              returnType: "Row<double>",
              parameters: [
                new Parameter("n_elem", ParameterType.INTEGER, false, false),
                new Parameter("type", ParameterType.INTEGER, false, false),
              ],
              isRatio: false,
              url: "probab/randu"
            }
          },
          {
            description: "randu(n_elem: int, type: class[fraction] = 1) → Row<rat>",
            method: {
              name: "Probab | Randu",
              call: "randu(n_elem: int, type: class[fraction] = 1)",
              returnType: "Row<double>",
              parameters: [
                new Parameter("n_elem", ParameterType.INTEGER, false, false),
                  new Parameter("type", ParameterType.INTEGER, false, false),              
              ],
              isRatio: true,
              url: "probab/randu"
            }
          },
        ]
      }, 
      {
        title: "qif.probab.sample(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "sample(pi: Row<double>) → int",
            method: {
              name: "Probab | Sample",
              call: "sample(pi: Row<double>)",
              returnType: "int",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "probab/sample"
            }
          },
          {
            description: "sample(pi: Row<rat>) → int",
            method: {
              name: "Probab | Sample",
              call: "sample(pi: Row<rat>)",
              returnType: "int",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
              ],
              isRatio: true,
              url: "probab/sample"
            }
          },
            {
              description: "sample(pi: Row<double>, n_samples: int) → Row<uint>",
              method: {
                name: "Probab | Sample",
                call: "sample(pi: Row<double>, n_samples: int)",
                returnType: "Row<uint>",
                parameters: [
                  new Parameter("pi", ParameterType.DOUBLE, true, false),
                  new Parameter("n_samples", ParameterType.INTEGER, false, false)
                ],
                isRatio: false,
                url: "probab/sample-n"
              }
            },
            {
              description: "sample(pi: Row<rat>, n_samples: int) → Row<uint>",
              method: {
                name: "Probab | Sample",
                call: "sample(pi: Row<rat>, n_samples: int)",
                returnType: "Row<uint>",
                parameters: [
                  new Parameter("pi", ParameterType.RATIONAL, true, false),
                  new Parameter("n_samples", ParameterType.INTEGER, false, false)
                ],
                isRatio: true,
                url: "probab/sample-n"
              }
            },
        ]
      },
      {
        title: "qif.probab.to_grid(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "to_grid(pi: Row<double>, width: int) → Mat<double>",
            method: {
              name: "Probab | To Grid",
              call: "to_grid(pi: Row<double>, width: int)",
              returnType: "Mat<double>",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("width", ParameterType.INTEGER, false, false)
              ],
              isRatio: false,
              url: "probab/to-grid"
            }
          },
          {
            description: "to_grid(pi: Row<rat>, width: int) → Mat<rat>",
            method: {
              name: "Probab | To Grid",
              call: "to_grid(pi: Row<rat>, width: int)",
              returnType: "Mat<rat>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("width", ParameterType.INTEGER, false, false)
              ],
              isRatio: true,
              url: "probab/to-grid"
            }
          },
        ]
      },
      {
        title: "qif.probab.uniform(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "uniform(n_elem: int, type: class[double] = 1) → Row<double>",
            method: {
              name: "Probab | Uniform",
              call: "uniform(n_elem: int, type: class[double] = 1)",
              returnType: "Row<double>",
              parameters: [
                new Parameter("n_elem", ParameterType.INTEGER, false, false),
                new Parameter("type", ParameterType.INTEGER, false, false),
              ],
              isRatio: false,
              url: "probab/uniform"
            }
          },
          {
            description: "uniform(n_elem: int, type: class[fraction] = 1) → Row<rat>",
            method: {
              name: "Probab | Uniform",
              call: "uniform(n_elem: int, type: class[fraction] = 1)",
              returnType: "Row<double>",
              parameters: [
                new Parameter("n_elem", ParameterType.INTEGER, false, false),
                  new Parameter("type", ParameterType.INTEGER, false, false),              
              ],
              isRatio: true,
              url: "probab/uniform"
            }
          },
        ]
      }, 
    ]
  }

}
