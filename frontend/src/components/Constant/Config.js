export const backend_url = process.env.REACT_APP_BACKEND_URL;
export const image_url = `${process.env.REACT_APP_BACKEND_URL}Backend/images/`;

export const election_status = [
  { key: 0, value: "created", color: "cyan" },
  { key: 1, value: "broken", color: "red" },
  { key: 2, value: "approved", color: "orange" },
  { key: 3, value: "waiting...", color: "purple" },
  { key: 4, value: "processing...", color: "blue" },
  { key: 5, value: "done", color: "green" },
];
