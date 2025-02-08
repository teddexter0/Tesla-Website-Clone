const model_s = document.getElementById("model-s"); // Get the model-s element by IDc
const model_3 = document.getElementById("model-3");
const model_x = document.getElementById("model-x");
const model_y = document.getElementById("model-y");

const modelSpecs = {
  "model-s": {
    specs: ["1.9 s", "200 mph", "396 mi"],
    description: "Description for Model S",
    name: "Model S",
  },
  "model-3": {
    specs: ["3.2 s", "150 mph", "250 mi"],
    description: "Description for Model 3",
    name: "Model 3",
  },
  "model-x": {
    specs: ["2.8 s", "250 mph", "325 mi"],
    description: "Description for Model X",
    name: "Model X",
  },
  "model-y": {
    specs: ["3.5 s", "200 mph", "300 mi"],
    description: "Description for Model Y",
    name: "Model Y",
  },
};

[model_s, model_3, model_x, model_y].forEach((model) => {
  model.addEventListener("click", function () {
    header.style.backgroundImage = `url(img/Tesla-${model.id}.jpeg)`;
    const specs = modelSpecs[model.id].specs;
    const description = modelSpecs[model.id].description;
    const modelName = modelSpecs[model.id].name;
    const modelSpecsDivs = document.querySelectorAll(".info div:not(.line)");
    modelSpecsDivs.forEach((div, index) => {
      const h2 = div.querySelector("h2");
      h2.textContent = index === 0 ? modelName : specs[index - 1];
      if (index === 0) {
        const p = div.querySelector("p");
        p.textContent = description;
      }
    });
  });
});
