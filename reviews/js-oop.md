# Review 1/19/22 - JavaScript Object Oriented Programming

JavaScript is multi-paradigmed, meaning that it includes functional, procedural, and OOP programming concepts.

Pillars of JS:

1. Type Coercion
2. Scope/Closure
3. Prototypes (object oriented programming in JS)

Pillars of OOP

1. Polymorphism

   Objects can be morphed (changed) to other object types (e.g. `Object.toString()`)

2. Inheritence

   Objects inheriting (having access to) properties and methods from a parent class or prototype chain.

   ```js
   class MyArray extends Array {}
   ```

3. Encapsulation

   Objects have public or private properties and methods, where public can be accessed from outside, private is only accessible from the object/class itself.

4. Abstraction

   The concept of creating _actions over values_

## Prototypes

- A prototype is model for all objects of the same type
- Contains properties and methods that all instances of the prototype share
- It is an object value itself
- Prototypes can be linked, or _chained_, to one another (_inheritence_)

## Class Syntax

- _instance_ refers to an object created from a class or prototype
- `class` keyword to declare a class, given a name (\* class names are conventionally capitalized)
- `constructor` to declare a class constructor, can be given parameters, used to initialize instance property values
- _super_ refers to the parent class
- calling `super` within a class constructor will call the parent class constructor
- methods defined on a class are considered _class methods_
- methods defined in the constructor are considered _instance methods_
- _Method Overriding_ is the process of redefining a method on a child class
- Use the `new` keyword followed by the class name and `()` to create a new instance of a class
