import bananaImage from '../assets/banana.png';
import strawberryImage from '../assets/strawberry.png';
import watermelonImage from '../assets/watermelon.png';
import melonImage from '../assets/melon.png';
import snakeImage from '../assets/snakefruit.png';
import rambutanImage from '../assets/rambutan.png';
import manggoImage from '../assets/manggo.png';
import cauliflowerImage from '../assets/cauliflower.png';
import lettuceImage from '../assets/lettuce.png';
import carrotImage from '../assets/carrot.png';
import potatoImage from '../assets/potato.png';
import sweetpotatoImage from '../assets/sweetpotato.png';

export const tutorsSection = {
    content: `<h2>Products</h2>
              <p>the products we sell are fresh local fruits & vegetables</p>`
};
export const tutorsList = [
    {
        image: bananaImage,
        name: 'Banana',
        description: 'Type: Raja, Cavendish',
        modalText: 'Bananas are rich in potassium and fiber. They make a perfect snack!',
        modalDescription: `
        Bananas can be eaten raw or used in cooking and baking.
        Prices for Raja: 1 kg - IDR 20,000 / USD 1.40, 0.5 kg - IDR 10,000 / USD 0.70
        Prices for Cavendish: 1 kg - IDR 25,000 / USD 1.75, 0.5 kg - IDR 12,500 / USD 0.88
        `
    },
    {
        image: watermelonImage,
        name: 'Water melon',
        description: 'Type: red, yellow',
        modalText: 'Watermelons are refreshing and hydrating.',
        modalDescription: `
        Watermelons are perfect for summer picnics and drinks.
        Prices for Red: 1 kg - IDR 10,000 / USD 0.70, 0.5 kg - IDR 5,000 / USD 0.35
        Prices for Yellow: 1 kg - IDR 12,000 / USD 0.84, 0.5 kg - IDR 6,000 / USD 0.42
        `
    },
    {
        image: melonImage,
        name: 'Melon',
        description: 'Type: Cantaloupe, Honeydew',
        modalText: 'Melons are sweet and juicy.',
        modalDescription: `
        Enjoy melons in fruit salads or as a sweet snack.
        Prices for Cantaloupe: 1 kg - IDR 20,000 / USD 1.40, 0.5 kg - IDR 10,000 / USD 0.70
        Prices for Honeydew: 1 kg - IDR 18,000 / USD 1.26, 0.5 kg - IDR 9,000 / USD 0.63
        `
    },
    {
        image: snakeImage,
        name: 'Snake Fruit',
        description: 'Type: Pondoh, Condet',
        modalText: 'Snake fruits are exotic and unique.',
        modalDescription: `
        They have a sweet and tangy flavor, perfect for adventurous eaters.
        Prices for Pondoh: 1 kg - IDR 35,000 / USD 2.45, 0.5 kg - IDR 17,500 / USD 1.23
        Prices for Condet: 1 kg - IDR 30,000 / USD 2.10, 0.5 kg - IDR 15,000 / USD 1.05
        `
    },
    {
        image: rambutanImage,
        name: 'Rambutan',
        description: 'Type: Binjai, Lebak',
        modalText: 'Rambutans are sweet and juicy.',
        modalDescription: `
        Rambutans are delicious tropical fruits.
        Prices for Binjai: 1 kg - IDR 25,000 / USD 1.75, 0.5 kg - IDR 12,500 / USD 0.88
        Prices for Lebak: 1 kg - IDR 30,000 / USD 2.10, 0.5 kg - IDR 15,000 / USD 1.05
        `
    },
    {
        image: manggoImage,
        name: 'Manggo',
        description: 'Type: Harum Manis, Gedong',
        modalText: 'Mangos are sweet and tangy.',
        modalDescription: `
        Mangos are perfect for fresh eating or in desserts.
        Prices for Harum Manis: 1 kg - IDR 30,000 / USD 2.10, 0.5 kg - IDR 15,000 / USD 1.05
        Prices for Gedong: 1 kg - IDR 35,000 / USD 2.45, 0.5 kg - IDR 17,500 / USD 1.23
        `
    },
    {
        image: strawberryImage,
        name: 'Strawberry',
        description: 'Type: California, Festival',
        modalText: 'Strawberries are vibrant and delicious.',
        modalDescription: `
        Enjoy them fresh or in desserts and smoothies.
        Prices for California: 1 kg - IDR 70,000 / USD 4.90, 0.5 kg - IDR 35,000 / USD 2.45
        Prices for Festival: 1 kg - IDR 65,000 / USD 4.55, 0.5 kg - IDR 32,500 / USD 2.28
        `
    },
    {
        image: carrotImage,
        name: 'Carrot',
        description: 'Type: Nantes, Mini',
        modalText: 'Carrots are crunchy and nutritious.',
        modalDescription: `
        Great for snacking or adding to salads and soups.
        Prices for Nantes: 1 kg - IDR 12,000 / USD 0.84, 0.5 kg - IDR 6,000 / USD 0.42
        Prices for Mini: 1 kg - IDR 15,000 / USD 1.05, 0.5 kg - IDR 7,500 / USD 0.53
        `
    },
    {
        image: potatoImage,
        name: 'Potato',
        description: 'Type: Yellow, Common',
        modalText: 'Potatoes are versatile and filling.',
        modalDescription: `
        Use them in a variety of dishes, from fries to casseroles.
        Prices for Yellow: 1 kg - IDR 20,000 / USD 1.40, 0.5 kg - IDR 10,000 / USD 0.70
        Prices for Common: 1 kg - IDR 18,000 / USD 1.26, 0.5 kg - IDR 9,000 / USD 0.63
        `
    },
    {
        image: cauliflowerImage,
        name: 'Cauliflower',
        description: 'Type: White, Romanesco',
        modalText: 'Cauliflowers are healthy and low in calories.',
        modalDescription: `
        Perfect for roasting or making cauliflower rice.
        Prices for White: 1 kg - IDR 25,000 / USD 1.75, 0.5 kg - IDR 12,500 / USD 0.88
        Prices for Romanesco: 1 kg - IDR 30,000 / USD 2.10, 0.5 kg - IDR 15,000 / USD 1.05
        `
    },
    {
        image: lettuceImage,
        name: 'Lettuce',
        description: 'Type: Butterhead, Romaine',
        modalText: 'Lettuce is fresh and crisp.',
        modalDescription: `
        Ideal for salads and sandwiches.
        Prices for Butterhead: 1 kg - IDR 18,000 / USD 1.26, 0.5 kg - IDR 9,000 / USD 0.63
        Prices for Romaine: 1 kg - IDR 20,000 / USD 1.40, 0.5 kg - IDR 10,000 / USD 0.70
        `
    },
    {
        image: sweetpotatoImage,
        name: 'Sweet Potato',
        description: 'Type: Japanese, Garnet',
        modalText: 'Sweet potatoes are sweet and nutritious.',
        modalDescription: `
        Enjoy them roasted, mashed, or in pies.
        Prices for Japanese: 1 kg - IDR 22,000 / USD 1.54, 0.5 kg - IDR 11,000 / USD 0.77
        Prices for Garnet: 1 kg - IDR 24,000 / USD 1.68, 0.5 kg - IDR 12,000 / USD 0.84
        `
    }
];
