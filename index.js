async function fetchData() {
  try {
    const pokemonInputName = document
      .getElementById("inputName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonInputName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    //get and show pokemon image
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonImg");
    console.log(data);
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    //pokemon name
    const pokemonName = data.name;
    const nameElement = document.getElementById("pokemonName");
    nameElement.innerText = pokemonName;
    //pokemon Id
    const pokemonId = data.id;
    const idElement = document.getElementById("pokemonId");
    idElement.innerText = pokemonId;
    //pokemon weight
    const pokeWeight = data.weight;
    const weight = document.getElementById("weight");
    weight.innerText = pokeWeight;
    //pokemon height
    const pokeHeight = data.height;
    const height = document.getElementById("height");
    height.innerText = pokeHeight;
    // Extract and display abilities
    const abilities = data.abilities
      .map((abilityInfo) => `${abilityInfo.ability.name}`)
      .join(", ");
    document.getElementById("abilities").innerText = abilities;
    // Extract and display types
    const types = data.types.map((typeInfo) => typeInfo.type.name).join(", ");
    document.getElementById("types").innerText = types;

    // --------combat stats-------

    //pokemon hp
    const hpStat = data.stats[0].base_stat;
    const hpElement = document.getElementById("hp");
    hpElement.innerText = hpStat;
    //pokemon attack
    const attackStat = data.stats[1].base_stat;
    const attackElement = document.getElementById("attack");
    attackElement.innerText = attackStat;
    //pokemon defense
    const defenseStat = data.stats[2].base_stat;
    const defenseElement = document.getElementById("defense");
    defenseElement.innerText = defenseStat;
    //pokemon specialAttack
    const specialAttackStat = data.stats[3].base_stat;
    const specialAttackElement = document.getElementById("specialAttack");
    specialAttackElement.innerText = specialAttackStat;
    //pokemon specialDefense
    const specialDefenseStat = data.stats[4].base_stat;
    const specialDefenseElement = document.getElementById("specialDefense");
    specialDefenseElement.innerText = specialDefenseStat;
    //pokemon speed
    const speedStat = data.stats[5].base_stat;
    const speedElement = document.getElementById("speed");
    speedElement.innerText = speedStat;
  } catch (error) {
    console.error(error);
  }
}
// Add event listener to input field to trigger fetchData on Enter key press
document
  .getElementById("inputName")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      fetchData();
    }
  });
