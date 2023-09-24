<script setup lang="ts">
import { ref } from 'vue';

import WeightInput from '../components/WeightInput.vue';

const rawSugarWeight = ref(75);
const parsedSugarWeight = ref(75);

function updateSugarWeight() {
  parsedSugarWeight.value = rawSugarWeight.value;
}
</script>

# caramel sauce

I usually use it as a [macarons](base) filling that's surrounded by [mascarpone whipped cream](mascarpone-whipped-cream).

Default amount of ingredients should be enough for macarons made with 3 egg whites.

## total ingredients

- <WeightInput id="sugarWeight" v-model="rawSugarWeight" @focusout="updateSugarWeight" label="sugar" />
- splash of water
- {{ Math.round(parsedSugarWeight * 0.6) }}ml 30% cream
- {{ Math.round(parsedSugarWeight * 0.187) }}g butter

## ingredients by use case & order

- {{ parsedSugarWeight }}g sugar
- splash of water
---
- {{ Math.round(parsedSugarWeight * 0.6) }}ml 30% cream
---
- {{ Math.round(parsedSugarWeight * 0.187) }}g butter

## how to

1. Measure out the cream and butter and have them handy.
2. Add the sugar into a sauce pan along with enough water to make the sugar moist. Add as little as possible, it will all have to boil out later.
3. Put the sugar over medium-small heat and let it come up to a boil. Occasionally swirl the sauce pan around, don't stir/mix the sugar directly.
4. Once it reaches a golden brown color/temperature of your liking (for runny caramel sauce I recommend light golden brown) pour in all of your cream and stir vigorously. Be careful, it will bubble violently, so make sure to use a high enough pot. Keep stirring over the heat until everything is combined.
5. Take off the heat and stir in the butter.

## sources

Sally's Baking Addiction's [homemade salted caramel sauce](https://sallysbakingaddiction.com/homemade-salted-caramel-recipe/). Scaled down, without salt.
