import { Component, OnInit } from '@angular/core';
import { MethodComponent, Parameter, ParameterType } from 'src/shared/method';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.scss']
})
export class MeasureComponent implements OnInit {

  constructor() { }

  bayesVulnComponents = new Array<MethodComponent>();
  bayesRiskComponents = new Array<MethodComponent>();
  predVulnComponents = new Array<MethodComponent>();
  predRiskComponents = new Array<MethodComponent>();
  gVulnComponents = new Array<MethodComponent>();
  lRiskComponents = new Array<MethodComponent>();
  shannonComponents = new Array<MethodComponent>();
  guessingComponents = new Array<MethodComponent>();
  dPrivacyComponents = new Array<MethodComponent>();

  ngOnInit(): void {
    this.initializeComponents();
  }

  initializeComponents() {
    this.bayesVulnComponents = this.initializeBayesVulnComponents();
    this.bayesRiskComponents = this.initializeBayesRiskComponents();
    this.predVulnComponents = this.initializePredVulnComponents();
    this.predRiskComponents = this.initializePredRiskComponents();
    this.gVulnComponents = this.initializeGVulnComponents();
    this.lRiskComponents = this.initializeLRiskComponents();
    this.shannonComponents = this.initializeShannonComponents();
    this.guessingComponents = this.initializeGuessingComponents();
    this.dPrivacyComponents = this.initializeDPrivacyComponents();
  }

