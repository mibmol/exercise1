
## Description

Salary Calculator is a [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA) that calculates the total in USD that a company have to pay to an employee in a week given a schedule.
This app is built with Typescript and [React](https://reactjs.org/) with no extra dependecies.



## Run the app locally

To run locally you need to the classic [yarn](https://classic.yarnpkg.com/en/docs/install) version installed in your machine. The steps to install yarn are detailed in the [yarn docs](https://classic.yarnpkg.com/en/docs/install).

Once yo have yarn, clone the project and run:

```bash
  yarn && yarn start
```
A running example can be found [here](https://salarycalc.vercel.app/)


## Run tests

All test are located in src/test and given that the [React Testing library](https://testing-library.com/docs/react-testing-library/intro/) 
is already shipped with [CRA](https://create-react-app.dev/) we can simply run:
```bash
  yarn test
```

## Solution Overview

This is a quite simple solution, mainly based on functional programming and empirical code.
This solution rely on heavily on React hooks which provide a declarative way to handle the app state 
and make it easy to separate concerns, i.e. decoupling the UI from business or stateful logic 

All this always keeping in mind avoiding over-engineering the solution and modularizing as much as possible 

Regarding the styling, raw css was used for high level components, and 
for children or small components the style prop was used providing an object with the css rules





