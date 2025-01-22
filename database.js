const database = {
  dinosaurs: [
    {
      name: "T-Rex",
      height: "20 feet",
      weight: "7 tons",
      diet: "Carnivore",
      favoriteThing: "Running with tiny arms",
    },
    {
      name: "Velociraptor",
      height: "6.8 feet",
      weight: "33 pounds",
      diet: "Carnivore",
      favoriteThing: "Opening doors",
    },
    {
      name: "Triceratops",
      height: "10 feet",
      weight: "12 tons",
      diet: "Herbivore",
      favoriteThing: "Charging with its horns",
    },
    {
      name: "Ankylosaurus",
      height: "5 feet",
      weight: "4 tons",
      diet: "Herbivore",
      favoriteThing: "Swinging its clubbed tail",
    },
    {
      name: "Spinosaurus",
      height: "18 feet",
      weight: "8 tons",
      diet: "Carnivore",
      favoriteThing: "Swimming and fishing",
    },
  ],
};

export const getDinosaurs = () => structuredClone(database.dinosaurs);
