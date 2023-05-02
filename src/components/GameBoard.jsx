import { useState } from 'react';
import { counties } from '../assets/counties';
import { Button } from 'reactstrap';

const GameBoard = () => {
    const [currentCounty, setCurrentCounty] = useState(null);
    const [currentStreak, setCurrentStreak] = useState(0);

//Add 'handleClick' function for user selection

//Add 'handleNextCounty' function for 'next' button

    return (
        <div>
            <h5>Current Streak: {currentStreak}</h5>
            <img src={counties[0].img} width='400px' />
            <div className='buttonDiv'>
                <Button className='optionButton'>
                    Asotin
                </Button>
                <Button className='optionButton'>
                    Benton
                </Button>
                <Button className='optionButton'>
                    Snohomish
                </Button>
                <Button className='optionButton'>
                    King
                </Button>
            </div>
        </div>
    )
}

export default GameBoard