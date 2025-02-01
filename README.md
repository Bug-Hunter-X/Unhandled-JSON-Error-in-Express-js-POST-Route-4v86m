# Unhandled JSON Error in Express.js POST Route

This repository demonstrates a common error in Express.js applications:  lack of error handling when parsing JSON in the request body.  The `bug.js` file shows the flawed code, while `bugSolution.js` provides the corrected version.

## Problem

The `bug.js` file includes a POST route that expects JSON data. However, it lacks error handling. If a client sends malformed JSON, the server will likely crash or produce unexpected results. 

## Solution

The `bugSolution.js` file demonstrates how to properly handle potential errors during JSON parsing using `try...catch` blocks and sending appropriate error responses to the client.