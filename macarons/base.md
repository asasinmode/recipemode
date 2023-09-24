<script setup lang="ts">
import { ref } from 'vue';

import WeightInput from '../components/WeightInput.vue';

const rawWhitesWeight = ref(0);
const parsedWhitesWeight = ref(0);

function updateWhitesWeight(){
  parsedWhitesWeight.value = rawWhitesWeight.value;
}
</script>

# macarons

I recommend making the macarons based on the amount of egg whites you have. Enter how many grams of egg whites you have below and the other ingredients will be adjusted accordingly.

3 egg whites is a good start for one batch.

## total ingredients

- <WeightInput id="macaronsWhitesWeight" v-model="rawWhitesWeight" @focusout="updateWhitesWeight" /> g whites

## ingredients by use case & order

- {{ parsedWhitesWeight }}g egg whites

### 145°C 12 min + flip and 5 min more if using silicone mat.

## how to

1. 

## sources

My own recipe.
