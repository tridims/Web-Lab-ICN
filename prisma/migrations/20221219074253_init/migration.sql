-- CreateTable
CREATE TABLE "User" (
    "ID" SERIAL NOT NULL,
    "Name" TEXT,
    "Email" TEXT,
    "Password" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
