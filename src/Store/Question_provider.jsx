import React, { useReducer, useContext, useEffect } from "react";
import Question_context from "./Question_context";


let defaultCartState = { cartItems: [], quantity: 0 };