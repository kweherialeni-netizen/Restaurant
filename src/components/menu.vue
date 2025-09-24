<script setup>

const menu= {
    0:{
        name:'well done steak',
        image:"/images/menu/alex-munsell-Yr4n8O_3UPc-unsplash.jpg",
        price:670,
        description:'proper well cooked and seasoned steak',
        category:'main meal'

    },
1:{ 
    name:'beef burger',
    image:"/images/menu/alexander-sinn-aDhU6A0IAbs-unsplash.jpg",
    price:410,
    description:'beef burger with salad',
    category:'main meal'
},
2:{
    name:'grilled mutton with fries',
    image:"/images/menu/andres-rodriguez-mKP2bl0R0pk-unsplash.jpg",
    price:500,
    description:'goat meat ',
    category:'main meal'

},
3:{
    name:'zukini cocktail',
    image:"/images/menu/katherine-sousa-ln2R1wJ8TCM-unsplash.jpg",
    price:250,
    description:'mixture of apple and passion',
    category:'drink'

},
4:{
    name:'friut salad',
    image:"/images/menu/stefan-johnson-xIFbDeGcy44-unsplash.jpg",
    price:420,
    description:'mixture of banana,mango and apple',
    category:'main meal'
}
}
</script>

<template>
    <h1>Menu</h1>

<v-container>
    <v-row>
        <v-col md="3" v-for="item in menu" :key="item">
            <v-card color="pink-lighten-1">
                <v-img :src="item.image"height="300" ></v-img>
                <v-row>
                    <v-col md="6">
                        <v-card-title>{{ item.name }}</v-card-title>
                        </v-col>
                        <v-col md="6">
                            <v-chip>{{item.category }}</v-chip>
                        </v-col>
                        </v-row>
                        <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                        <v-card-actions>
                            <v-card-title>{{item.price }}</v-card-title>
                            <v-btn>order</v-btn>
                        </v-card-actions>
                        </v-card>


        </v-col>
    </v-row>
</v-container>
</template>