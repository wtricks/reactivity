/* Indicates whether the code is running in development mode. */
export const __DEV__ = true;

/** 
 * Sets a property on an object with the specified key and value.
 * @param o - The object to which the property will be added.
 * @param key - The key for the new property.
 * @param value - The value for the new property.
 * @returns The object with the new property added. 
 */
export const def = <T>(o: object, key: PropertyKey, value: T) => {
    return Object.defineProperty(o, key, { value, enumerable: false });
}

/** 
 * Checks if a value is a function.
 * @param v - The value to check.
 * @returns True if the value is a function, otherwise false. 
 */
export const isFunction = (v: any): v is Function => {
    return typeof v === 'function';
}

/** 
 * Checks if a value is a string.
 * @param v - The value to check.
 * @returns True if the value is a string, otherwise false. 
 */
export const isString = (v: any): v is string => {
    return typeof v === 'string';
}

/** 
 * Checks if a value is a boolean.
 * @param v - The value to check.
 * @returns True if the value is a boolean, otherwise false. 
 */
export const isBool = (v: any): v is boolean => {
    return typeof v === 'boolean';
}

/**
 * Always returns false.
 * @returns False. 
 */
export const falsy = () => {
    return false;
}

/** 
 * Compares two values for equality.
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns True if the values are equal, otherwise false. 
 */
export const isEqual = (a: any, b: any): boolean => {
    return a === b;
}
