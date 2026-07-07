//import ListItem from './ListItem';
import './App.css';
const listData = [1,2,3,4,5]
export default function App(){
  return(
    <>
      <div className="w-full items-center flex justify-center  h-screen">
        <div>
          {listData.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
}