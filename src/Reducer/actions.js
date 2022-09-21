import { USER, TECHNOLOGIES, PROJECTS, PERSONALPROJ } from "./actionType";

export const login = (key, value) => {
  return {
    type: USER,
    key: key,
    value: value,
  };
};
export const technologies = (key, value) => {
  return {
    type: TECHNOLOGIES,
    key: key,
    value: value,
  };
};
export const projects = (key, value) => {
  return {
    type: PROJECTS,
    key: key,
    value: value,
  };
};
export const personal = (key, value) => {
  return {
    type: PERSONALPROJ,
    key: key,
    value: value,
  };
};
