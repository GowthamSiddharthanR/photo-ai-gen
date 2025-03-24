import React from 'react';
import ImageView from './ui/Image';

function ImageBox() {
    return (
        <div>
            <div className="flex gap-1 mx-2">
                <ImageView prompt='Train it' image='/ai1.jpg' />
                <ImageView prompt='Prompt it' image='/ai2.jpg' />
                <ImageView prompt='Generate it' image='/i3.webp' />
            </div>
        </div>
    );
}

export default ImageBox;