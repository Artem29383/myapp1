import {useSelector} from "react-redux";

const useSelectors = (func, params = {}) => useSelector(state => func(state, params));
export default useSelectors;