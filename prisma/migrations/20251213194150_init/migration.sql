-- CreateTable
CREATE TABLE "Gallery" (
    "internalId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Image" (
    "internalId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "galleryId" INTEGER NOT NULL,
    CONSTRAINT "Image_galleryId_fkey" FOREIGN KEY ("galleryId") REFERENCES "Gallery" ("internalId") ON DELETE RESTRICT ON UPDATE CASCADE
);
