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
} from "../actions/types";

const initialState = {
  isfetching: false,
  error: null,
  income: {
    id: "",
    Category: "",
    Type: "",
    Amount: "",
    Value: "",
    Income_Value: "",
    Expense_Value: "",
    Period_Balance: "",
  },
  budget: {},
  savings: {},
  debt: {},
  notes: {},
};

export default (state = initialState, action) => {
  console.log("ACTION", action);
  switch (action.type) {
    case GET_INCOME_START:
      return {
        ...state,
        isfetching: true,
        error: "",
      };
    case GET_BUDGET_START:
      return {
        ...state,
        isfetching: true,
        error: "",
      };
    case GET_SAVINGS_START:
      return {
        ...state,
        isfetching: true,
        error: "",
      };
    case GET_DEBT_START:
      return {
        ...state,
        isfetching: true,
        error: "",
      };
    case GET_NOTES_START:
      return {
        ...state,
        isfetching: true,
        error: "",
      };
    case GET_INCOME_FAILURE:
      return {
        ...state,
        isfetching: false,
        error: action.payload,
      };
    case GET_BUDGET_FAILURE:
      return {
        ...state,
        isfetching: false,
        error: action.payload,
      };
    case GET_SAVINGS_FAILURE:
      return {
        ...state,
        isfetching: false,
        error: action.payload,
      };
    case GET_DEBT_FAILURE:
      return {
        ...state,
        isfetching: false,
        error: action.payload,
      };
    case GET_NOTES_FAILURE:
      return {
        ...state,
        isfetching: false,
        error: action.payload,
      };
    case GET_INCOME_SUCCESS:
      console.log("ACTION PAYLOAD", action.payload);
      return {
        ...state,
        isfetching: false,
        income: {
          ...state.income,
          id: action.payload.id,
          Category: action.payload.fields.Category,
          Type: action.payload.fields.Type,
          Amount: action.payload.fields.Amount,
          Value: action.payload.fields.Value,
          Income_Value: action.payload.fields["Income Value"],
          Expense_Value: action.payload.fields["Expense Value"],
          Period_Balance: action.payload.fields["Period Balance"],
        },
        error: "",
      };
    default:
      return state;
  }
};
