import React, { useEffect, useRef, useState, Component } from 'react';
import Axios from "axios";
/*
  class componenets and browser's built in fetch to get the api results
  */
class App extends Component {
    state = {
        data: []
    };
    
    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*&limit=1";

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            });
    }

    render() {
        const { data } = this.state;

        const result = data.map((entry, index) => {
            console.log(entry);
            return <li key={index}>{entry}</li>;
        });

        return <div className="container"><ul>{result}</ul></div>;
    }
}

export default App;

/*
  functional componenets and use of axios to get the api results
  */
  
  export default function Images()
  {
	  const[images,setimages] - useState([]);
	  
	  const inputRef = useRef(null);
	  
	  const varRef = useRef(images.length);
	  
	  useEffect(()=> {
		  
		  inputRef.current.focus();
		  
		  Axios.get(
		  
		  `${process.env.REACT_APP_UNSPLASH_URL}?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
		  
		  ).then( (res)=> {
			  
			  setimages(res.data);
		  });
	  },[]);
	  
	  const [newImageUrl,setNewImageUrl] = useState("");
	  
	  
	  function handleRemove(index){
		  
		  setimages([
		  ...images.slice(0,index),
		  ...images.slice(index + 1, images.length),
		  ]);
	  }
	  
  }