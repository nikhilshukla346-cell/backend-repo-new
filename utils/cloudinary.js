import dotenv from "dotenv";

dotenv.config();

const uploader = {
  upload: async (content) => {
    try {
      const mod = await import("cloudinary");
      const cloudinary = mod.v2 || mod;
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
      return await cloudinary.uploader.upload(content);
    } catch (err) {
      console.warn(
        "cloudinary package not installed or failed to load; using mock uploader.",
      );
      return { secure_url: "" };
    }
  },
};

export default { uploader };
