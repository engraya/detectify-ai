import { throttle } from "lodash";

// Define the structure for each prediction
interface Prediction {
  bbox: [number, number, number, number]; // [x, y, width, height]
  class: string; // Object class (e.g., 'person', 'car', etc.)
}

// Function to render predictions
export const renderPredictions = (
  predictions: Prediction[], 
  ctx: CanvasRenderingContext2D // Standard built-in type for 2D rendering context
) => {
  // Clear the canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Fonts
  const font = "16px sans-serif";
  ctx.font = font;
  ctx.textBaseline = "top";

  // Iterate over the predictions and draw each one
  predictions.forEach((prediction) => {
    const [x, y, width, height] = prediction.bbox;

    // Check if the object is a 'person'
    const isPerson = prediction.class === "person";

    // Draw the bounding box
    ctx.strokeStyle = isPerson ? "#FF0000" : "#00FFFF";
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y, width, height);

    // Fill the box with color if it's a 'person'
    ctx.fillStyle = `rgba(255, 0, 0, ${isPerson ? 0.2 : 0})`; // Set the fill color to red
    ctx.fillRect(x, y, width, height);

    // Draw the label background
    ctx.fillStyle = isPerson ? "#FF0000" : "#00FFFF";
    const textWidth = ctx.measureText(prediction.class).width;
    const textHeight = parseInt(font, 10); // Parse the font size
    ctx.fillRect(x, y, textWidth + 4, textHeight + 4);

    // Draw the label text
    ctx.fillStyle = "#000000";
    ctx.fillText(prediction.class, x, y);

    // Play audio if it's a 'person'
    if (isPerson) {
      playAudio();
    }
  });
};

// Throttle audio playback to avoid constant triggering
const playAudio = throttle(() => {
  const audio = new Audio(""); // You can set the path to an actual audio file here
  audio.play();
}, 2000);





