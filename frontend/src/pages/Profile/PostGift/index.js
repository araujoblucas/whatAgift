import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import Nav from '../../../components/NavBar';
import MyAccountSidebar from '../../../components/MyAccountSidebar';
import {useHistory} from 'react-router-dom';
import api from '../../../api';
import './styles.css';

import { Editor } from "@tinymce/tinymce-react";

export default function PostGift({routeName}) {

    const history = useHistory();
    const [name, setName] = useState('');
    const [description, setDesc] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState('');
    const [cost, setCost] = useState('');
    const email = localStorage.getItem('userEmail');
    const user_id = localStorage.getItem('userId');
    
    function setDataDesc (content, editor) {
        setDesc(content);
    }
  
    async function handlePostStore(e) {
        e.preventDefault();
        const data = {
            email,
            user_id,
            name,
            description,
            cost,
            image,
            tags
        };
        console.log(data);
        try {
            const response = await api.post('/api/gift/', data);
            alert(`${response.data}`);
            if(response.status < 300) {
                history.push('/profile/MyGifts');
            }

        } catch (err) {
            alert("Erro ao postar, tente novamente!");
        }        
    }
 



    return (
    <div>
        <Nav routeName={routeName}></Nav>
        

        <div className="containerPostGift">

            <MyAccountSidebar pageName="PostGift"/>
            <form className="boxPostGift" onSubmit={handlePostStore}>
                <h1>Postar um Presente</h1>
                <div className="boxInputsGiftForm" >
                    <input 
                        placeholder="Título"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    <input 
                        placeholder="Imagem"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                      />
                    <input 
                        placeholder="Tags"
                        value={tags}
                        onChange={e => setTags(e.target.value)}
                    />
                    <input 
                        placeholder="Cost"
                        value={cost}
                        onChange={e => setCost(e.target.value)}
                    />
                </div>

                

                <Editor
                    apiKey="o8gkw4f5yk1bdwcxuol1xw6td2px2b9d4p13ba25h4yykwlw"
                    plugins="wordcount"
                    init={{                    
                        width: '60vw',
                        height: '80vh',
                        menubar: false,                 
                        plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help '
                        ],
                        toolbar:
                        'undo redo | formatselect | bold italic backcolor | image | table | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help'
                    }}                
                    value={description}
                    onEditorChange={setDataDesc}
                />

                <button type="submit">CRIAR</button>
            </form>
        </div>

    </div>
    );
}



if (document.getElementById('PostGift')) {
    ReactDOM.render(<PostGift />, document.getElementById('PostGift'));
}
