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
      .map(
        (abilityInfo) =>
          `${abilityInfo.ability.name}${
            abilityInfo.is_hidden ? " (Hidden)" : ""
          }`
      )
      .join(", ");
    document.getElementById("abilities").innerText = abilities;

    // Extract and display types
    const types = data.types.map((typeInfo) => typeInfo.type.name).join(", ");
    document.getElementById("types").innerText = types;
  } catch (error) {
    console.error(error);
  }
}
// Add event listener to input field to trigger fetchData on Enter key press
document.getElementById("inputName").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    fetchData();
  }
});