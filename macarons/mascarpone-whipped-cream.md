<script setup lang="ts">
import { ref } from 'vue';

import WeightInput from '../components/WeightInput.vue';

const rawMascarponeWeight = ref(70);
const parsedMascarponeWeight = ref(70);

function updateParsedWeight() {
  parsedMascarponeWeight.value = rawMascarponeWeight.value;
}
</script>

# mascarpone whipped cream

I usually use it as a [macarons](base) filling that surrounds [caramel sauce](caramel-sauce).

Default amount of ingredients should be enough for macarons made with 3 egg whites.

## total ingredients

- <WeightInput id="mascarponeWeight" v-model="rawMascarponeWeight" @focusout="updateParsedWeight" label="mascarpone" />
- {{ Math.round(parsedMascarponeWeight * 0.55) }}g 30% cream
- powdered sugar to taste

## ingredients by use case & order

- {{ parsedMascarponeWeight }}g mascarpone
- {{ Math.round(parsedMascarponeWeight * 0.55) }}g 30% cream
---
- powdered sugar to taste

## how to

1. Add everything into a mixing bowl. Make sure both mascarpone and cream are cold.
2. Whip up.
3. Add sugar to taste.

## sources

Lost to time.