  initializeBayesVulnComponents() {
    return [
      {
        title: "qif.measure.bayes_vuln.add_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "add_leakage(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "bayes vulnerability | Add leakage",
              call: "add_leakage(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/bayes-vuln/add-leakage"
            }
          },
          {
            description: "add_leakage(pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "bayes vulnerability | Add leakage",
              call: "add_leakage(pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/bayes-vuln/add-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.bayes_vuln.min_entropy_leakage(*args, **kwargs)",
        description: "",
        items: [
          {
            description: "min_entropy_leakage(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "bayes vulnerability | Min entropy leakage",
              call: "min_entropy_leakage(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/bayes-vuln/min-entropy-leakage"
            }
          }
        ]
      },
      {
        title: "qif.measure.bayes_vuln.mult_capacity(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "mult_capacity(C: Mat<double>) → float",
            method: {
              name: "bayes vulnerability | Mult capacity",
              call: "mult_capacity(C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/bayes-vuln/mult-capacity"
            }
          },
          {
            description: "mult_capacity(C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "bayes vulnerability | Mult capacity",
              call: "mult_capacity( C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/bayes-vuln/mult-capacity"
            }
          },
        ]
      },
      {
        title: "qif.measure.bayes_vuln.mult_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "mult_leakage(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "bayes vulnerability | Mult leakage",
              call: "mult_leakage(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/bayes-vuln/mult-leakage"
            }
          },
          {
            description: "mult_leakage(pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "bayes vulnerability | Mult leakage",
              call: "mult_leakage(pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/bayes-vuln/mult-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.bayes_vuln.posterior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "posterior(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "bayes vulnerability | Posterior",
              call: "posterior(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/bayes-vuln/posterior"
            }
          },
          {
            description: "posterior(pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "bayes vulnerability | Posterior",
              call: "posterior(pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/bayes-vuln/posterior"
            }
          },
        ]
      },
      {
        title: "qif.measure.bayes_vuln.prior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "prior(pi: Row<double>) → float",
            method: {
              name: "bayes vulnerability | Prior",
              call: "add_leakage(pi: Row<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "measure/bayes-vuln/prior"
            }
          },
          {
            description: "prior(pi: Row<rat>) → mppp::rational<1>",
            method: {
              name: "bayes vulnerability | Prior",
              call: "prior(pi: Row<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
              ],
              isRatio: true,
              url: "measure/bayes-vuln/prior"
            }
          },
        ]
      },
      {
        title: "qif.measure.bayes_vuln.strategy(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "strategy(pi: Row<double>, C: Mat<double>) → Mat<uint>",
            method: {
              name: "bayes vulnerability | Strategy",
              call: "strategy(pi: Row<double>, C: Mat<double>)",
              returnType: "Mat<uint>",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/bayes-vuln/strategy"
            }
          },
          {
            description: "strategy(pi: Row<rat>, C: Mat<rat>) → Mat<uint>",
            method: {
              name: "bayes vulnerability | Strategy",
              call: "add_leakage(pi: Row<rat>, C: Mat<rat>)",
              returnType: "Mat<uint>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/bayes-vuln/strategy"
            }
          },
        ]
      },
    ]
  }

  initializeBayesRiskComponents() { return new Array<MethodComponent>(); }
  initializePredVulnComponents() { return new Array<MethodComponent>(); }
  initializePredRiskComponents() { return new Array<MethodComponent>(); }
  initializeGVulnComponents() { return new Array<MethodComponent>(); }
  initializeLRiskComponents() { return new Array<MethodComponent>(); }
  initializeShannonComponents() { return new Array<MethodComponent>(); }

  initializeGuessingComponents() {
    return [
      {
        title: "qif.measure.guessing.add_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "add_leakage(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Guessing entropy | Add leakage",
              call: "add_leakage(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/guessing/add-leakage"
            }
          },
          {
            description: "add_leakage(pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Guessing entropy | Add leakage",
              call: "add_leakage(pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/guessing/add-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.guessing.mult_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "mult_leakage(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Guessing entropy | Mult leakage",
              call: "mult_leakage(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/guessing/mult-leakage"
            }
          },
          {
            description: "mult_leakage(pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Guessing entropy | Mult leakage",
              call: "mult_leakage(pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/guessing/mult-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.guessing.posterior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "posterior(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Guessing entropy | Posterior",
              call: "posterior(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/guessing/posterior"
            }
          },
          {
            description: "posterior(pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Guessing entropy | Posterior",
              call: "posterior(pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/guessing/posterior"
            }
          },
        ]
      },
      {
        title: "qif.measure.guessing.prior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "prior(pi: Row<double>) → float",
            method: {
              name: "Guessing entropy | Prior",
              call: "add_leakage(pi: Row<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "measure/guessing/prior"
            }
          },
          {
            description: "prior(pi: Row<rat>) → mppp::rational<1>",
            method: {
              name: "Guessing entropy | Prior",
              call: "prior(pi: Row<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
              ],
              isRatio: true,
              url: "measure/guessing/prior"
            }
          },
        ]
      }
    ]
  }

  initializeDPrivacyComponents() {
    return [
      {
        title: "qif.measure.d_privacy.is_private(*args, **kwargs)",
        description: "",
        items: [
          {
            description: "is_private(C: Mat<double>, d: Callable[[int, int], float]) → bool",
            method: {
              name: "D-Privacy | Is Private",
              call: "is_private(C: Mat<double>, d: Callable[[int, int], float])",
              returnType: "bool",
              parameters: [
                new Parameter("C", ParameterType.DOUBLE, false, true),
                new Parameter("d", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "measure/d-privacy/is-private"
            }
          }
        ]
      },
      {
        title: "qif.measure.d_privacy.prior(*args, **kwargs)",
        description: "",
        items: [
          {
            description: "prior(pi: Row<double>, d: Callable[[int, int], float]) → float",
            method: {
              name: "D-Privacy | Prior",
              call: "prior(pi: Row<double>, d: Callable[[int, int], float])",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("d", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "measure/d-privacy/prior"
            }
          }
        ]
      },
      {
        title: "qif.measure.d_privacy.smallest_epsilon(*args, **kwargs)",
        description: "",
        items: [
          {
            description: "smallest_epsilon(C: Mat<double>, d: Callable[[int, int], float]) → float",
            method: {
              name: "D-Privacy | Smallest Epsilon",
              call: "smallest_epsilon(C: Mat<double>, d: Callable[[int, int], float])",
              returnType: "float",
              parameters: [
                new Parameter("C", ParameterType.DOUBLE, false, true),
                new Parameter("d", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "measure/d-privacy/smallest-epsilon"
            }
          }
        ]
      },
    ]
  }

}
