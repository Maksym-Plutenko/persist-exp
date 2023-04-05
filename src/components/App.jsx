import { useSelector, useDispatch } from "react-redux";

import {getClick} from "../redux/selectors";
import {addClick} from "../redux/rootSlice";



export const App = () => {
  const clicks = useSelector(getClick);
  const dispatch = useDispatch();

  const clickHandler = event => {
    dispatch(addClick());
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <button onClick={clickHandler}>Clicks: {clicks}</button>
    </div>
  );
};
