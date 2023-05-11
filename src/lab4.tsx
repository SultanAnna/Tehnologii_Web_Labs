import './App.css';
import { Component } from "react";
import { Provider } from "mobx-react";

interface Props {}

interface State {
  rootTree: any
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  address: string;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

class EmployeeImpl implements Employee {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  address: string;
  employeeId: number;
  department: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    address: string,
    employeeId: number,
    department: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
    this.employeeId = employeeId;
    this.department = department;
  }
}

const employee = new EmployeeImpl(
  "John",
  "Doe",
  30,
  "john.doe@example.com",
  "123 Main St.",
  123,
  "IT"
);