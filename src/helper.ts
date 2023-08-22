export const __DEV__ = true;

export const def = <T>(o: object, key: PropertyKey, value: T) => {
    return Object.defineProperty(o, key, { value, enumerable: false })
}

export const isFunction = (v: any): v is Function => {
    return typeof v === 'function';
}

export const isString = (v: any): v is string => {
    return typeof v === 'string';
}

export const isBool = (v: any): v is boolean => {
    return typeof v === 'boolean';
}

export const falsy = () => {
    return false;
}

export const isEqual = (a: any, b: any): boolean => {
    return a === b;
}