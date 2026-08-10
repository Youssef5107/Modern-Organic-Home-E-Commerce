-- CreateTable
ALTER TABLE "users" ADD COLUMN "profile_image_url" TEXT;

-- Note: this migration only adds the field; existing rows will have null values.
