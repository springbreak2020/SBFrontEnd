import axios from "axios";
import airtableAuth from "../components/utils/airtableAuth";
import {
  GET_INCOME_START,
  GET_INCOME_SUCCESS,
  GET_INCOME_FAILURE,
  ADD_INCOME_START,
  ADD_INCOME_SUCCESS,
  ADD_INCOME_FAILURE,
  UPDATE_INCOME_START,
  UPDATE_INCOME_SUCCESS,
  UPDATE_INCOME_FAILURE,
  DELETE_INCOME_START,
  DELETE_INCOME_SUCCESS,
  DELETE_INCOME_FAILURE,
  GET_BUDGET_START,
  GET_BUDGET_SUCCESS,
  GET_BUDGET_FAILURE,
  ADD_BUDGET_START,
  ADD_BUDGET_SUCCESS,
  ADD_BUDGET_FAILURE,
  UPDATE_BUDGET_START,
  UPDATE_BUDGET_SUCCESS,
  UPDATE_BUDGET_FAILURE,
  DELETE_BUDGET_START,
  DELETE_BUDGET_SUCCESS,
  DELETE_BUDGET_FAILURE,
  GET_SAVINGS_START,
  GET_SAVINGS_SUCCESS,
  GET_SAVINGS_FAILURE,
  ADD_SAVINGS_START,
  ADD_SAVINGS_SUCCESS,
  ADD_SAVINGS_FAILURE,
  UPDATE_SAVINGS_START,
  UPDATE_SAVINGS_SUCCESS,
  UPDATE_SAVINGS_FAILURE,
  DELETE_SAVINGS_START,
  DELETE_SAVINGS_SUCCESS,
  DELETE_SAVINGS_FAILURE,
  GET_DEBT_START,
  GET_DEBT_SUCCESS,
  GET_DEBT_FAILURE,
  ADD_DEBT_START,
  ADD_DEBT_SUCCESS,
  ADD_DEBT_FAILURE,
  UPDATE_DEBT_START,
  UPDATE_DEBT_SUCCESS,
  UPDATE_DEBT_FAILURE,
  DELETE_DEBT_START,
  DELETE_DEBT_SUCCESS,
  DELETE_DEBT_FAILURE,
  GET_NOTES_START,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAILURE,
  ADD_NOTES_START,
  ADD_NOTES_SUCCESS,
  ADD_NOTES_FAILURE,
  UPDATE_NOTES_START,
  UPDATE_NOTES_SUCCESS,
  UPDATE_NOTES_FAILURE,
  DELETE_NOTES_START,
  DELETE_NOTES_SUCCESS,
  DELETE_NOTES_FAILURE,
} from "./types";

