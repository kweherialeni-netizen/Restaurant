<script setup>

</script>

<template>
    <!--carousel  -->
<v-container>
    <v-row>
<v-carousel>
<v-carousel-item src="/images/lily-banse--YHSwy6uqvk-unsplash.jpg"></v-carousel-item>
<v-carousel-item src="/images/stefan-johnson-xIFbDeGcy44-unsplash.jpg"></v-carousel-item>
<v-carousel-item src="/images/mike-dorner-sf_1ZDA1YFw-unsplash.jpg"></v-carousel-item>
<v-carousel-item src="/images/thought-catalog-9aOswReDKPo-unsplash.jpg"></v-carousel-item>
</v-carousel>
    </v-row>
</v-container>

<!-- about -->
<v-container>
    <v-row>
        <v-card>
            <p class="text-h4"> <b>Welcome to Pika Meals</b></p>
            <p class="text-h6"> We Cook, You Eat 
Our philosophy is simple: we cook, you eat. Forget the grocery store lines, the endless chopping, and the messy kitchen. We deliver delicious, chef-prepared meals right to your door. All you have to do is heat them up and enjoy.</p>
        </v-card>
    </v-row>
</v-container>

<!-- news -->
<v-container>
    <v-row>
        <v-col md= "4">
        <v-card color="pink-lighten-1">
            <v-card-title>Our story</v-card-title>
            <v-img src="/images/steve-johnson-N-MqWXXZvNY-unsplash.jpg"
                class="align-end text-white"
                height="200"
                cover>
            </v-img>
        <v-card-subtitle>learn the roots</v-card-subtitle>
        <v-card-actions>
<v-btn> Read More</v-btn>
        </v-card-actions>
            </v-card>
        </v-col>

 <v-col md= "4">
        <v-card color="pink-lighten-1">
             <v-card-title>Holiday Eats </v-card-title>
            <v-img src="/images/mike-dorner-J5UkR-L-HB0-unsplash.jpg"
                class="align-end text-white"
                height="200"
                cover>
        
       
            </v-img>
        <v-card-subtitle>All you can eat</v-card-subtitle>
        <v-card-actions>
<v-btn> Read more</v-btn>
        </v-card-actions>
            </v-card>
        </v-col>
        
         <v-col md= "4">
        <v-card color="pink-lighten-1">
            <v-card-title>Pika meals loyalty programme</v-card-title>
            <v-img src="/images/mike-dorner-wWEpM0QNK5E-unsplash.jpg"
                class="align-end text-white"
                height="200"
                cover>
        
        
            </v-img>
        <v-card-subtitle></v-card-subtitle>
        <v-card-actions>
<v-btn> get offers based on loyalty</v-btn>
        </v-card-actions>
            </v-card>
        </v-col>

    </v-row>
</v-container>

<!-- footer -->
<v-container>
    <v-row>
        <v-footer class="text-center d-flex flex-column ga-2 py-4" color="pink-lighten-1">
                <div class="d-flex ga-3">
                <v-btn icon="'mdi-facebook'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-twitter'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-linkepurple-lighten-1din'" density="comfortable" variant="text" ></v-btn>
                <v-btn icon="'mdi-instagram'" density="comfortable" variant="text" ></v-btn>
                </div>

                <v-divider class="my-2" thickness="2" width="50"></v-divider>

                <div class="text-caption font-weight-regular opacity-60">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </div>

                <v-divider></v-divider>

                <div>
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>
    </v-row>
</v-container>
</template>