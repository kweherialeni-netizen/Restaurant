<script setup>
const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
</script>

<template>
  <v-app-bar color="pink-lighten-1">
    <v-app-bar-title>Pika Meals Steak House</v-app-bar-title>

    <v-btn to="/">Home</v-btn>
    <v-btn to="/menu">Menu</v-btn>
    <v-btn to="/contactus">Contact Us</v-btn>
    <v-btn to="/orders" v-if="isLoggedIn">Orders</v-btn>
    <v-btn to="/reservations">Reservations</v-btn>

    <v-avatar v-if="isLoggedIn" to="/userprofile">
      <span class="text-h5 text-white">Q</span>
    </v-avatar>

    <v-btn v-else to="/login">Log In</v-btn>
  </v-app-bar>
</template>
