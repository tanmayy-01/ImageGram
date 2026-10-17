import { BUCKET_NAME } from "../config/serverConfig.js";
import { supabase } from "../config/supabaseConfig.js";
import { createPost } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
  const { caption, file, isPublic } = createPostObject;

  if (!file) {
    throw new Error("No file provided for upload.");
  }

  const ext = file.mimetype.split("/")[1];
  const fileName = `${crypto.randomUUID()}.${ext}`;
  const filePath = `public/${fileName}`;

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) {
    throw error;
  }

  const { data: publicUrlData } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);

  const post = await createPost({
    caption: caption?.trim(),
    image: publicUrlData.publicUrl,
    isPublic: isPublic === "true" || isPublic === true,
  });

  return post;
};
