<script>
import ingredients from './ingredientList.ts';

export default {
  data() {
    return {
      recipe: ingredients.map(i => ({ ...i, grams: 0 })),
      normalizeTo: 1000,
    };
  },

  methods: {
    updateQuantity(idx, value) {
      const newValue = parseFloat(value, 10);
      if (!isNaN(newValue)) {
        this.$data.recipe[idx].grams = newValue;
      }
    },
    formatPercent(n) {
      return new Intl.NumberFormat('us-EN', { style: 'percent' }).format(n);
    },
    normalizeRecipe() {
      const total = this.stats.weight;
      for (const i of this.$data.recipe) {
        i.grams = i.grams / total * this.normalizeTo;
      }
    },
  },

  computed: {
    stats() {
      const { weight, pac, pod, fat, nonFatSolids, nfms } = this.$data.recipe.reduce((sum, i) => ({
        weight: sum.weight + i.grams,
        pac: sum.pac + i.pac * i.grams,
        pod: sum.pod + i.pod * i.grams,
        fat: sum.fat + i.fat * i.grams,
        nonFatSolids: sum.nonFatSolids + i.nonFatSolids * i.grams,
        nfms: sum.nfms + (i.isMilkSolid ? i.nonFatSolids * i.grams : 0),
      }), { weight: 0, pac: 0, pod: 0, fat: 0, nonFatSolids: 0, nfms: 0 });

      const pacPer1000 = (pac / weight * 1000) || 0;
      const podPer1000 = (pod / weight * 1000) || 0;
      const pacPodRatio = (pac / pod) || 0;

      const percentFat = (fat / weight) || 0;
      const percentNonFatSolids = (nonFatSolids / weight) || 0;
      const percentNfms = (nfms / weight) || 0;

      const solids = fat + nonFatSolids;
      const percentSolids = (solids / weight) || 0;

      const water = weight - solids;
      const percentWater = (water / weight) || 0;

      const nPac = (pac / water) * 1000 || 0;

      return {
        weight,
        pac,
        pod,
        pacPer1000,
        podPer1000,
        pacPodRatio,
        fat,
        percentFat,
        nfms,
        percentNfms,
        nonFatSolids,
        percentNonFatSolids,
        solids,
        percentSolids,
        water,
        percentWater,
        nPac,
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="ingredient-form">
      <div class="ingredient-input" v-for="(i, idx) in recipe">
        <label :for="`ingredient-${idx}`">{{ i.name }}</label>
        <input
          :id="`ingredient-${idx}`"
          type="text"
          :value="i.grams"
          @change="updateQuantity(idx, $event.target.value)"
        />
      </div>
    </div>

    <table class="stats">
      <tbody>
        <tr>
          <td>Total recipe weight:</td>
          <td>{{ stats.weight }}</td>
        </tr>
        <tr>
          <td>PAC:</td>
          <td>{{ stats.pac }} ({{ stats.pacPer1000 }} / 1000)</td>
        </tr>
        <tr>
          <td>nPAC:</td>
          <td>{{ stats.nPac }}</td>
        </tr>
        <tr>
          <td>POD:</td>
          <td>{{ stats.pod }} ({{ stats.podPer1000 }} / 1000)</td>
        </tr>
        <tr>
          <td>PAC:</td>
          <td>POD ratio: {{ stats.pacPodRatio }}</td>
        </tr>
        <tr>
          <td>Fat:</td>
          <td>{{ stats.fat }} ({{ formatPercent(stats.percentFat) }})</td>
        </tr>
        <tr>
          <td>Nonfat milk solids:</td>
          <td>{{ stats.nfms }} ({{ formatPercent(stats.percentNfms) }})</td>
        </tr>
        <tr>
          <td>Nonfat solids:</td>
          <td>{{ stats.nonFatSolids }} ({{ formatPercent(stats.percentNonFatSolids) }})</td>
        </tr>
        <tr>
          <td>Total solids:</td>
          <td>{{ stats.solids }} ({{ formatPercent(stats.percentSolids) }})</td>
        </tr>
        <tr>
          <td>Total water:</td>
          <td>{{ stats.water }} ({{ formatPercent(stats.percentWater) }})</td>
        </tr>
      </tbody>
    </table>

    <input type="number" v-model="normalizeTo" />
    <button
      @click="normalizeRecipe()"
    >
      Normalize
    </button>
  </div>
</template>

<style scoped>
.ingredient-input {
  display: flex;
  justify-content: space-between;
  width: 500px;
}

.ingredient-form {
  margin: 20px 0;
}

/* Use grid for this? */
.stats {

}
</style>
