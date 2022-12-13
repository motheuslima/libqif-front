export class MethodComponent {
  title: string = "";
  description: string = "";
  items: Array<MethodItem> = []
}

export class MethodItem {
  description: string = "";
  method: Method = new Method();
}

export class Method {
  name: string = "";
  call: string = "";
  returnType: string = "";
  parameters: Array<Parameter> = [];
  url: string = "";
  isRatio: boolean = false;

  constructor() {}
}

export class Parameter {
  name: string;
  type: ParameterType;
  isArray: boolean;
  isMatrix: boolean;

  constructor(name: string, type: ParameterType, isArray: boolean, isMatrix: boolean) {
    this.name = name;
    this.type = type;
    this.isArray = isArray;
    this.isMatrix = isMatrix;
  }
}

export enum ParameterType {
  DOUBLE,
  INTEGER,
  RATIONAL,
  BOOLEAN,
  FLOAT,
  STRING
}
