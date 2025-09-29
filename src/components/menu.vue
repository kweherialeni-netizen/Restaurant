<script setup>

import { useMenuStore } from '../router/menu';
import { useRouter } from 'vue-router';

const router = useRouter()
const menuStore = useMenuStore()
const menu = menuStore.menu

function view(menu){
    menuStore.updateSelectedMenuItem(menu) //keep track of the selected menu item
    router.push('/menuItem')
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
                            <v-btn @click="view(item)">View</v-btn>
                            <v-btn>order</v-btn>
                        </v-card-actions>
                        </v-card>


        </v-col>
    </v-row>
</v-container>
</template>