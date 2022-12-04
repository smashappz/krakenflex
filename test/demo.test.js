const apiOperations = require("../src/demo");

const outages = [
  {
    id: "002b28fc-283c-47ec-9af2-ea287336dc1b",
    begin: "2021-07-26T17:09:31.036Z",
    end: "2021-08-29T00:37:42.253Z",
  },
  {
    id: "002b28fc-283c-47ec-9af2-ea287336dc1b",
    begin: "2022-05-23T12:21:27.377Z",
    end: "2022-11-13T02:16:38.905Z",
  },
  {
    id: "002b28fc-283c-47ec-9af2-ea287336dc1b",
    begin: "2022-12-04T09:59:33.628Z",
    end: "2022-12-12T22:35:13.815Z",
  },
  {
    id: "04ccad00-eb8d-4045-8994-b569cb4b64c1",
    begin: "2022-07-12T16:31:47.254Z",
    end: "2022-10-13T04:05:10.044Z",
  },
  {
    id: "086b0d53-b311-4441-aaf3-935646f03d4d",
    begin: "2022-07-12T16:31:47.254Z",
    end: "2022-10-13T04:05:10.044Z",
  },
  {
    id: "27820d4a-1bc4-4fc1-a5f0-bcb3627e94a1",
    begin: "2021-07-12T16:31:47.254Z",
    end: "2022-10-13T04:05:10.044Z",
  },
];

const siteInfo = {
  id: "kingfisher",
  name: "KingFisher",
  devices: [
    {
      id: "002b28fc-283c-47ec-9af2-ea287336dc1b",
      name: "Battery 1",
    },
    {
      id: "086b0d53-b311-4441-aaf3-935646f03d4d",
      name: "Battery 2",
    },
  ],
};

const siteOutages = [
  {
    id: "002b28fc-283c-47ec-9af2-ea287336dc1b",
    name: "Battery 1",
    begin: "2022-05-23T12:21:27.377Z",
    end: "2022-11-13T02:16:38.905Z",
  },
  {
    id: "002b28fc-283c-47ec-9af2-ea287336dc1b",
    name: "Battery 1",
    begin: "2022-12-04T09:59:33.628Z",
    end: "2022-12-12T22:35:13.815Z",
  },
  {
    id: "086b0d53-b311-4441-aaf3-935646f03d4d",
    name: "Battery 2",
    begin: "2022-07-12T16:31:47.254Z",
    end: "2022-10-13T04:05:10.044Z",
  },
];

const cutoffDate = new Date("2022-01-01T00:00:00.000Z").getTime();

// not working

describe("Demo Tests", () => {
  test("Check site outages", () => {
    // arrange and act
    const result = apiOperations.getSiteOutagesAfterCutOffDate(
      outages,
      siteInfo,
      cutoffDate
    );

    // assert
    expect(result).toBe(siteOutages);
  });
});

// Out of time with this console.error, can't get Jest working with node at short notice
// ● Demo Tests › Check site outages

// TypeError: apiOperations.getSiteOutagesAfterCutOffDate is not a function

//   79 |   test("Check site outages", () => {
//   80 |     // arrange and act
// > 81 |     const result = apiOperations.getSiteOutagesAfterCutOffDate(
//      |                                  ^
//   82 |       outages,
//   83 |       siteInfo,
//   84 |       cutoffDate

//   at Object.getSiteOutagesAfterCutOffDate (test/demo.test.js:81:34)