import * as tf from "@tensorflow/tfjs";
import * as bodyPix from "@tensorflow-models/body-pix";

export const removeImageBackground = async (
  imageUrl: string
): Promise<string> => {
  try {
    const net = await bodyPix.load();

    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;

    await new Promise<void>((resolve) => {
      imageElement.onload = () => {
        resolve();
      };
    });

    // Perform image segmentation to remove the background
    const segmentation = await net.segmentPerson(imageElement);
    const mask = segmentation.segmentation;

    // Create a canvas to render the image with the background removed
    const canvas = document.createElement("canvas");
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;
    const context = canvas.getContext("2d");

    // Set the background to transparent based on the mask
    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === 0) {
        context.clearRect(i % canvas.width, Math.floor(i / canvas.width), 1, 1);
      }
    }

    // Convert the canvas to a data URL and return it
    const dataURL = canvas.toDataURL("image/png"); // You can change the format if needed

    return dataURL;
  } catch (error) {
    // Handle any errors that occur during the process
    throw new Error("Background removal failed: " + error.message);
  }
};
