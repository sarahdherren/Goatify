import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { addGoat, fetchGoats, displayNew } from '../actions';

const Goatify = (props) => {

    const { fetchGoats, addGoat, displayNew, goatList, hasFetched, 
        imageURL, goatQuotes } = props
    
    useEffect(() => {
        
      !hasFetched && fetchGoats();
        
    }, [hasFetched, fetchGoats])

    useEffect(() => {
        imageURL !== "" && createGoat(imageURL)
    }, [imageURL])

    function getRandom(min, max) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(num)
        return num;
    };

    const loadGoat = (e) => {
        e.preventDefault();
        const goatPic = goatList[0][getRandom(0, 19)].urls.small;
        console.log(goatPic)
        return addGoat(goatPic);
    };
//move createGoat into a action creator & disable button until hasFetched is true!!
    const createGoat = (imageURL) => {
        const newGoat = {
            url: imageURL,
            left: getRandom(0, 70),
            top: getRandom(0, 70),
            quote: addQuote()
        }
        console.log(newGoat);
        return displayNew(newGoat);
    };

    const addQuote = () => {
       return goatQuotes[getRandom(0, 8)]
    }
   
    return (
        <div className='goatify'>
            <h1>Got Goats?</h1>
            <button onClick={loadGoat}>GOATIFY</button>
        </div>
    )
    
}

const mapStateToProps = state => {
    return { 
        displayedGoats: state.displayedGoats,
        goatList: state.goatList,
        hasFetched: state.hasFetched,
        imageURL: state.imageURL,
        goatQuotes: state.goatQuotes
    };
}

const mapActionsToProps = { 
        fetchGoats: fetchGoats, 
        addGoat: addGoat, 
        displayNew: displayNew, 
    }


export default connect(mapStateToProps, mapActionsToProps)(Goatify);