import React from "react";
import "./home.css";
// import { Link } from "react-router-dom";
import "./code.png";
const Home = (props) => {
  return (
    <>
      <div className="title_container">
        <h1 className="title_head">React InterView Questions</h1> <br /> <br />
        {/* <div >
            <ul className="linkContainer">
            <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/day-1">Day-1</Link> </li>
                <li> <Link to= "/day-2">Day-2</Link> </li>
                <li> <Link to= "/day-3">Day-3</Link> </li>
                <li> <Link to= "/day-4">Day-4</Link> </li>
                <li> <Link to= "/day-5">Day-5</Link> </li>
            </ul>
        </div> */}
      </div>
      <div className="container_div_questins_ans">
        <h2 className="day_title">Day-1</h2>
        <h3 className="questions_1">1. What is Virtual DOM?</h3>
        <p className="ans_question1">
          The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The
          representation of a UI is kept in memory and synced with the "real"
          DOM. It's a step that happens between the render function being called
          and the displaying of elements on the screen. This entire process is
          called reconciliation. (or) DOM is a document object model, created by
          converting HTML CSS and JS Real DOM, which is an object which gets
          created whenever any React application gets loaded on the screen for
          the first time., whenever React components gets mounted on the screen
          for the first time. Now when any user makes any changes on the screen
          like button click because of which the state variable will get updated
          so in this case the changes will not directly go to Real DOM , instead
          in react we have concept known Virtual DOM. So we are having two
          virtual doms, one virtual dom gets created at the time of mounting of
          react component so it is a copy of your real dom. Another virtual dom
          is the dom which contains the new changes, updated state variables
          values. Now these two virtual doms will get compared with each other
          and will check for the new changes. this complete procedure is known
          as diffing algorithm. Now the new changes will be updated in your Real
          dom. this procedure is known as Recoinciliation.
        </p>
        <h3 className="questions_1">2. What is SPA?</h3>
        <p>
          Single page application : Any web application , in which when you are
          clicking on any button or selecting option from navigation bar then if
          your page which means browser page is reloading then that means that
          application is your multi - page application . If it does not reload
          the browser page and just only updates the page without reloading then
          that application is known as Single Page application. When you create
          React application using CRA, (create-react-app boilerplate , developed
          by Facebook) it always create the application which will be Single
          page application.
        </p>
        <h3 className="questions_1">
          3. What is difference between Functional and Class component?
        </h3>
        <h1>Functional Components::</h1>
        <ol>
          <li>
            A functional component is just a plain JavaScript function that
            accepts props as an argument and returns a React element.
          </li>
          <li>There is no render method used in functional components.</li>
          <li>
            Also known as Stateless components as they simply accept data and
            display them in some form, that they are mainly responsible for
            rendering UI.
          </li>
          <li>
            React lifecycle methods (for example, componentDidMount) cannot be
            used in functional components.
          </li>
          <li>
            Hooks can be easily used in functional components to make them
            Stateful. example: const [name,SetName]= React.useState(" ")
          </li>
          <li>Constructors are not used.</li>
        </ol>
        <h1>Class Component::</h1>
        <ol>
          <li>
            A class component requires you to extend from React. Component and
            create a render function which returns a React element.
          </li>
          <li>
            It must have the render() method returning JSX (which is
            syntactically similar to HTML)
          </li>
          <li>
            Also known as Stateful components because they implement logic and
            state.
          </li>
          <li>
            React lifecycle methods can be used inside class components (for
            example componentDidMount).
          </li>
          <li>
            It requires different syntax inside a class component to implement
            hooks. example: constructor(props) #1545 super(props); this.state =
            #1545name: ‘ ‘#1545 #1545
          </li>
          <li>Constructor are used as it needs to store state.</li>
        </ol>

        <h3 className="questions_1">
          4. What does mean by state and its use in react?
        </h3>
        <p>
          State of a component is an object that holds some information that may
          change over the lifetime of the component. We should always try to
          make our state as simple as possible and minimize the number of
          stateful components. Let's create a user component with message state,
        </p>
        <p>
          {" "}
          <img src="code.png" alt="img..." />{" "}
        </p>
      
      <h3 className="questions_1">
        5. What is JSX and why do we use it instead of js?
      </h3>
      <p>
        JSX is a XML-like syntax extension to ECMAScript (the acronym stands for
        JavaScript XML). Basically it just provides syntactic sugar for the
        React.createElement() function, giving us expressiveness of JavaScript
        along with HTML like template syntax. In the example below text inside
      </p>
      <h3 className="questions_1">5. What is package.json?</h3>
      <p>
        It contains the information about the project and also contains the
        libraries which the project is using and it also has the description of
        the commands which gets used to run test or build your project.
      </p>
      </div>
    </>
  );
};

export default Home;
