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

  initializeBayesRiskComponents() { 
    return [
      {
        title: "qif.measure.bayes_risk.add_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "add_leakage(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Bayes Risk | Add leakage",
              call: "add_leakage(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/bayes-risk/add-leakage"
            }
          },
          {
            description: "add_leakage(pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Bayes Risk | Add leakage",
              call: "add_leakage(pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/bayes-risk/add-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.bayes_risk.mult_capacity(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "mult_capacity(C: Mat<double>, method: str = 'direct') → float",
            method: {
              name: "Bayes Risk | Mult capacity",
              call: "mult_capacity(C: Mat<double>, method: str = 'direct')",
              returnType: "float",
              parameters: [
                new Parameter("C", ParameterType.DOUBLE, false, true),
                new Parameter("method", ParameterType.STRING, false, false),
              ],
              isRatio: false,
              url: "measure/bayes-risk/mult-capacity"
            }
          },
          {
            description: "mult_capacity(C: Mat<rat>, method: str = 'direct') → mppp::rational<1>",
            method: {
              name: "Bayes Risk | Mult capacity",
              call: "mult_capacity( C: Mat<rat>, method: str = 'direct')",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("C", ParameterType.RATIONAL, false, true),
                new Parameter("method", ParameterType.STRING, false, false),
              ],
              isRatio: true,
              url: "measure/bayes-risk/mult-capacity"
            }
          },
        ]
      },
      {
        title: "qif.measure.bayes_risk.mult_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "mult_leakage(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Bayes Risk | Mult leakage",
              call: "mult_leakage(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/bayes-risk/mult-leakage"
            }
          },
          {
            description: "mult_leakage(pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Bayes Risk | Mult leakage",
              call: "mult_leakage(pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/bayes-risk/mult-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.bayes_risk.posterior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "posterior(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Bayes Risk | Posterior",
              call: "posterior(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/bayes-risk/posterior"
            }
          },
          {
            description: "posterior(pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Bayes Risk | Posterior",
              call: "posterior(pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/bayes-risk/posterior"
            }
          },
        ]
      },
      {
        title: "qif.measure.bayes_risk.prior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "prior(pi: Row<double>) → float",
            method: {
              name: "Bayes Risk | Prior",
              call: "add_leakage(pi: Row<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "measure/bayes-risk/prior"
            }
          },
          {
            description: "prior(pi: Row<rat>) → mppp::rational<1>",
            method: {
              name: "Bayes Risk | Prior",
              call: "prior(pi: Row<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
              ],
              isRatio: true,
              url: "measure/bayes-risk/prior"
            }
          },
        ]
      },
      {
        title: "qif.measure.bayes_risk.strategy(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "strategy(pi: Row<double>, C: Mat<double>) → Mat<uint>",
            method: {
              name: "Bayes Risk | Strategy",
              call: "strategy(pi: Row<double>, C: Mat<double>)",
              returnType: "Mat<uint>",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/bayes-risk/strategy"
            }
          },
          {
            description: "strategy(pi: Row<rat>, C: Mat<rat>) → Mat<uint>",
            method: {
              name: "Bayes Risk | Strategy",
              call: "add_leakage(pi: Row<rat>, C: Mat<rat>)",
              returnType: "Mat<uint>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/bayes-risk/strategy"
            }
          },
        ]
      },
    ]
   }

  initializePredVulnComponents() { 
    return [
      {
        title: "qif.measure.pred_vuln.G_pred(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "G_pred(P: Row<uint>, type: class[double] = 1) → Mat<double>",
            method: {
              name: "Pred Vuln | G Pred",
              call: "G_pred(P: Row<uint>, type: class[double] = 1)",
              returnType: "Mat<double>",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("type", ParameterType.INTEGER, false, false),
              ],
              isRatio: false,
              url: "measure/pred-vuln/g-pred"
            }
          },
          {
            description: "G_pred(P: Row<uint>, type: class[fraction] = 1) → Mat<rat>",
            method: {
              name: "Pred Vuln | G Pred",
              call: "G_pred(P: Row<uint>, type: class[fraction] = 1)",
              returnType: "Mat<rat>",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("type", ParameterType.INTEGER, false, false),
              ],
              isRatio: true,
              url: "measure/pred-vuln/g-pred"
            }
          },
        ]
      },
      {
        title: "qif.measure.pred_vuln.add_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "add_leakage(P: Mat<uint>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Pred Vuln | Add Leakage",
              call: "add_leakage(P: Mat<uint>, pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/pred-vuln/add-leakage"
            }
          },
          {
            description: "add_leakage(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Pred Vuln | Add Leakage",
              call: "add_leakage(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/pred-vuln/add-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.pred_vuln.binary_channel(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "binary_channel(P: Mat<uint>, pi: Row<double>, C: Mat<double>) → Tuple[Row<double>, Mat<double>]",
            method: {
              name: "Pred Vuln | Binary Channel",
              call: "binary_channel(P: Mat<uint>, pi: Row<double>, C: Mat<double>)",
              returnType: "Tuple[Row<double>, Mat<double>]",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/pred-vuln/binary-channel"
            }
          },
          {
            description: "binary_channel(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>) → Tuple[Row<rat>, Mat<rat>]",
            method: {
              name: "Pred Vuln | Binary Channel",
              call: "binary_channel(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "Tuple[Row<rat>, Mat<rat>]",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/pred-vuln/binary-channel"
            }
          },
        ]
      },
      {
        title: "qif.measure.pred_vuln.mult_capacity(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "mult_capacity(P: Mat<uint>, C: Mat<double>, method: str = 'direct') → Tuple[float, Row<double>]",
            method: {
              name: "Pred Vuln | Mult Capacity",
              call: "mult_capacity(P: Mat<uint>, C: Mat<double>, method: str = 'direct')",
              returnType: "Tuple[float, Row<double>]",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
                new Parameter("method", ParameterType.STRING, false, false),
              ],
              isRatio: false,
              url: "measure/pred-vuln/mult-capacity"
            }
          },
          {
            description: "mult_capacity(P: Mat<uint>, C: Mat<rat>, method: str = 'direct') → Tuple[mppp::rational<1>, Row<rat>]",
            method: {
              name: "Pred Vuln | Mult Capacity",
              call: "mult_capacity(P: Mat<uint>, C: Mat<rat>, method: str = 'direct')",
              returnType: "Tuple[mppp::rational<1>, Row<rat>]",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
                new Parameter("method", ParameterType.STRING, false, false),
              ],
              isRatio: true,
              url: "measure/pred-vuln/mult-capacity"
            }
          },
        ]
      },
      {
        title: "qif.measure.pred_vuln.mult_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "mult_leakage(P: Mat<uint>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Pred Vuln | Mult Leakage",
              call: "mult_leakage(P: Mat<uint>, pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/pred-vuln/mult-leakage"
            }
          },
          {
            description: "mult_leakage(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Pred Vuln | Mult Leakage",
              call: "mult_leakage(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/pred-vuln/mult-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.pred_vuln.posterior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "posterior(P: Mat<uint>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Pred Vuln | Posterior",
              call: "posterior(P: Mat<uint>, pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/pred-vuln/posterior"
            }
          },
          {
            description: "posterior(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Pred Vuln | Posterior",
              call: "posterior(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/pred-vuln/posterior"
            }
          },
        ]
      },
      {
        title: "qif.measure.pred_vuln.prior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "prior(P: Mat<uint>, pi: Row<double>) → float",
            method: {
              name: "Pred Vuln | Prior",
              call: "posterior(P: Mat<uint>, pi: Row<double>)",
              returnType: "float",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "measure/pred-vuln/prior"
            }
          },
          {
            description: "prior(P: Mat<uint>, pi: Row<rat>) → mppp::rational<1>",
            method: {
              name: "Pred Vuln | Prior",
              call: "posterior(P: Mat<uint>, pi: Row<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
              ],
              isRatio: true,
              url: "measure/pred-vuln/prior"
            }
          },
        ]
      },
    ]
   }

  initializePredRiskComponents() { 
    return [
      {
        title: "qif.measure.pred_risk.L_pred(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "L_pred(P: Row<uint>, type: class[double] = 1) → Mat<double>",
            method: {
              name: "Pred Risk | L Pred",
              call: "L_pred(P: Row<uint>, type: class[double] = 1)",
              returnType: "Mat<double>",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("type", ParameterType.INTEGER, false, false),
              ],
              isRatio: false,
              url: "measure/pred-risk/l-pred"
            }
          },
          {
            description: "L_pred(P: Row<uint>, type: class[fraction] = 1) → Mat<rat>",
            method: {
              name: "Pred Risk | L Pred",
              call: "L_pred(P: Row<uint>, type: class[fraction] = 1)",
              returnType: "Mat<rat>",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("type", ParameterType.INTEGER, false, false),
              ],
              isRatio: true,
              url: "measure/pred-risk/l-pred"
            }
          },
        ]
      },
      {
        title: "qif.measure.pred_risk.add_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "add_leakage(P: Mat<uint>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Pred Risk | Add Leakage",
              call: "add_leakage(P: Mat<uint>, pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/pred-risk/add-leakage"
            }
          },
          {
            description: "add_leakage(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Pred Risk | Add Leakage",
              call: "add_leakage(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/pred-risk/add-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.pred_risk.binary_channel(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "binary_channel(P: Mat<uint>, pi: Row<double>, C: Mat<double>) → Tuple[Row<double>, Mat<double>]",
            method: {
              name: "Pred Risk | Binary Channel",
              call: "binary_channel(P: Mat<uint>, pi: Row<double>, C: Mat<double>)",
              returnType: "Tuple[Row<double>, Mat<double>]",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/pred-risk/binary-channel"
            }
          },
          {
            description: "binary_channel(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>) → Tuple[Row<rat>, Mat<rat>]",
            method: {
              name: "Pred Risk | Binary Channel",
              call: "binary_channel(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "Tuple[Row<rat>, Mat<rat>]",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/pred-risk/binary-channel"
            }
          },
        ]
      },
      {
        title: "qif.measure.pred_risk.mult_capacity(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "mult_capacity(P: Mat<uint>, C: Mat<double>, method: str = 'direct') → Tuple[float, Row<double>]",
            method: {
              name: "Pred Risk | Mult Capacity",
              call: "mult_capacity(P: Mat<uint>, C: Mat<double>, method: str = 'direct')",
              returnType: "Tuple[float, Row<double>]",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
                new Parameter("method", ParameterType.STRING, false, false),
              ],
              isRatio: false,
              url: "measure/pred-risk/mult-capacity"
            }
          },
          {
            description: "mult_capacity(P: Mat<uint>, C: Mat<rat>, method: str = 'direct') → Tuple[mppp::rational<1>, Row<rat>]",
            method: {
              name: "Pred Risk | Mult Capacity",
              call: "mult_capacity(P: Mat<uint>, C: Mat<rat>, method: str = 'direct')",
              returnType: "Tuple[mppp::rational<1>, Row<rat>]",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
                new Parameter("method", ParameterType.STRING, false, false),
              ],
              isRatio: true,
              url: "measure/pred-risk/mult-capacity"
            }
          },
        ]
      },
      {
        title: "qif.measure.pred_risk.mult_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "mult_leakage(P: Mat<uint>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Pred Risk | Mult Leakage",
              call: "mult_leakage(P: Mat<uint>, pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/pred-risk/mult-leakage"
            }
          },
          {
            description: "mult_leakage(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Pred Risk | Mult Leakage",
              call: "mult_leakage(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/pred-risk/mult-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.pred_risk.posterior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "posterior(P: Mat<uint>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Pred Risk | Posterior",
              call: "posterior(P: Mat<uint>, pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/pred-risk/posterior"
            }
          },
          {
            description: "posterior(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "Pred Risk | Posterior",
              call: "posterior(P: Mat<uint>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/pred-risk/posterior"
            }
          },
        ]
      },
      {
        title: "qif.measure.pred_risk.prior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "prior(P: Mat<uint>, pi: Row<double>) → float",
            method: {
              name: "Pred Risk | Prior",
              call: "posterior(P: Mat<uint>, pi: Row<double>)",
              returnType: "float",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "measure/pred-risk/prior"
            }
          },
          {
            description: "prior(P: Mat<uint>, pi: Row<rat>) → mppp::rational<1>",
            method: {
              name: "Pred Risk | Prior",
              call: "posterior(P: Mat<uint>, pi: Row<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("P", ParameterType.INTEGER, true, false),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
              ],
              isRatio: true,
              url: "measure/pred-risk/prior"
            }
          },
        ]
      },
    ]
   }

  initializeGVulnComponents() { 
    return [
      {
        title: "qif.measure.g_vuln.G_id(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "G_id(n_rows: int, type: class[double] = 1) → Mat<double>",
            method: {
              name: "G-Vuln | G Id",
              call: "G_id(n_rows: int, type: class[double] = 1)",
              returnType: "Mat<double>",
              parameters: [
                new Parameter("n_rows", ParameterType.INTEGER, false, false),
                new Parameter("type", ParameterType.INTEGER, false, false),
              ],
              isRatio: false,
              url: "measure/g-vuln/g-id"
            }
          },
          {
            description: "G_id(n_rows: int, type: class[fraction] = 1) → Mat<rat>",
            method: {
              name: "G-Vuln | G Id",
              call: "G_id(n_rows: int, type: class[fraction] = 1)",
              returnType: "Mat<rat>",
              parameters: [
                new Parameter("n_rows", ParameterType.INTEGER, false, false),
                new Parameter("type", ParameterType.INTEGER, false, false),
              ],
              isRatio: true,
              url: "measure/g-vuln/g-id"
            }
          },
        ]
      },
      {
        title: "qif.measure.g_vuln.add_capacity(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "add_capacity(pi: Row<double>, C: Mat<double>, one_spanning_g: bool = False) → float",
            method: {
              name: "G-Vuln | Add Capacity",
              call: "add_capacity(pi: Row<double>, C: Mat<double>, one_spanning_g: bool = False) → float",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
                new Parameter("one_spanning_g", ParameterType.BOOLEAN, false, false),
              ],
              isRatio: false,
              url: "measure/g-vuln/add-capacity"
            }
          },
          {
            description: "add_capacity(pi: Row<rat>, C: Mat<rat>, one_spanning_g: bool = False) → mppp::rational<1>",
            method: {
              name: "G-Vuln | Add Capacity",
              call: "add_capacity(pi: Row<rat>, C: Mat<rat>, one_spanning_g: bool = False)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
                new Parameter("one_spanning_g", ParameterType.BOOLEAN, false, false),
              ],
              isRatio: true,
              url: "measure/g-vuln/add-capacity"
            }
          },
        ]
      },
      {
        title: "qif.measure.g_vuln.add_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "add_leakage(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "G-Vuln | Add Leakage",
              call: "add_leakage(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
              returnType: "float",
              parameters: [
                new Parameter("G", ParameterType.DOUBLE, false, true),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/g-vuln/add-leakage"
            }
          },
          {
            description: "add_leakage(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "G-Vuln | Add Leakage",
              call: "add_leakage(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("G", ParameterType.RATIONAL, false, true),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/g-vuln/add-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.g_vuln.g_add(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "g_add(G1: Mat<double>, G2: Mat<double>) → Mat<double>",
            method: {
              name: "G-Vuln | G Add",
              call: "g_add(G1: Mat<double>, G2: Mat<double>)",
              returnType: "Mat<double>",
              parameters: [
                new Parameter("G1", ParameterType.DOUBLE, false, true),
                new Parameter("G2", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/g-vuln/g-add"
            }
          },
          {
            description: "g_add(G1: Mat<rat>, G2: Mat<rat>) → Mat<rat>",
            method: {
              name: "G-Vuln | G Add",
              call: "g_add(G1: Mat<rat>, G2: Mat<rat>)",
              returnType: "Mat<rat>",
              parameters: [
                new Parameter("G1", ParameterType.RATIONAL, false, true),
                new Parameter("G2", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/g-vuln/g-add"
            }
          },
        ]
      },
      {
        title: "qif.measure.g_vuln.g_from_posterior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "g_from_posterior(G1: Mat<double>, G2: Mat<double>) → Mat<double>",
            method: {
              name: "G-Vuln | G From Posterior",
              call: "g_from_posterior(G: Mat<double>, C: Mat<double>)",
              returnType: "Mat<double>",
              parameters: [
                new Parameter("G", ParameterType.DOUBLE, false, true),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/g-vuln/g-from-posterior"
            }
          },
          {
            description: "g_from_posterior(G1: Mat<rat>, G2: Mat<rat>) → Mat<rat>",
            method: {
              name: "G-Vuln | G From Posterior",
              call: "g_add(G: Mat<rat>, C: Mat<rat>)",
              returnType: "Mat<rat>",
              parameters: [
                new Parameter("G", ParameterType.RATIONAL, false, true),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/g-vuln/g-from-posterior"
            }
          },
        ]
      },
      {
        title: "qif.measure.g_vuln.g_to_bayes(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "g_to_bayes(G: Mat<double>, pi: Row<double>) → Tuple[Row<double>, Mat<double>, float, float]",
            method: {
              name: "G-Vuln | G to Bayes",
              call: "g_to_bayes(G: Mat<double>, pi: Row<double>)",
              returnType: "Tuple[Row<double>, Mat<double>, float, float]",
              parameters: [
                new Parameter("G", ParameterType.DOUBLE, false, true),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "measure/g-vuln/g-to-bayes"
            }
          },
          {
            description: "g_to_bayes(G: Mat<rat>, pi: Row<rat>) → Tuple[Row<rat>, Mat<rat>, mppp::rational<1>, mppp::rational<1>]",
            method: {
              name: "G-Vuln | G to Bayes",
              call: "g_to_bayes(G: Mat<rat>, pi: Row<rat>)",
              returnType: "Tuple[Row<rat>, Mat<rat>, mppp::rational<1>, mppp::rational<1>]",
              parameters: [
                new Parameter("G", ParameterType.RATIONAL, false, true),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
              ],
              isRatio: true,
              url: "measure/g-vuln/g-to-bayes"
            }
          },
        ]
      },
      {
        title: "qif.measure.g_vuln.mult_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "mult_leakage(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "G-Vuln | Mult Leakage",
              call: "mult_leakage(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
              returnType: "float",
              parameters: [
                new Parameter("G", ParameterType.DOUBLE, false, true),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/g-vuln/mult-leakage"
            }
          },
          {
            description: "mult_leakage(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "G-Vuln | Mult Leakage",
              call: "mult_leakage(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("G", ParameterType.RATIONAL, false, true),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/g-vuln/mult-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.g_vuln.posterior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "posterior(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "G-Vuln | Posterior",
              call: "posterior(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
              returnType: "float",
              parameters: [
                new Parameter("G", ParameterType.DOUBLE, false, true),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/g-vuln/posterior"
            }
          },
          {
            description: "posterior(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "G-Vuln | Posterior",
              call: "posterior(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("G", ParameterType.RATIONAL, false, true),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/g-vuln/posterior"
            }
          },
        ]
      },
      {
        title: "qif.measure.g_vuln.prior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "prior(G: Mat<double>, pi: Row<double>) → float",
            method: {
              name: "G-Vuln | Prior",
              call: "prior(G: Mat<double>, pi: Row<double>) → float",
              returnType: "float",
              parameters: [
                new Parameter("G", ParameterType.DOUBLE, false, true),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "measure/g-vuln/prior"
            }
          },
          {
            description: "prior(G: Mat<rat>, pi: Row<rat>) → mppp::rational<1>",
            method: {
              name: "G-Vuln | Prior",
              call: "prior(G: Mat<rat>, pi: Row<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("G", ParameterType.RATIONAL, false, true),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
              ],
              isRatio: true,
              url: "measure/g-vuln/prior"
            }
          },
        ]
      },
      {
        title: "qif.measure.g_vuln.strategy(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "strategy(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "G-Vuln | Strategy",
              call: "strategy(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
              returnType: "float",
              parameters: [
                new Parameter("G", ParameterType.DOUBLE, false, true),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/g-vuln/strategy"
            }
          },
          {
            description: "strategy(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "G-Vuln | Strategy",
              call: "strategy(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("G", ParameterType.RATIONAL, false, true),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/g-vuln/strategy"
            }
          },
        ]
      },
    ]
   }

  initializeLRiskComponents() { 
    return [
      {
        title: "qif.measure.l_risk.L_zero_one(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "L_zero_one(n_rows: int, type: class[double] = 1) → Mat<double>",
            method: {
              name: "L-Risk | L Zero One",
              call: "L_zero_one(n_rows: int, type: class[double] = 1)",
              returnType: "Mat<double>",
              parameters: [
                new Parameter("n_rows", ParameterType.INTEGER, false, false),
                new Parameter("type", ParameterType.INTEGER, false, false),
              ],
              isRatio: false,
              url: "measure/l-risk/l-zero-one"
            }
          },
          {
            description: "L_zero_one(n_rows: int, type: class[fraction] = 1) → Mat<rat>",
            method: {
              name: "L-Risk | L Zero One",
              call: "L_zero_one(n_rows: int, type: class[fraction] = 1)",
              returnType: "Mat<rat>",
              parameters: [
                new Parameter("n_rows", ParameterType.INTEGER, false, false),
                new Parameter("type", ParameterType.INTEGER, false, false),
              ],
              isRatio: true,
              url: "measure/l-risk/l-zero-one"
            }
          },
        ]
      },
      {
        title: "qif.measure.l_risk.add_capacity(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "add_capacity(pi: Row<double>, C: Mat<double>, one_spanning_g: bool = False) → float",
            method: {
              name: "L-Risk | Add Capacity",
              call: "add_capacity(pi: Row<double>, C: Mat<double>, one_spanning_g: bool = False) → float",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
                new Parameter("one_spanning_g", ParameterType.BOOLEAN, false, false),
              ],
              isRatio: false,
              url: "measure/l-risk/add-capacity"
            }
          },
          {
            description: "add_capacity(pi: Row<rat>, C: Mat<rat>, one_spanning_g: bool = False) → mppp::rational<1>",
            method: {
              name: "L-Risk | Add Capacity",
              call: "add_capacity(pi: Row<rat>, C: Mat<rat>, one_spanning_g: bool = False)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
                new Parameter("one_spanning_g", ParameterType.BOOLEAN, false, false),
              ],
              isRatio: true,
              url: "measure/l-risk/add-capacity"
            }
          },
        ]
      },
      {
        title: "qif.measure.l_risk.add_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "add_leakage(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "L-Risk | Add Leakage",
              call: "add_leakage(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
              returnType: "float",
              parameters: [
                new Parameter("G", ParameterType.DOUBLE, false, true),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/l-risk/add-leakage"
            }
          },
          {
            description: "add_leakage(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "L-Risk | Add Leakage",
              call: "add_leakage(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("G", ParameterType.RATIONAL, false, true),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/l-risk/add-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.l_risk.mult_leakage(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "mult_leakage(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "L-Risk | Mult Leakage",
              call: "mult_leakage(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
              returnType: "float",
              parameters: [
                new Parameter("G", ParameterType.DOUBLE, false, true),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/l-risk/mult-leakage"
            }
          },
          {
            description: "mult_leakage(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "L-Risk | Mult Leakage",
              call: "mult_leakage(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("G", ParameterType.RATIONAL, false, true),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/l-risk/mult-leakage"
            }
          },
        ]
      },
      {
        title: "qif.measure.l_risk.posterior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "posterior(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "L-Risk | Posterior",
              call: "posterior(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
              returnType: "float",
              parameters: [
                new Parameter("G", ParameterType.DOUBLE, false, true),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/l-risk/posterior"
            }
          },
          {
            description: "posterior(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "L-Risk | Posterior",
              call: "posterior(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("G", ParameterType.RATIONAL, false, true),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/l-risk/posterior"
            }
          },
        ]
      },
      {
        title: "qif.measure.l_risk.prior(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "prior(G: Mat<double>, pi: Row<double>) → float",
            method: {
              name: "L-Risk | Prior",
              call: "prior(G: Mat<double>, pi: Row<double>) → float",
              returnType: "float",
              parameters: [
                new Parameter("G", ParameterType.DOUBLE, false, true),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "measure/l-risk/prior"
            }
          },
          {
            description: "prior(G: Mat<rat>, pi: Row<rat>) → mppp::rational<1>",
            method: {
              name: "L-Risk | Prior",
              call: "prior(G: Mat<rat>, pi: Row<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("G", ParameterType.RATIONAL, false, true),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
              ],
              isRatio: true,
              url: "measure/l-risk/prior"
            }
          },
        ]
      },
      {
        title: "qif.measure.l_risk.strategy(*args, **kwargs)",
        description: "Overloaded function",
        items: [
          {
            description: "strategy(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "L-Risk | Strategy",
              call: "strategy(G: Mat<double>, pi: Row<double>, C: Mat<double>) → float",
              returnType: "float",
              parameters: [
                new Parameter("G", ParameterType.DOUBLE, false, true),
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/l-risk/strategy"
            }
          },
          {
            description: "strategy(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>) → mppp::rational<1>",
            method: {
              name: "L-Risk | Strategy",
              call: "strategy(G: Mat<rat>, pi: Row<rat>, C: Mat<rat>)",
              returnType: "mppp::rational<1>",
              parameters: [
                new Parameter("G", ParameterType.RATIONAL, false, true),
                new Parameter("pi", ParameterType.RATIONAL, true, false),
                new Parameter("C", ParameterType.RATIONAL, false, true),
              ],
              isRatio: true,
              url: "measure/l-risk/strategy"
            }
          },
        ]
      },
    ]
   }

  initializeShannonComponents() { 
    return [
      {
        title: "qif.measure.shannon.add_capacity(*args, **kwargs)",
        description: "",
        items: [
          {
            description: "add_capacity(C: Mat<double>, md: float = 1e-07, mrd: float = 2.220446049250313e-14) → Tuple[float, Row<double>]",
            method: {
              name: "Shannon entropy | Add Capacity",
              call: "add_capacity(C: Mat<double>, md: float = 1e-07, mrd: float = 2.220446049250313e-14)",
              returnType: "Tuple[float, Row<double>]",
              parameters: [
                new Parameter("C", ParameterType.DOUBLE, false, true),
                new Parameter("md", ParameterType.FLOAT, false, false),
                new Parameter("mrd", ParameterType.FLOAT, false, false),
              ],
              isRatio: false,
              url: "measure/shannon/add-capacity"
            }
          }
        ]
      },
      {
        title: "qif.measure.shannon.add_leakage(*args, **kwargs)",
        description: "",
        items: [
          {
            description: "add_leakage(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Shannon entropy | Add leakage",
              call: "add_leakage(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/shannon/add-leakage"
            }
          }
        ]
      },
      {
        title: "qif.measure.shannon.mult_leakage(*args, **kwargs)",
        description: "",
        items: [
          {
            description: "mult_leakage(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Shannon entropy | Mult leakage",
              call: "mult_leakage(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/shannon/mult-leakage"
            }
          }
        ]
      },
      {
        title: "qif.measure.shannon.posterior(*args, **kwargs)",
        description: "",
        items: [
          {
            description: "posterior(pi: Row<double>, C: Mat<double>) → float",
            method: {
              name: "Shannon entropy | Posterior",
              call: "posterior(pi: Row<double>, C: Mat<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
                new Parameter("C", ParameterType.DOUBLE, false, true),
              ],
              isRatio: false,
              url: "measure/shannon/posterior"
            }
          }
        ]
      },
      {
        title: "qif.measure.shannon.prior(*args, **kwargs)",
        description: "",
        items: [
          {
            description: "prior(pi: Row<double>) → float",
            method: {
              name: "Shannon entropy | Prior",
              call: "add_leakage(pi: Row<double>)",
              returnType: "float",
              parameters: [
                new Parameter("pi", ParameterType.DOUBLE, true, false),
              ],
              isRatio: false,
              url: "measure/shannon/prior"
            }
          }
        ]
      }
    ]
  }

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
