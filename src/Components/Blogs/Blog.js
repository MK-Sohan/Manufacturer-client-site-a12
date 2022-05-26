import React from "react";
import image from "../.././image/Capture.PNG";
const Blog = () => {
  return (
    <div className=" mx-auto mb-20 mt-16 w-3/4">
      <h1 className="text-3xl">
        Q1: How will we improve the performance of a React Application?
      </h1>
      <p className="text-xl mt-5">
        Ans:
        <li>Keeping component state local where necessary.</li>
        <li>Memoizing React components to prevent unnecessary re-renders.</li>
        <li>Code-splitting in React using dynamic import()</li>
        <li>Windowing or list virtualization in React.</li>
        <li>Lazy loading images in React.</li>
      </p>
      <h1 className="text-3xl mt-5">
        Q2: What are the different ways to manage a state in a React
        application?
      </h1>
      <p className="text-xl mt-5">
        Ans: There are four main types of state you need to properly manage in
        React apps:
        <li>Local state.</li>
        <li>Global state.</li>
        <li>Server state.</li>
        <li>URL state.</li>
      </p>
      <h1 className="text-3xl mt-5">
        Q3: How does prototypical inheritance work?
      </h1>
      <p className="text-xl mt-5">
        Ans:The Prototypal Inheritance is a feature in javascript used to add
        methods and properties in objects. <br /> It is a method by which an
        object can inherit the properties and methods of another object.
        Traditionally, in order to get and set the Prototype of an object, we
        use Object. getPrototypeOf and Object.
      </p>
      <h1 className="text-3xl mt-5">
        Q4: What is a unit test? Why should write unit tests?
      </h1>
      <p className="text-xl mt-5">
        Ans: Unit testing:UNIT TESTING is a type of software testing where
        individual units or components of a software are tested. Why should
        write unit tests: Unit testing allows us as a devloper to actually think
        through the design of the software . This help devlopers to stay focused
        and can also help to create a good design.
      </p>
      <h1 className="text-3xl mt-5">
        Q5: You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h1>
      <img src={image} alt="" />
      <p className="text-xl mt-5">
        Ans: First time declear a array of object where will be product
        name,price product description. Declear a findProducts function which
        function find product and retun the value. This function give a
        parameter which name productName.l also parameter name store another
        variable and convert case sensitive. We know that filter is one of array
        method.Now we are easily implement filter method.filter method loop all
        array elemet filter method first parameter take every elemet and every
        element includes name property.parameter name and property name do the
        match should both name case sensitive.when filter method loop startd
        every time check inside product proter name would include parameter
        name.when the match both name then filter method return true and also
        array of object return.
      </p>
    </div>
  );
};

export default Blog;
