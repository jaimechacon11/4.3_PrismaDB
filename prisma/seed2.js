const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.alumnos.upsert({
      where: { name: "Woopa" },
      update: {},
      create: {
        name: "Woopa",
        lang: "ajolonauta",
        missionCommander: "Carlo",
        enrollments: 0,
      },
    });

    const woopa1 = await prisma.alumnos.upsert({
      where: { name: "Woopa1" },
      update: {},
      create: {
        name: "Woopa1",
        lang: "ajolonauta1",
        missionCommander: "Carlo",
        enrollments: 1,
      },
    });

    const woopa2 = await prisma.alumnos.upsert({
      where: { name: "Woopa2" },
      update: {},
      create: {
        name: "Woopa2",
        lang: "ajolonauta2",
        missionCommander: "Carlo",
        enrollments: 2,
      },
    });

    const woopa3 = await prisma.alumnos.upsert({
      where: { name: "Woopa3" },
      update: {},
      create: {
        name: "Woopa3",
        lang: "ajolonauta3",
        missionCommander: "Carlo",
        enrollments: 3,
      },
    });

    console.log("Create 3 explorers");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