// Retrieve
export const getIncome = (user) => (dispatch) => {
  dispatch({ type: GET_INCOME_START });
  airtableAuth()
    .get(
      `https://api.airtable.com/v0/appcaKbHDurIj9YWs/Income%20%26%20Expenses/${user}`
    )
    .then((res) => {
      dispatch({
        type: GET_INCOME_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      console.log("getIncome ERR", err);
      dispatch({
        type: GET_INCOME_FAILURE,
        payload: err.message,
      });
    });
};
export const getBudget = (user) => (dispatch) => {
  dispatch({ type: GET_BUDGET_START });
  airtableAuth()
    .get(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/Budgets/${user}`)
    .then((res) => {
      dispatch({
        type: GET_BUDGET_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      console.log("getBudget ERR", err);
      dispatch({
        type: GET_BUDGET_FAILURE,
        payload: err.message,
      });
    });
};
export const getSavings = (user) => (dispatch) => {
  dispatch({ type: GET_SAVINGS_START });
  airtableAuth()
    .get(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/Savings/${user}`)
    .then((res) => {
      dispatch({
        type: GET_SAVINGS_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      console.log("getSavings ERR", err);
      dispatch({
        type: GET_SAVINGS_FAILURE,
        payload: err.message,
      });
    });
};
export const getDebt = (user) => (dispatch) => {
  dispatch({ type: GET_DEBT_START });
  airtableAuth()
    .get(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/Debt/${user}`)
    .then((res) => {
      dispatch({
        type: GET_DEBT_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      console.log("getDebt ERR", err);
      dispatch({
        type: GET_DEBT_FAILURE,
        payload: err.message,
      });
    });
};
export const getNotes = (user) => (dispatch) => {
  dispatch({ type: GET_NOTES_START });
  airtableAuth()
    .get(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/Notes/${user}`)
    .then((res) => {
      dispatch({
        type: GET_NOTES_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      console.log("getNotes ERR", err);
      dispatch({
        type: GET_NOTES_FAILURE,
        payload: err.message,
      });
    });
};

// Create
export const createIncome = (data) => (dispatch) => {
  dispatch({ type: ADD_INCOME_START });
  airtableAuth()
    .post(
      `https://api.airtable.com/v0/appcaKbHDurIj9YWs/Income%20%26%20Expenses`,
      data
    )
    .then((res) => {
      dispatch({ type: ADD_INCOME_SUCCESS });
    })
    .catch((err) => {
      console.log("createIncome ERR", err);
      dispatch({ type: ADD_INCOME_FAILURE });
    });
};

export const createBudget = (data) => (dispatch) => {
  dispatch({ type: ADD_BUDGET_START });
  airtableAuth()
    .post(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/Budgets`, data)
    .then((res) => {
      dispatch({ type: ADD_BUDGET_SUCCESS });
    })
    .catch((err) => {
      console.log("createBudget ERR", err);
      dispatch({ type: ADD_BUDGET_FAILURE });
    });
};

export const createSavings = (data) => (dispatch) => {
  dispatch({ type: ADD_SAVINGS_START });
  airtableAuth()
    .post(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/Savings`, data)
    .then((res) => {
      dispatch({ type: ADD_SAVINGS_SUCCESS });
    })
    .catch((err) => {
      console.log("createSavings ERR", err);
      dispatch({ type: ADD_SAVINGS_FAILURE });
    });
};

export const createDebt = (data) => (dispatch) => {
  dispatch({ type: ADD_DEBT_START });
  airtableAuth()
    .post(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/Debt`, data)
    .then((res) => {
      dispatch({ type: ADD_DEBT_SUCCESS });
    })
    .catch((err) => {
      console.log("createDebt ERR", err);
      dispatch({ type: ADD_DEBT_FAILURE });
    });
};

export const createNotes = (data) => (dispatch) => {
  dispatch({ type: ADD_NOTES_START });
  airtableAuth()
    .post(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/Notes`, data)
    .then((res) => {
      dispatch({ type: ADD_NOTES_SUCCESS });
    })
    .catch((err) => {
      console.log("createNotes ERR", err);
      dispatch({ type: ADD_NOTES_FAILURE });
    });
};

// Update
export const updateIncome = (data) => (dispatch) => {
  dispatch({ type: UPDATE_INCOME_START });
  airtableAuth()
    .put(
      `https://api.airtable.com/v0/appcaKbHDurIj9YWs/Income%20%26%20Expenses`,
      data
    )
    .then((res) => {
      dispatch({ type: UPDATE_INCOME_SUCCESS });
    })
    .catch((err) => {
      console.log("updateIncome ERR", err);
      dispatch({ type: UPDATE_INCOME_FAILURE });
    });
};

export const updateBudget = (data) => (dispatch) => {
  dispatch({ type: UPDATE_BUDGET_START });
  airtableAuth()
    .put(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/Budgets`, data)
    .then((res) => {
      dispatch({ type: UPDATE_BUDGET_SUCCESS });
    })
    .catch((err) => {
      console.log("updateBudget ERR", err);
      dispatch({ type: UPDATE_BUDGET_FAILURE });
    });
};

export const updateSavings = (data) => (dispatch) => {
  dispatch({ type: UPDATE_SAVINGS_START });
  airtableAuth()
    .put(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/Savings`, data)
    .then((res) => {
      dispatch({ type: UPDATE_SAVINGS_SUCCESS });
    })
    .catch((err) => {
      console.log("updateSavings ERR", err);
      dispatch({ type: UPDATE_SAVINGS_FAILURE });
    });
};

export const updateDebt = (data) => (dispatch) => {
  dispatch({ type: UPDATE_DEBT_START });
  airtableAuth()
    .put(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/Debt`, data)
    .then((res) => {
      dispatch({ type: UPDATE_DEBT_SUCCESS });
    })
    .catch((err) => {
      console.log("updateDebt ERR", err);
      dispatch({ type: UPDATE_DEBT_FAILURE });
    });
};

export const updateNotes = (data) => (dispatch) => {
  dispatch({ type: UPDATE_NOTES_START });
  airtableAuth()
    .put(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/Notes`, data)
    .then((res) => {
      dispatch({ type: UPDATE_NOTES_SUCCESS });
    })
    .catch((err) => {
      console.log("updateNotes ERR", err);
      dispatch({ type: UPDATE_NOTES_FAILURE });
    });
};
