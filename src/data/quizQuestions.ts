import type { QuizQuestion } from "../types/quizQuestion";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "In \"Shining\", qual è il numero della stanza maledetta dell'hotel?",
    options: [
      { id: "a", label: "217" },
      { id: "b", label: "237" },
      { id: "c", label: "137" },
      { id: "d", label: "337" },
    ],
    correctOptionId: "b",
  },
  {
    id: "q2",
    question: "Chi interpreta Pennywise nel remake di \"IT\" del 2017?",
    options: [
      { id: "a", label: "Tim Curry" },
      { id: "b", label: "Javier Bardem" },
      { id: "c", label: "Bill Skarsgård" },
      { id: "d", label: "Willem Dafoe" },
    ],
    correctOptionId: "c",
  },
  {
    id: "q3",
    question: "Nel primo film di \"Venerdì 13\", chi è davvero l'assassino?",
    options: [
      { id: "a", label: "Jason Voorhees" },
      { id: "b", label: "Pamela Voorhees, sua madre" },
      { id: "c", label: "Michael Myers" },
      { id: "d", label: "Un campeggiatore sconosciuto" },
    ],
    correctOptionId: "b",
  },
  {
    id: "q4",
    question: "In \"The Ring\", cosa deve fare chi guarda la videocassetta maledetta per sopravvivere?",
    options: [
      { id: "a", label: "Non guardare più la TV" },
      { id: "b", label: "Farla vedere a qualcun altro entro 7 giorni" },
      { id: "c", label: "Distruggere la videocassetta" },
      { id: "d", label: "Chiamare un prete" },
    ],
    correctOptionId: "b",
  },
  {
    id: "q5",
    question: "Come si chiama il killer mascherato di \"Halloween\"?",
    options: [
      { id: "a", label: "Jason Voorhees" },
      { id: "b", label: "Freddy Krueger" },
      { id: "c", label: "Leatherface" },
      { id: "d", label: "Michael Myers" },
    ],
    correctOptionId: "d",
  },
];
