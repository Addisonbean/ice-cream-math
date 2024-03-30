// Much, but not all of this is from here https://fdc.nal.usda.gov/

const ingredients = [
  {
    name: 'Whole milk',
    fat: 0.036,
    nonFatSolids: 0.088,
    water: 0.88,
    pac: 0.05,
    pod: 0.05 * 0.16,
    isMilkSolid: true,
  },
  {
    name: 'Heavy cream',
    fat: 0.36,
    nonFatSolids: 0.056,
    water: 0.58,
    pac: 0.029,
    pod: 0.029 * 0.16,
    isMilkSolid: true,
  },
  {
    name: 'Sugar',
    fat: 0,
    nonFatSolids: 1,
    water: 0,
    pac: 1,
    pod: 1,
    isMilkSolid: false,
  },
  {
    name: 'Dextrose',
    fat: 0,
    nonFatSolids: 1,
    water: 0,
    pac: 1.9,
    pod: 0.7,
    isMilkSolid: false,
  },
  {
    name: 'Milk powder',
    fat: 0,
    nonFatSolids: 1,
    water: 0,
    pac: 0.5,
    pod: 0.5*0.16,
    isMilkSolid: true,
  },
  {
    name: 'Inulin',
    fat: 0,
    nonFatSolids: 1,
    water: 0,
    pac: 0.65,
    pod: 0.1,
    isMilkSolid: false,
  },
  {
    name: 'Xanthan gum',
    fat: 0,
    nonFatSolids: 1,
    water: 0,
    pac: 0,
    pod: 0,
    isMilkSolid: false,
  },
  {
    name: 'Egg yolk',
    fat: .29,
    nonFatSolids: 0.19,
    water: .52,
    pac: 0,
    pod: 0,
    isMilkSolid: false,
  },
  {
    name: 'Orange sweet potato (flesh, cooked)',
    fat: 0,
    nonFatSolids: 0.25,
    water: 0.75,
    // Assuming 2.5% sucrose, 0.5% glucose, 0.5% fructose, and 3% maltose
    pac: 0.074,
    pod: 0.049,
    isMilkSolid: false,
  },
  {
    name: 'Water',
    fat: 0,
    nonFatSolids: 0,
    water: 1,
    pac: 0,
    pod: 0,
    isMilkSolid: false,
  },
];

export default ingredients;
