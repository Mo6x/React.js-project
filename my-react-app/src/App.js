import { useState } from "react";
import Header from "./Components/Header";
import feedBackItem from "./Components/feedBackItem";
import Header from "./Components/Header";
import FeedbackList from './Components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import Card from './Components/shared/Card';



function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
   return (
       <>
           <Header text="Hello World"/>
           <div className="container">
               <h1>My App</h1>
               <feedBackItem/>
        </div>
       </>     
    )
}

export default App;