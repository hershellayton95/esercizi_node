import "./lib/script1";
import "./lib/script2";
import "./lib/script3";

import Singleton from "./lib/singleton";

const counterInstance = Singleton.getIstance();

counterInstance.increment();

console.log(counterInstance.getCounter);
