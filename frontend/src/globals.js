const env = process.env.REACT_APP_ENV;

// Get the API url for the environment
let envApiUrl = "";
if (env === "production") {
  envApiUrl = `${process.env.REACT_APP_DOMAIN_PROD}/api/v1`;
} else if (env === "staging") {
  envApiUrl = `${process.env.REACT_APP_DOMAIN_STAG}/api/v1`;
} else {
  envApiUrl = `${process.env.REACT_APP_DOMAIN_DEV}/api/v1`;
}
const apiUrl = envApiUrl;
const appName = process.env.REACT_APP_NAME;

// Object to hold global settings variables used throughout the frontend
const globals = {
  defaultStartDate: new Date(2025, 8, 3),
  defaultEndDate: new Date(2025, 12, 18),
  currentTerm: "Fall 2025",
  apiUrl: apiUrl,
  name: appName,
};
Object.freeze(globals);

export default globals;
