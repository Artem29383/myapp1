import {useSelector} from "react-redux";

const useHookSelector = (func, params = {}) => useSelector(state => func(state, params));
export default useHookSelector;