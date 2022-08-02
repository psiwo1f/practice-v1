export interface AppProps {
  heading: string;
  optionalProp?: string; // optional prop
  defaultProp?: string;
}

export interface Address {
  city: string;
  street: string;
  number: number;
  zip: string;
}

export interface User {
  name: string;
  age: number;
// bad practice to define nested objects, so we defined addr separately
  addr: Address;
  isAdmin: boolean;
}
