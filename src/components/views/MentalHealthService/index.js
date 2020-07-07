const mhBank = [
  {
    id: 0,
    slug: "adhd",
    condition: "Attention Deficit Hyperactivity Disorder (ADHD)",
    imgpath: "/images/adhd.jpg",
    intro_title: "Overview",
    synopsis:
      "ADHD is a developmental disorder defined by inattention (trouble staying on task, listening); disorganization (losing materials); and hyperactivity-impulsivity (fidgeting, difficulty staying seated or waiting).",
  },
  {
    id: 1,
    slug: "bipolar-disorder",
    condition: "Bipolar Disorder",
    imgpath: "/images/bipolar.jpg",
    intro_title: "Overview",
    synopsis:
      "Bipolar disorder (formerly called manic-depressive illness or manic depression) is a mental disorder that causes unusual shifts in mood, energy, activity levels, concentration, and the ability to carry out day-to-day tasks.",
  },
  {
    id: 2,
    slug: "anxiety-disorders",
    condition: "Anxiety Disorders",
    imgpath: "/images/anxiety2.jpg",
    intro_title: "Overview",
    synopsis:
      "Everyone can experience anxiety, but when symptoms are overwhelming and constant — often impacting everyday living — it may be an anxiety disorder.",
  },
];

export default () => Promise.resolve(mhBank);
