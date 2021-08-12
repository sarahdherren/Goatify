import React from 'react';
import { connect } from 'react-redux';

const Goats = (props) => {

    const { displayedGoats } = props;

    

    return (
        <div className="goat">
            <div className="goatQuotes">
                {displayedGoats.map(goat => (
                    <p>{goat.quote}</p>
                ))}
            </div>
            <div className="goatImages">
                {displayedGoats.map(goat => (
                    <>
                        <img src={goat.url} 
                            style={{
                                borderRadius: '50%',
                                position: 'absolute',
                                left: `${goat.left}vw`,
                                top: `${goat.top}vh`,
                                maxWidth: '20%',
                                height: 'auto'
                            }}
                            alt='goat' />
                    </>   
                ))}
            </div>
            
        </div>
    )
};

const mapStateToProps = state => {
    return {
        displayedGoats: state.displayedGoats,
    }
}

export default connect(mapStateToProps, { })(Goats);
