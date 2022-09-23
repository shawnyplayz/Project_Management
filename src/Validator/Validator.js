import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

/**
 @description Declaring all the global variables
*/
let focuses = [];
let Message = [];
let msg = ""
let validation = 0;
/**
 @description Adds a ref and an error message to the array
*/
export const add = (control, errMsg) => {
  if (control.current.value === "" || control.current.value === null) {
    focuses.push(control)
    validation = validation + 1;
    Message.push(errMsg);
  }
}
/**
 @description vision maps the amount of error messages to be printed..
*/
export const vision = () => {
  if (validation > 0) {
    Message.map(function (el) {
      msg = el
      return (
        toast.error(msg, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
        })
      )

    })
  }
  else {
    return true
  }
}
/**
 @description errorFoc controls the ref that needs to be focused after an error has popped from an array!
*/
export const errorFoc = () => {
  if (focuses.length !== 0) {
    let firstFocus = focuses.shift();
    focuses = [];
    Message = [];
    return firstFocus.current.focus()
  }
  else {
    return true
  }
}

