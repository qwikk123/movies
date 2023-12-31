const encodedCredentials = btoa(
  `${import.meta.env.VITE_USERNAME}:${import.meta.env.VITE_PASSWORD}`
);

const GLOBAL_OPTIONS = {
  method: "GET",
  headers: {
    Authorization: `Basic ${encodedCredentials}`,
  },
};

export default GLOBAL_OPTIONS;
