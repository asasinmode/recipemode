<script setup lang="ts">
import { ref } from 'vue';

import WeightInput from '../components/WeightInput.vue';

const rawWhitesWeight = ref(90);
const parsedWhitesWeight = ref(90);

function updateWhitesWeight() {
  parsedWhitesWeight.value = rawWhitesWeight.value;
}
</script>

# mascarpone whipped cream

I usually use it as a [macarons](base) filling that surrounds [caramel sauce](caramel-sauce).

Default amount of ingredients should be enough for macarons made with 3 egg whites.

## total ingredients

- 75g sugar
- <WeightInput id="sugarWeight" v-model="rawWhitesWeight" @focusout="updateWhitesWeight" label="g egg whites" />
- splash of water
- 45ml 30% cream
- 

## ingredients by use case & order

All of the ingredients grouped by their use case and sorted by the order I find best to handle/prepare/combine them. Useful if you know the directions, have all the ingredients and just need something you can quickly glance on for reference.

Example for a cake recipe that requires you to prepare dry and wet ingredients in 2 separate bowls before combining them and uses a bit of the same ingredient in dry and for frosting.

- dry ingredient 1
- dry ingredient 2
- 250g of dry ingredient 3
---
- wet ingredient 1
- wet ingredient 2
---
- frosting ingredient 1
- 150g of dry ingredient 3

### XXX°C YY min

## how to

1. Add

## sources

Sally's Baking Addiction's [homemade salted caramel sauce](https://sallysbakingaddiction.com/homemade-salted-caramel-recipe/). Scaled down, without salt.
