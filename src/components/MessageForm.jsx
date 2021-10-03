import { props } from 'bluebird';
import React, { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, pictureOulined, PicCenterOutlined } from '@ant-design/icons';
import { Events } from 'react-scroll';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { chatId, creds } = props;


    const handleSubmit = (event) => {

        event.preventDefault();

        const text = value.trim();

        if (text.length > 0) sendMessage(creds, chatId, { text });
        setValue('');
        //localStorage.clear();
    }

    const handleChange = (event) => {
        setValue(event.target.value);
        isTyping(props, chatId);
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }

    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input
                className='message-input'
                placeholder='Send a message...'
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor='upload-button'>
                <spam className='image-button'>
                    <PicCenterOutlined className='picture-button' />
                </spam>
            </label>
            <input
                type='file'
                multiple={false}
                id='upload-button'
                style={{ display: 'none' }}
                onChange={handleUpload}
            />
            <button type='submit' className='send-button'>
                <SendOutlined className='send-icon' />
            </button>
        </form>
    )
}

export default MessageForm;