export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'https://res.cloudinary.com/didvelu56/image/upload/v1712504853/wv1dfskmv0dgrwalqrtp.webp',
                thumbnailImageSrc: 'https://res.cloudinary.com/didvelu56/image/upload/v1712504853/wv1dfskmv0dgrwalqrtp.webp',
                alt: 'agriculture',
                title: 'AGRICULTURE'
            },
            {
                itemImageSrc: 'https://res.cloudinary.com/didvelu56/image/upload/v1712504820/edo3d1cb6pzrvfwwpgug.webp',
                thumbnailImageSrc: 'https://res.cloudinary.com/didvelu56/image/upload/v1712504820/edo3d1cb6pzrvfwwpgug.webp',
                alt: 'WATER MANAGEMENT',
                title: 'WATER MANAGEMENT'
            },
            {
                itemImageSrc: 'https://res.cloudinary.com/didvelu56/image/upload/v1712504843/fr6i8ttgkt82ti1toq4a.webp',
                thumbnailImageSrc: 'https://res.cloudinary.com/didvelu56/image/upload/v1712504843/fr6i8ttgkt82ti1toq4a.webp',
                alt: 'ENERGY TRANSITION',
                title: 'ENERGY TRANSITION'
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};