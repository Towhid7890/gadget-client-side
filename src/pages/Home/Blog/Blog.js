import React from "react";

const Blog = () => {
  return (
    <div className="py-5 px-5">
      <h2 className="text-3xl font-bold text-center py-12">
        Read our Blog from here
      </h2>
      <div>
        <h2 className="text-3xl font-bold">
          1. What are the different ways to manage a state in a React
          application?
        </h2>
        <p>
          The Four Kinds of React State to Manage Local state. Global state.
          Server state. URL state.For example, local state would be needed to
          show or hide a modal component or to track values for a form
          component, such as form submission, when the form is disabled and the
          values of a form’s inputs.Local state is most often managed in React
          using the useState hook.It can take accept any valid data value,
          including primitive and object values. Additionally, its setter
          function can be passed down to other components as a callback function
          without needing optimizations like useCallback.
        </p>
        <h2 className="text-3xl font-bold">
          2. How does prototypical inheritance work?
        </h2>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object.The most important difference
          between class- and prototype-based inheritance is that a class defines
          a type which can be instantiated at runtime, whereas a prototype is
          itself an object instance.
        </p>
        <h2 className="text-3xl font-bold">
          3.What is a unit test? Why should we write unit tests?
        </h2>
        <p>
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages. The key is: when you write test you take the
          perspective of the one that will consume your code. It forces you to
          have an holistic approach of the behavior to implement. This way
          ambiguities you get from requirements become obvious and are
          immediately taken account when code is written the first time.
        </p>
        <h2 className="text-3xl font-bold">4 .React vs. Angular vs. Vue?</h2>
        <p>
          Angular, React and Vue are all highly popular JavaScript libraries and
          frameworks that help developers build complex, reactive and modern
          user interfaces for the web. Actually, with additional libraries like
          React Native, Ionic (with Angular or with React) or NativeScript you
          can even build native mobile apps for mobile devices with help of
          Angular, React and Vue.
        </p>
        <p>
          Where Angular gives you everything, React gives you only one thing: A
          library for rendering content to the DOM and controlling it
          efficiently thereafter. It's also all about components and all about
          building user interfaces from components. It also gives you all the
          "tools" you need to define what should be rendered in which way under
          which circumstances.
        </p>
      </div>
    </div>
  );
};

export default Blog;
