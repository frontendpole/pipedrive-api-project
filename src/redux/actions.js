export const SET_ORGANIZATIONS = "SET_ORGANIZATIONS";

export const setOrganizations = (data) => {
  return {
    type: SET_ORGANIZATIONS,
    payload: data
  }
}