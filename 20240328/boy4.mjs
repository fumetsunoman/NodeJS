//重新命名導出
import { sayMyName } from "./boy3.mjs";

const aa = () => {
  console.log("Kenny");
}

const bb = () => {
  console.log("Taiwan");
}

export {
	aa as sayMyName,
	bb as sayMyCountry
}