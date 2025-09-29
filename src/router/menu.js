import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',  {
    state: () => {
        const menu = {
    
    0:{
        name:'well done steak',
        image:"/images/menu/alex-munsell-Yr4n8O_3UPc-unsplash.jpg",
        price:670,
        description:'proper well cooked and seasoned steak',
        longDescription:'Our Well-Done Steak is a hearty classic prepared with care for those who enjoy a rich, fully cooked cut. Seasoned with a balanced blend of spices and seared to perfection, the steak is cooked all the way through while keeping its tenderness and flavor intact. Each bite delivers a satisfying depth of taste, making it the perfect choice for a wholesome main meal. Served hot and ready, it’s a dish that pairs beautifully with your favorite sides.',
        category:'main meal'

    },
   1:{ 
    name:'beef burger',
    image:"/images/menu/alexander-sinn-aDhU6A0IAbs-unsplash.jpg",
    price:410,
    description:'beef burger with salad',
    longDescription:'Our Beef Burger is a juicy, flame-grilled patty stacked with fresh lettuce, ripe tomatoes, onions, and melted cheese, all tucked into a soft, toasted bun. Every bite combines savory flavor with a satisfying crunch, making it a perfect choice for a filling, classic meal.',
    category:'main meal'
},

    2:{
    name:'grilled mutton with fries',
    image:"/images/menu/andres-rodriguez-mKP2bl0R0pk-unsplash.jpg",
    price:500,
    description:'goat meat ',
    longDescription:'Enjoy our Grilled Mutton with Fries, a tender cut marinated with aromatic spices and flame-grilled for a smoky finish. Served alongside golden, crispy fries, this hearty plate delivers bold flavors and a satisfying balance of protein and crunch.',
    category:'main meal'

},
    3:{
    name:'zukini cocktail',
    image:"/images/menu/katherine-sousa-ln2R1wJ8TCM-unsplash.jpg",
    price:250,
    description:'mixture of apple and passion',
    longDescription:'Refresh yourself with our Zucchini Cocktail, a unique blend of fresh zucchini, citrus, and subtle herbs shaken into a crisp, light drink. Smooth, revitalizing, and packed with natural goodness, it’s the perfect refreshment to complement your meal.',
    category:'drink'

},
    4:{
    name:'friut salad',
    image:"/images/menu/stefan-johnson-xIFbDeGcy44-unsplash.jpg",
    price:420,
    description:'mixture of banana,mango and apple',
    longDescription:'Our Fruit Salad is a colorful mix of fresh, seasonal fruits served chilled for a naturally sweet and refreshing treat. Light yet nourishing, it’s a perfect balance of flavors and textures — ideal as a starter, side, or dessert.',
    category:'main meal'
},
    }
        const selectedMenuItem = ref(null)

        return { menu, selectedMenuItem }
    },
    actions:{
         updateSelectedMenuItem (menuItem) {
           this.selectedMenuItem = menuItem
       }
    }
})