const promptText = `
Describe the two people in the photos in detail:

For the first person:
- Name, age, race, skin color, hair color and style, eye color, accessories (if any), clothing and colors, unique features (e.g., moles, tattoos, scars), typical expression or posture, and environment or situation.

For the second person:
- Name, age, race, skin color, hair color and style, eye color, accessories (if any), clothing and colors, unique features (e.g., moles, tattoos, scars), typical expression or posture, and environment or situation.

Based on this information, create a single prompt for DALL-E to generate a cartoon-style image. The two persons should be positioned next to each other, or interacting closely, with the details provided. The prompt should be formatted as follows:

"Make a cartoon-style  image featuring two people. The first person is [description of the first person]. The second person is [description of the second person]. Both are depicted next to each other in a dynamic pose, with a [description of the environment]. The cartoon style should emphasize exaggerated features, bright colors, and playful expressions, capturing their likeness accurately."

Please generate this prompt directly without providing intermediate answers.
`;

export default promptText;
