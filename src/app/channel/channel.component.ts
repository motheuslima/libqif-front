import { Component, OnInit } from '@angular/core';
import { MethodComponent, Parameter, ParameterType } from 'src/shared/method';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  constructor() { }

  channelComponents = new Array<MethodComponent>();

  ngOnInit(): void {
    this.initializeComponents();
  }

  initializeComponents() {
    this.channelComponents = [
      {
        title: "qif.channel.assert_proper(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "assert_proper(C: Mat<double>) → None",
            method: {
              name: "Channel | Assert Proper",
              call: "assert_proper(C: Mat<double>)",
              returnType: "None",
              parameters: [
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "channel/assert-proper"
            }
          },
          {
            description: "assert_proper(C: Mat<rat>) → None",
            method: {
              name: "Channel | Assert Proper",
              call: "assert_proper(C: Mat<rat>)",
              returnType: "None",
              parameters: [
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "channel/assert-proper"
            }
          },
        ]
      },
      {
        title: "qif.channel.deterministic(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "deterministic(map: Callable[[int], int], n_rows: int, n_cols: int, type: class[double] = 1) → Mat<double>",
            method: {
              name: "Channel | Deterministic",
              call: "deterministic(map: Callable[[int], int], n_rows: int, n_cols: int, type: class[double] = 1)",
              returnType: "Mat<double>",
              parameters: [
                new Parameter("n_rows", ParameterType.INTEGER, false, false),
                new Parameter("n_cols", ParameterType.INTEGER, false, false),
              ],
              isRatio: false,
              url: "channel/deterministic"
            }
          },
          {
            description: "deterministic(map: Callable[[int], int], n_rows: int, n_cols: int, type: class[fraction] = 1) → Mat<rat>",
            method: {
              name: "Channel | Deterministic",
              call: "deterministic(map: Callable[[int], int], n_rows: int, n_cols: int, type: class[fraction] = 1)",
              returnType: "Mat<rat>",
              parameters: [
                new Parameter("n_rows", ParameterType.INTEGER, false, false),
                new Parameter("n_cols", ParameterType.INTEGER, false, false),
              ],
              isRatio: true,
              url: "channel/deterministic"
            }
          }
        ]
      },
      {
        title: "qif.channel.factorize(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "factorize(A: Mat<double>, B: Mat<double>, col_stoch: bool = False) → Mat<double>",
            method: {
              name: "Channel | Factorize",
              call: "factorize(A: Mat<double>, B: Mat<double>, col_stoch: bool = False)",
              returnType: "Mat<double>",
              parameters: [
                new Parameter("A", ParameterType.DOUBLE, false, true),
                new Parameter("B", ParameterType.DOUBLE, false, true),
                new Parameter("col_stotch", ParameterType.BOOLEAN, false, false),
              ],
              isRatio: false,
              url: "channel/factorize"
            }
          },
          {
            description: "factorize(A: Mat<rat>, B: Mat<rat>, col_stoch: bool = False) → Mat<rat>",
            method: {
              name: "Channel | Factorize",
              call: "factorize(A: Mat<rat>, B: Mat<rat>, col_stoch: bool = False)",
              returnType: "Mat<rat>",
              parameters: [
                new Parameter("A", ParameterType.RATIONAL, false, true),
                new Parameter("B", ParameterType.RATIONAL, false, true),
                new Parameter("col_stotch", ParameterType.BOOLEAN, false, false),
              ],
              isRatio: true,
              url: "channel/factorize"
            }
          }
        ]
      },
      {
        title: "qif.channel.hyper(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "hyper(C: Mat<double>, pi: Row<double>) → Tuple[Row<double>, Mat<double>]",
            method: {
              name: "Channel | Hyper",
              call: "hyper(C: Mat<double>, pi: Row<double>)",
              returnType: "Tuple[Row<double>, Mat<double>]",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "channel/hyper"
            }
          },
          {
            description: "hyper(C: Mat<rat>, pi: Row<rat>) → Tuple[Row<rat>, Mat<rat>]",
            method: {
              name: "Channel | Hyper",
              call: "hyper(C: Mat<rat>, pi: Row<rat>)",
              returnType: "Tuple[Row<rat>, Mat<rat>]",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "channel/hyper"
            }
          },
        ]
      },
      {
        title: "qif.channel.identity(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "identity(n_rows: int, type: class[double] = 1) → Mat<double>",
            method: {
              name: "Channel | Identity",
              call: "identity(n_rows: int, type: class[double] = 1)",
              returnType: "Mat<double>",
              parameters: [
                new Parameter("n_rows", ParameterType.INTEGER, false, false),
              ],
              isRatio: false,
              url: "channel/identity"
            }
          },
          {
            description: "identity(n_rows: int, type: class[fraction] = 1) → Mat<rat>",
            method: {
              name: "Channel | Identity",
              call: "identity(n_rows: int, type: class[fraction] = 1)",
              returnType: "Mat<rat>",
              parameters: [
                new Parameter("n_rows", ParameterType.INTEGER, false, false),
              ],
              isRatio: true,
              url: "channel/identity"
            }
          },
        ]
      },
      {
        title: "qif.channel.is_proper",
        description: "Overloaded function",
        items: [
          {
            description: "is_proper(C: Mat<double>, mrd: float = 2.220446049250313e-14) → bool",
            method: {
              name: "Channel | Is Proper",
              call: "is_proper(C: Mat<double>, mrd: float = 2.220446049250313e-14)",
              returnType: "bool",
              parameters: [
                new Parameter("C", ParameterType.DOUBLE, false, true),
                new Parameter("mrd", ParameterType.FLOAT, false, false),
              ],
              isRatio: false,
              url: "channel/is-proper"
            }
          },
          {
            description: "is_proper(C: Mat<rat>, mrd: mppp::rational<1> = Fraction(0, 1)) → bool",
            method: {
              name: "Channel | Is Proper",
              call: "is_proper(C: Mat<rat>, mrd: mppp::rational<1> = Fraction(0, 1))",
              returnType: "bool",
              parameters: [
                new Parameter("C", ParameterType.RATIONAL, false, true),
                new Parameter("mrd", ParameterType.RATIONAL, false, false),
              ],
              isRatio: true,
              url: "channel/is-proper"
            }
          },
        ]
      },
      {
        title: "qif.channel.iterative_bayesian_update(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "iterative_bayesian_update(C: Mat<double>, out: Row<double>, start: Row<double> = array([], dtype=float64), max_diff: float = 1e-06, max_iter: int = 0) → Tuple[Row<double>, int]",
            method: {
              name: "Channel | Iterative Bayesian Update",
              call: "iterative_bayesian_update(C: Mat<double>, out: Row<double>, start: Row<double> = array([], dtype=float64), max_diff: float = 1e-06, max_iter: int = 0)",
              returnType: "Tuple[Row<double>, int]",
              parameters: [
                new Parameter("C", ParameterType.DOUBLE, false, true),
                new Parameter("out", ParameterType.DOUBLE, true, false),
                new Parameter("start", ParameterType.DOUBLE, true, false),
                new Parameter("max_diff", ParameterType.FLOAT, false, false),
                new Parameter("max_iter", ParameterType.INTEGER, false, false),
              ],
              isRatio: false,
              url: "channel/iterative-bayesian-update"
            }
          },
          {
            description: "iterative_bayesian_update(C: Mat<rat>, out: Row<rat>, start: Row<rat>, max_diff: mppp::rational<1> = 1e-06, max_iter: int = 0) → Tuple[Row<rat>, int]",
            method: {
              name: "Channel | Iterative Bayesian Update",
              call: "iterative_bayesian_update(C: Mat<rat>, out: Row<rat>, start: Row<rat>, max_diff: mppp::rational<1> = 1e-06, max_iter: int = 0)",
              returnType: "Tuple[Row<rat>, int]",
              parameters: [
                new Parameter("C", ParameterType.RATIONAL, false, true),
                new Parameter("out", ParameterType.RATIONAL, true, false),
                new Parameter("start", ParameterType.RATIONAL, true, false),
                new Parameter("max_diff", ParameterType.RATIONAL, false, false),
                new Parameter("max_iter", ParameterType.INTEGER, false, false),
              ],
              isRatio: true,
              url: "channel/iterative-bayesian-update"
            }
          },
        ]
      },
    ]
  }

}
