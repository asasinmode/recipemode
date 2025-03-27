<script setup lang="ts">
import { ref } from 'vue';

import WeightInput from '../components/WeightInput.vue';

const rawWhitesWeight = ref(90);
const parsedWhitesWeight = ref(90);

function updateParsedWeight() {
  parsedWhitesWeight.value = rawWhitesWeight.value;
}
</script>

# macarons

I recommend making the macarons based on the amount of egg whites you have. Enter how many grams of egg whites you have below and the other ingredients will be adjusted accordingly.

3 egg whites is a good start for one batch.

To use up the yolks check out [lemon tart](/cakes/lemon-tart) or [creme brulee](/desserts/creme-brulee).

## total ingredients

- <WeightInput id="whitesWeight" v-model="rawWhitesWeight" @focusout="updateParsedWeight" label="egg whites" />
- {{ Math.round(parsedWhitesWeight * 0.5) }}g sugar
- salt
- {{ Math.round(parsedWhitesWeight * 1.2) }}g almond flour
- {{ Math.round(parsedWhitesWeight * 1.6) }}g powdered sugar

## ingredients by use case & order

- {{ parsedWhitesWeight }}g egg whites
- {{ Math.round(parsedWhitesWeight * 0.5) }}g sugar
- salt

---

- {{ Math.round(parsedWhitesWeight * 1.2) }}g almond flour
- {{ Math.round(parsedWhitesWeight * 1.6) }}g powdered sugar

### 150°C 14 min or 13 + flip and 5 min more if using silicone mat

## how to

1. Into a mixing bowl, add the egg whites and a sprinkle of salt. Let come up to room temperature.
2. Into a separate bowl, sift in the almond flour and powdered sugar. Mix thoroughly.
3. Add the other sugar into a glass.
4. Prepare a piping bag.
5. Beat the egg whites until stiff peaks while gradually adding sugar. ⅓ at a time should be good.
6. Gradually fold in the dry ingredients. ⅓ at a time should be good.
7. Fold until homogenous, then keep folding until a figure eight drizzle on top of the batter disappears in 25 seconds consistency is reached.
8. Transfer into a piping bag and pipe out the cookies.
9. Leave the cookies to dry out for at least an hour until a skin forms on top and you can touch it without leaving a mark.
10. Bake for 14 minutes at 150°C. If you are using a silicone mat, after 13 minutes turn the baking sheet around and bake for 5 more minutes. Make sure it's at most at the middle rack of your oven. After 18 minutes have passed, Take it out of the oven but leave it on the hot baking sheet until it cools down to make sure the bottom is cooked through.

## sources

My own recipe inspired by [this paper](https://www.cookingscienceguy.com/pages/wp-content/uploads/2012/07/Food-Science-Macaron3.pdf).
