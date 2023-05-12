exports.fetchEndpointsDescription = () => {
  return {
    "GET /api": {
      description:
        "serves up a json representation of all the available endpoints of the api",
      exampleResponse: {
        endpoints: [{ This: "File" }],
      },
    },
    "GET /api/dailys": {
      description: "serves an array of all daily to dos",
      queries: [],
      exampleResponse: {
        topics: [{ todo_id: 1, todo: "Run" }],
      },
    },
    "GET /api/weeklys": {
      description: "serves an array of all weekly to dos",
      queries: [],
      exampleResponse: {
        topics: [{ todo_id: 7, todo: "Hoover" }],
      },
    },
    "GET /api/monthlys": {
      description: "serves an array of all monthly to dos",
      queries: [],
      exampleResponse: {
        topics: [{ todo_id: 9, todo: "Mow Lawn" }],
      },
    },
  };
};
