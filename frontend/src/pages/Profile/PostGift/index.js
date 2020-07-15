import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react';
import Nav from '../../../components/NavBar';
import MyAccountSidebar from '../../../components/MyAccountSidebar';
import api from '../../../api';
import './styles.css';

import CKEditor from '@ckeditor/ckeditor5-react';

// NOTE: We use editor from source (not a build)!
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';


export default function PostGift({routeName}) {
    const editorConfiguration = {
        plugins: [ Essentials, Bold, Italic, Paragraph ],
        toolbar: [ 'bold', 'italic' ]
    };

    return (
    <div>
        <Nav routeName={routeName}></Nav>
        

        <div className="containerProfile">

            <MyAccountSidebar pageName="PostGift"/>

            <div className="boxPostGift">
                <CKEditor
                    editor={ ClassicEditor }
                    config={ editorConfiguration }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ editor => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ editor => {
                        console.log( 'Focus.', editor );
                    } }
                />
                    
                
            </div>
        </div>

    </div>
    );
}



if (document.getElementById('PostGift')) {
    ReactDOM.render(<PostGift />, document.getElementById('PostGift'));
}
