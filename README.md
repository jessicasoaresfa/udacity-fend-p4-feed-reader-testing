# Feed Reader Testing

This exercise is part of Udacity Nanodegree Front-End Developer created to cover some basic topics on "test-driven develompent". They provided a starter code with Jasmine scripts built in so there was no need to install any application.

## Getting Started

A simple way to go is to clone or download this git repository to your local machine. Load the index.html in your preferred browser, you should be able to see the feeds loading and the test results at the bottom of the web page. I suggested using Chrome or FireFox.

### Prerequisites

Before starting the test procedures, I recommend reviewing the content from [JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549).

The test cases were created following the Udacity requirements provided in [Feed Reader Testing project rubric](https://review.udacity.com/#!/rubrics/18/view). Please review for detailed project requirements.

## Running the tests

The test suites were coded using the provided feedreader.js and it is automatically loaded by the browser while it loads the index.html.

The tests are separated in 3 test suites:

1. The Menu - ensures that the menu is hidden by defaul and toggles with a click at the menu icon;
2. Initial Entries - ensure that there is at least a single .entry elemnte within the .feed container. This test uses an async function;
3. New Feed Selection - ensure that the loadFeed function is working and changing the content of the feed.

You will be able to run each test independently editing the test jasmine test file and commenting of excluding pieces of the code.