import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { getRandomfetchJoke } from '../services/axiosService';

const Axios = () => {

    const [joke, setJoke] = useState('');
    const [liked, setLiked] = useState(0);
    const [disliked, setDisliked] = useState(0);

    useEffect(() => {
        getRandomfetchJoke();
    },[]);

    // const fetchJoke = async () =>{
    //     const response = await axios.get('https://api.chucknorris.io/jokes/random')
    //     setJoke(response.data.value);
    // }

    const obtainfetchJoke = () => {
        getRandomfetchJoke()
            .then((response) => {
                setJoke(response.data.value)
            })
            .catch((error) =>{
                alert(`Something went wrong: ${error}`);
            })
    }

    const handleLike = () => {
        setLiked(liked + 1);
    };

    const handleDislike = () => {
        setDisliked(disliked + 1);
    };


    return (
        <div>
            <Box sx={{ textAlign: 'center', padding: '1rem' }}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Chuck Norris Jokes
                </Typography>

                <Typography variant="body1" gutterBottom>
                    {joke}
                </Typography>

                <Box sx={{ margin: '1rem' }}>
                    <Button variant="contained" onClick={obtainfetchJoke}>
                        Generate Joke
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Button variant="contained" color="success" onClick={handleLike}>
                        Like ({liked})
                    </Button>

                    <Button variant="contained" color="error" onClick={handleDislike}>
                        Dislike ({disliked})
                    </Button>
                </Box>
            </Box>
            
        </div>
    );
}

export default Axios;

