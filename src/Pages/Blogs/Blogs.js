import React from "react";
import "../Blogs/Blogs.css";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-16 mb-10">Blog Section</h2>

      {/* Question - 1 */}
      <div className="question-1 mx-auto my-5">
        <h4 className="text-center text-xl font-bold my-3">To improve the performance of a React Application</h4>
        <hr />
        <div>
          <p>1. Using Immutable Data Structures</p>
          <p>2. Stateless Components and React.PureComponent</p>
          <p>3. Avoid Inline Function Definition in the Render Function.</p>
          <p>4. Avoid using Index as Key for map</p>
          <p>5. Avoiding Props in Initial States</p>
          <p>6. Spreading props on DOM elements</p>
          <p>7. Use Reselect in Redux to Avoid Frequent Re-render</p>
          <p>8. Memoize React Components</p>
          <p>9. CSS Animations Instead of JS Animations</p>
          <p>10. Using a CDN</p>
        </div>
      </div>

      {/* Question - 2 */}
      <div className="question-2 mx-auto my-5">
        <h4 className="text-center text-xl font-bold my-3">The different ways to manage a state in a React application</h4>
        <hr />
        <div>
          <p>1. Communication State</p>
          <p>2. Data State</p>
          <p>3. Control State.</p>
          <p>4. Session State</p>
          <p>5. Location State</p>
        </div>
      </div>

      {/* Question - 3 */}
      <div className="question-3 mx-auto my-5">
        <h4 className="text-center text-xl font-bold my-3">How does prototypical inheritance work?</h4>
        <hr />
        <div>
          <p>
            Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how
            Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword "class"
            and "inheritance".
          </p>
          <p>
            So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose
            is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
          </p>
        </div>
      </div>

      {/* Question - 4 */}
      <div className="question-4 mx-auto my-5">
        <h4 className="text-center text-xl font-bold my-3">How will you implement a search to find products by name?</h4>
        <hr />
        <div>
          <p>Select Product By Search allows you to do a text search and find all products in which a specific string appears.</p>
          <p>You can perform a search across all existing nomenclatures.</p>
          <p>
            For example a search on Textiles will do a search on all existing nomenclatures and find all items in which the word "Textile" appears.
            Type Textile in the Search Text box and click on Searchbutton. The system finds all products with the text "Textile" in it. Now, you can
            use the scrollbar to view all the products and place a checkmark in check boxes to the left of each product. Finally, click on OK. The
            selected products from the search panel will be added to the Products dimension.
          </p>
        </div>
      </div>

      {/* Question - 5 */}
      <div className="question-5 mx-auto my-5">
        <h4 className="text-center text-xl font-bold my-3">What is a unit test?</h4>
        <hr />
        <div>
          <p>
            Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers
            and sometimes QA staff. The main objective of unit testing is to isolate written code to test and determine if it works as intended.
          </p>
        </div>
        <div>
          <h4 className="text-center font-bold my-3">Why should write unit tests?</h4>
          <hr />
          <div>
            <li>
              Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without
              thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used
              to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs
              into the system.
            </li>
            <li>
              Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your
              functions.
            </li>
            <li>It simplifies the debugging process.</li>
            <li>
              Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break”
              programming strategy.
            </li>
            <li>
              Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests
              to your new project, then run your tests to make sure you have the desired results.
            </li>
          </div>
        </div>
      </div>

      {/* --------------------------- */}
    </div>
  );
};

export default Blogs;
