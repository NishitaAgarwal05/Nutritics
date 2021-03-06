import axios from "axios";

//action to get all payments

export const getAllPaymentsAction = () => async (dispatch) => {
    const response = await axios.get("/api/v1/payment");
    console.log(response.data);
    dispatch({
        type: "GET_PAYMENTS",
        payload : response.data,
    });
};