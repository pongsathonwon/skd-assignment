export type Id = `${number}`;

export type Base = {
  id: Id;
  name: string;
};

export type Data = Base & {
  logo: string;
  roundSeats: [number, number, number, number, number];
  score: Score | null;
  faculty: Faculty;
  updatedAt: string;
  likes: number;
};

export type Score = {
  id: Id;
  year: number;
  scoreType: "ADMISSION";
  min: number;
  max: number;
  avg: number;
};

export type Faculty = Base & {
  tagId: Id;
  university: University;
};

export type University = Base;

type TwoDigit = `${number}${number}`;

export type DateTime =
  `${TwoDigit}${TwoDigit}-${TwoDigit}-${TwoDigit}:${TwoDigit}:${TwoDigit}.${number}${number}${number}:Z`;
