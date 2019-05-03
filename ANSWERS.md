 [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used to type check data that is being passed down from one component to the other. If not type checked, 
a different data type might be passed down which might break our code

- [ ] Describe a life-cycle event in React?
componentDidMount() is invoked immediately after a component is mounted. This is the best place to connect to external APIs.

- [ ] Explain the details of a Higher Order Component?
A Higher order component is a component that takes in other components as arguments and returns a new component source which This  allows  the ability to encapsulate some shared functionality between components and avoid repeating ourselves
- [ ] What are three different ways to style components in React? Explain some of the benefits of each.
1. Vanilla CSS?with preprocessors: Gives us a full control of our styling, but can be timetaking 
2. Reactstrap/other 3rd party libraries: can be used for a better productivity as they contain prestyled components that are ready to be used. 
3. Styled Components: nice for some one who want to do everything in Javascript. They are integrated in the JS component and can be passed as props to other components. 