import people from "../data/people.json";

type Person = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar_url: string;
  company: string;
  job_title: string;
  ip_address: string;
};

const search = (query: string): Person[] => people;

export default search;
