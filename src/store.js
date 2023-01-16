import { reactive } from 'vue'

export const store = reactive({
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien',
    urlArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypeList: [],
    cardList: [],
    loaded: false
});