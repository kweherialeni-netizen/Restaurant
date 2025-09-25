<script setup>
const menuItem = {
    
        name:'well done steak',
        image:"/images/menu/alex-munsell-Yr4n8O_3UPc-unsplash.jpg",
        price:670,
        description:'proper well cooked and seasoned steak',
        category:'main meal'

    }
</script>

<template>
<v-container fluid class="d-flex fill-height" align=" center" >
    <v-row>
        <v-col md="6">
            <v-card  class="pa-6 rounded-lg" justify="center">
<v-img src :="menu.Item" cover height="500"> </v-img>
            </v-card> >

        </v-col>
<v-col md="6">
            <v-card  class="pa-6 rounded-lg" justify="center">
                <v-card-title>{{ menuItem.name }}</v-card-title>
                <v-card-subtitle>{{ menuItem.price }}</v-card-subtitle>
                <v-card-text>{{ menuItem.description }}</v-card-text>
                <v-card-text> Quantity <v-text-field></v-text-field></v-card-text>
                <v-card-actions>
                    <v-btn color="pink-lighten-1">Order</v-btn>
                </v-card-actions>
            </v-card> >

        </v-col>

    </v-row>

</v-container>
</template>