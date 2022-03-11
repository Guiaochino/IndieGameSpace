
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './PublishForm.css'
import axios from 'axios';

export default function PublishForm() {

    const [gameName, setGameName] = useState();
    const [desc, setDesc] = useState();
    const [genre, setGenre] = useState();
    const [link, setLink] = useState();
    const [gameImg, setGameImg] = useState();
    const [sampImg, setSampImg] = useState();


    const handleGameName = async (e) => {
        await setGameName( e.target.value )
    }

    const handleDescription = async (e) => {
        await setDesc( e.target.value )
    }

    const handleGenre = async (e) => {
        await setGenre( e.target.value )
    }

    const handleLink = async (e) => {
        await setLink( e.target.value )
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setGameImg( base64 );
    };

    const handleMultiple = async (e) => {

        const arrfile = [];

        Array.from(e.target.files).forEach(async file => {
            const base64 = await convertBase64(file);
            arrfile.push(base64);
            
        });

        setSampImg(arrfile);

    };

    function handleSubmit () {
        
        let data = new FormData();
        data.append("user", sessionStorage.getItem("user"));
        data.append("game_name", gameName);
        data.append("description", desc);
        data.append("genre", genre);
        data.append("game_image", gameImg);
        data.append("samp_img", sampImg);
        data.append("link", link);

        const url = "http://localhost/IndieGameSpace/indie-game-space/src/api/publishGame.php";

        axios.post(url, data)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => console.log(err))
    }

    return (
        <>
        <div className="form-container">
            <Form>
                
                <Form.Group className='mb-3'>
                <Form.Label> Game Name </Form.Label>
                <Form.Control type='text' placeholder='Game Title' onChange={handleGameName}/>
                </Form.Group>

                
                <Form.Group className='mb-3'>
                <Form.Label> Game Description </Form.Label>
                <Form.Control as='textarea' placeholder='Short Description of Game, that can either be Informational or Eye Catching' style={ { height : '20vh' } } onChange={handleDescription}/>
                </Form.Group>

                <Form.Group className='mb-3'>
                <Form.Label> Genre </Form.Label>
                <Form.Control type='text' placeholder='Game Genre' onChange={handleGenre}/>
                </Form.Group>

                
                <Form.Group className='mb-3'>
                <Form.Label> Game Image </Form.Label>
                <Form.Control type='file' onChange={ uploadImage } />
                </Form.Group>

                
                <Form.Group className='mb-3'>
                <Form.Label> Sample Images </Form.Label>
                <Form.Control type='file' multiple onChange={ handleMultiple } />
                <Form.Text> You can select a maximum of 6 images </Form.Text>
                </Form.Group>

                
                <Form.Group className='mb-3'>
                <Form.Label> Trailer Link </Form.Label>
                <Form.Control type='text' placeholder='Link here...'onChange={handleLink} />
                <Form.Text> Strictly Youtube Video Link Only </Form.Text>
                </Form.Group>

                <Button variant='success' onClick={ handleSubmit }> Publish </Button>

            </Form>
        </div>
        
        </>
    )
}
