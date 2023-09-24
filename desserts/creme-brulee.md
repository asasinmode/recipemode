<script setup lang="ts">
import { ref } from 'vue';

import WeightInput from '../components/WeightInput.vue';

const rawYolksNumber = ref(3);
const parsedYolksNumber = ref(3);

function updateParsedWeight() {
  parsedYolksNumber.value = rawYolksNumber.value;
}
</script>

# creme brulee

I make it whenever I have leftover yolks from [macarons](/macarons/base).

## total ingredients

- <WeightInput id="yolksNumber" v-model="rawYolksNumber" @focusout="updateParsedWeight" label="yolks" no-g />
- {{ Math.round(yolksNumber * 80) }}ml 30% cream
- {{ Math.round(yolksNumber * 12.5) }}g sugar
- vanilla
- salt

## ingredients by use case & order

- {{ yolksNumber }} yolks
- {{ Math.round(yolksNumber * 80) }}ml 30% cream
- {{ Math.round(yolksNumber * 12.5) }}g sugar
- vanilla
- salt

### 150°C 25 min water bath

## how to

1. Mix the sugar and yolks until the sugar dissolves.
2. Add in a sprinkle of salt, the cream and vanilla.
3. Mix until homogenous. Pour out into ramekins.
4. Bake in a water bath for 25 minutes at 150°C. May vary depending on how much custard there is in the ramekins.

## sources

Adam Ragusea's [no-torch creme brulee](https://www.youtube.com/watch?v=9Jja-kf5z4U).
