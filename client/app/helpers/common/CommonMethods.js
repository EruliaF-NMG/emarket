/*
 * @Author: Nisal Madusanka(EruliaF)
 * @Date: 2018-12-28 20:45:41
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2018-12-30 10:47:09
 */
import { get } from "lodash";

const getValue = (object, key, defaultValue = "") => {
  try {
    return get(object, key, defaultValue);
  } catch (ex) {
    return defaultValue;
  }
};

export { 
    getValue 
};
