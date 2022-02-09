import prisma from "../lib/prisma";

const createUser = async (email) => {
  const user = await prisma.user.create({
    data: { email },
  });
  await prisma.$disconnect();
  return user;
};

export { createUser };
