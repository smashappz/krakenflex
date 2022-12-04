# KrakenFlex Back End Test

## Installation

Change to directory and with node (tested with v16.15.1) installed, run `npm i` to install dependencies. To run the demo type `npm run demo`.
To test run `npm test`, note that it isn't working with the jest config as I ran out of time. But the main idea was to test the function `getSiteOutagesAfterCutOffDate`. The other functions just interact with endpoints so their data could of been mocked.

### Bonus Requirements

* The API will occasionally return 500 status codes. Can you implement a solution that is resilient to this scenario?

Wrap the endpoint calls in try-catch blocks and handle any errors.
