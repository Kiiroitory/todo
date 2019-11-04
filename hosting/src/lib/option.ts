//import {Some} from "../@types/Option";
import { Option, some, none, Some, None} from "fp-ts/lib/Option";


Some.prototype['get'] = function () {
  return this.value
}

None.prototype['get'] = function () {
  throw new Error('noneです')
}