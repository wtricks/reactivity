// Used to hold subscribers
export type SignalDep = { [key: number]:  number | Function};

// Signals getter function
export type Getter<T> = () => T;

// Signals setter function
export type Setter<T> = (val: T | ((val: T) => T)) => void;

// Signals getter and setter function
export type Signal<T> = [Getter<T>, Setter<T>];

// Observer functions
export type ObserveFn<T> = () => T;

export type ObserveResult<T> = [val: T, cleanup: () => void]

export type Cleanup = [s: SignalDep, id: number]