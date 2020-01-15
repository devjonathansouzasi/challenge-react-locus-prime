import { toast } from "react-toastify";

const showAlert = (message, type) => toast(message, { type });

export { showAlert };
