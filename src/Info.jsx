// Filename - Info.js

// Importing the css for the info
import './css/info.css';

const Info = () => {
   return (
      <div className='info'>
         <div className='player'>
            Player 1: <span>X</span>
         </div>
         <div className='player'>
            Player 2: <span>O</span>
         </div>
      </div>
   );
};

export default Info;
