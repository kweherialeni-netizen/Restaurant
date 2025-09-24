<script setup>
const isloggedin= true

</script>

<template>
<v-app-bar color="pink-lighten-1">
<v-app-bar-title>Pika Meals Steak House</v-app-bar-title>

<v-btn to="/" > Home</v-btn>
<v-btn to="/menu">Menu </v-btn>
<v-btn to="/contactus">Contact Us</v-btn>
<v-btn to="/orders" v-if="isloggedin">Orders</v-btn>
<v-btn to="/reservations">Reservations</v-btn>
<v-avatar to="/userprofile" v-if="isloggedin">
    <span class="text-h5 text-white">Q</span>
</v-avatar>
<v-btn to="/login" v-else>Log In</v-btn>

</v-app-bar>
</template>