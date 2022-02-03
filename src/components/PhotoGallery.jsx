import React from 'react';
import '.././assets/css/photoGallery.css'
import g01 from '.././assets/image/g01.jpg'
import g02 from '.././assets/image/g02.jpg'
import g03 from '.././assets/image/g03.jpg'
import g04 from '.././assets/image/g04.jpg'
import g05 from '.././assets/image/g05.jpg'
import g06 from '.././assets/image/g06.jpg'
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';


const PhotoGallery = () => {

        // Add your images here...
        const items = [
                { // Image item:
                        itemId: 'sample-id',
                        mediaUrl: g01,
                        metaData: {
                                type: 'image',
                                height: 200,
                                width: 100,
                                title: 'sample-title',
                                description: 'sample-description',
                                focalPoint: [0, 0],
                                link: {
                                        url: 'http://example.com',
                                        target: '_blank'
                                },
                        }
                },
                { // Another Image item:
                        itemId: 'differentItem',
                        mediaUrl: g02,
                        metaData: {
                                type: 'image',
                                height: 200,
                                width: 100,
                                title: 'sample-title',
                                description: 'sample-description',
                                focalPoint: [0, 0],
                                link: {
                                        url: 'http://example.com',
                                        target: '_blank'
                                },
                        }
                },
                { // Another Image item:
                        itemId: 'differentItem',
                        mediaUrl: g03,
                        metaData: {
                                type: 'image',
                                height: 200,
                                width: 100,
                                title: 'sample-title',
                                description: 'sample-description',
                                focalPoint: [0, 0],
                                link: {
                                        url: 'http://example.com',
                                        target: '_blank'
                                },
                        }
                },
                { // Another Image item:
                        itemId: 'differentItem',
                        mediaUrl: g04,
                        metaData: {
                                type: 'image',
                                height: 200,
                                width: 100,
                                title: 'sample-title',
                                description: 'sample-description',
                                focalPoint: [0, 0],
                                link: {
                                        url: 'http://example.com',
                                        target: '_blank'
                                },
                        }
                },
                { // Another Image item:
                        itemId: 'differentItem',
                        mediaUrl: g05,
                        metaData: {
                                type: 'image',
                                height: 200,
                                width: 100,
                                title: 'sample-title',
                                description: 'sample-description',
                                focalPoint: [0, 0],
                                link: {
                                        url: 'http://example.com',
                                        target: '_blank'
                                },
                        }
                },
                { // Another Image item:
                        itemId: 'differentItem',
                        mediaUrl: g06,
                        metaData: {
                                type: 'image',
                                height: 200,
                                width: 100,
                                title: 'sample-title',
                                description: 'sample-description',
                                focalPoint: [0, 0],
                                link: {
                                        url: 'http://example.com',
                                        target: '_blank'
                                },
                        }
                }
        ]


        // The options of the gallery (from the playground current state)
        const options = {
                galleryLayout: 2,
                isRTL: true,
                scrollDirection: 1,
                overlayAnimation: 'SLIDE_UP',
                imageHoverAnimation: 'ZOOM_IN',
        };

        // The size of the gallery container. The images will fit themselves in it
        const container = {
                width: window.innerWidth,
                height: 350
        };

        // The eventsListener will notify you anytime something has happened in the gallery.
        const eventsListener = (eventName, eventData) => console.log({ eventName, eventData });

        // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
        const scrollingElement = window;

        return (
                <div className='container galleryBody'>
                <h4>گالری</h4>
                        <ProGallery
                                items={items}
                                options={options}
                                container={container}
                                eventsListener={eventsListener}
                                scrollingElement={scrollingElement}
                        />
                </div>

        );
}



export default PhotoGallery;