import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { addGoat, fetchGoats, hasFetched } from '../actions';


const Goatify = (props) => {

    const { fetchGoats, addGoat, goatList, hasFetched, imageURL } = props

    useEffect(() => {
        !hasFetched && fetchGoats();
        
    }, [hasFetched])

    function getRandom(min, max) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(num)
        return num;
    };

    const loadGoat = (e) => {
        e.preventDefault();
        const goatPic = goatList[0][getRandom(0, 9)].urls.small;
        console.log(goatPic)
        return addGoat(goatPic);
    }
   
    return (
        <div>
            <button onClick={loadGoat}>GOATIFY</button>
        </div>
    )
    
}

const mapStateToProps = state => {
    return { 
        displayedGoats: state.displayedGoats,
        goatList: state.goatList,
        hasFetched: state.hasFetched,
        imageURL: state.imageURL
    };
}

export default connect(mapStateToProps, { fetchGoats, addGoat })(Goatify);