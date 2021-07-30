import React from 'react';
import { connect } from 'react-redux';

const Goats = (props) => {

    const { displayedGoats } = props;

    

    return (
        <div className="goat">
            {displayedGoats.map(goat => (
                <>
                    <p>{goat.quote}</p>
                    <img src={goat.url} 
                        style={{
                            borderRadius: '50%',
                            position: 'absolute',
                            left: `${goat.left}vw`,
                            top: `${goat.top}vh`,
                            maxWidth: '10%',
                            height: 'auto'
                        }}
                        alt='goat' />
                    
                </>   
            ))}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        displayedGoats: state.displayedGoats,
    }
}

export default connect(mapStateToProps, { })(Goats);
