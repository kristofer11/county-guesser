import { useState } from 'react';
import { counties } from '../assets/counties';
import { Button } from 'reactstrap';
import { useEffect } from 'react';

const GameBoard = () => {
    const [currentCounty, setCurrentCounty] = useState(null);
    const [buttonNames, setButtonNames] = useState([]);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [countyNameDisplay, setCountyNameDisplay] = useState('none');

    useEffect(() => {
        const getRandomCounty = () => {
            const randomIndex = Math.floor(Math.random() * counties.length);
            const randomCountry = counties[randomIndex];
            setCurrentCounty(randomCountry);

            const names = [randomCountry.name]
            while (names.length < 4) {
                const randomName = counties[Math.floor(Math.random() * counties.length)].name;
                if (!names.includes(randomName)) {
                    names.push(randomName);
                }
            }
            console.log(names)

            const shuffledNames = names.sort(() => Math.random() - 0.5);
            setButtonNames(shuffledNames);
            console.log(buttonNames)
        };

        getRandomCounty();

    }, []);


    //Add 'handleClick' function for user selection
    const handleButtonClick = (e, currentCounty) => {
        const countyDisplay = document.getElementById('countyDisplay');
        const buttons = document.querySelectorAll('.optionButton')

        if (e.target.textContent == currentCounty.name) {
            countyDisplay.textContent = `That is correct, it's ${currentCounty.name}`;
            countyDisplay.style.color = 'green';
            setCurrentStreak(currentStreak + 1);
        } else {
            countyDisplay.textContent = `Nope sorry! That one is ${currentCounty.name}`;
            setCurrentStreak(0);
            countyDisplay.style.color = 'red';
        }

        buttons.forEach((button) => button.disabled = true);

        setTimeout(() => {
            countyDisplay.textContent = 'Next county...';
            countyDisplay.style.color = 'black';
            buttons.forEach((button) => button.disabled = false)
            const randomIndex = Math.floor(Math.random() * counties.length);
            const randomCountry = counties[randomIndex];
            setCurrentCounty(randomCountry);
//This is all duplicate code from above. Make this cleaner
            const names = [randomCountry.name]
            while (names.length < 4) {
                const randomName = counties[Math.floor(Math.random() * counties.length)].name;
                if (!names.includes(randomName)) {
                    names.push(randomName);
                }
            }
            console.log(names)

            const shuffledNames = names.sort(() => Math.random() - 0.5);
            setButtonNames(shuffledNames);
            console.log(buttonNames)
        }
            , 1000)
    }

    //Add 'handleNextCounty' function for 'next' button

    return (
        <div className='gamePanel'>
            {currentCounty ? (
                <>
                    <h5>Current Streak: {currentStreak}</h5>
                    <img src={currentCounty.img} width='400px' />
                    <div className='buttonDiv'>
                        <Button 
                            className='optionButton'
                            onClick = {(e) => handleButtonClick(e, currentCounty)}
                        >
                            {buttonNames[0]}
                        </Button>
                        <Button 
                            className='optionButton'
                            onClick = {(e) => handleButtonClick(e, currentCounty)}
                        >
                            {buttonNames[1]}
                        </Button>
                        <Button 
                            className='optionButton'
                            onClick = {(e) => handleButtonClick(e, currentCounty)}
                        >
                            {buttonNames[2]}
                        </Button>
                        <Button 
                            className='optionButton'
                            onClick = {(e) => handleButtonClick(e, currentCounty)}
                        >
                            {buttonNames[3]}
                        </Button>
                    </div>
                </>
            ) : (
                <p>loading</p>
            )}

        </div>
    )
}

export default GameBoard;