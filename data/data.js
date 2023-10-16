const chemistryFlashcards = [
  {
    question: "What is the chemical symbol for water?",
    answer: "H2O",
    id: 1,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answer: "Oxygen",
    id: 2,
  },
  {
    question: "What is the atomic number of carbon?",
    answer: "6",
    id: 3,
  },
  {
    question: "What is the chemical formula for methane?",
    answer: "CH4",
    id: 4,
  },
  {
    question: "What is the most abundant gas in Earth’s atmosphere?",
    answer: "Nitrogen",
    id: 5,
  },
  // Add more chemistry flashcards as needed
];
const psych301Flashcards = [
  {
    question: "What is the definition of psychology?",
    answer: "The scientific study of behavior and mental processes.",
    id: 1,
  },
  {
    question: "Who is often considered the founder of modern psychology?",
    answer: "Wilhelm Wundt",
    id: 2,
  },
  {
    question:
      "What is the difference between classical conditioning and operant conditioning?",
    answer:
      "Classical conditioning is learning through association, while operant conditioning is learning through consequences.",
    id: 3,
  },
  {
    question:
      "What is the main idea behind Abraham Maslow's hierarchy of needs?",
    answer:
      "People have a series of needs, and fulfilling these needs leads to self-actualization and personal growth.",
    id: 4,
  },
  {
    question: "Who is known for the social-cognitive theory of personality?",
    answer: "Albert Bandura",
    id: 5,
  },
  // Add more Psych 301 flashcards as needed
];

const introToComputerScienceFlashcards = [
  {
    question: "What is an algorithm?",
    answer:
      "A step-by-step set of instructions for solving a specific problem or performing a task.",
    id: 1,
  },
  {
    question: "What is a variable in programming?",
    answer: "A named storage location in a program's memory that holds data.",
    id: 2,
  },
  {
    question: 'What does "CPU" stand for in computing?',
    answer: "Central Processing Unit",
    id: 3,
  },
  {
    question:
      'What is the purpose of a "conditional statement" in programming?',
    answer:
      "To make decisions and execute different code based on a specified condition.",
    id: 4,
  },
  {
    question: 'What is the concept of "data types" in programming?',
    answer:
      "Data types define the type of data a variable can hold, such as integers, strings, or booleans.",
    id: 5,
  },
  // Add more Intro to Computer Science flashcards as needed
];

const algebraFlashcards = [
  {
    question: "What is the equation of a line in slope-intercept form?",
    answer: "y = mx + b",
    id: 1,
  },
  {
    question: "What is the quadratic formula used for?",
    answer: "To find the solutions (roots) of a quadratic equation.",
    id: 2,
  },
  {
    question: 'What is the "FOIL" method used for in algebra?',
    answer: "To multiply two binomials, First, Outer, Inner, Last.",
    id: 3,
  },
  {
    question: 'What is the definition of a "polynomial"?',
    answer:
      "An expression consisting of variables and coefficients, combined using addition, subtraction, multiplication, and non-negative integer exponents.",
    id: 4,
  },
  {
    question:
      "What is the order of operations (PEMDAS/BODMAS) used for in algebra?",
    answer:
      "To specify the order in which operations (Parentheses, Exponents, Multiplication and Division, Addition and Subtraction) are performed in an expression.",
    id: 5,
  },
  // Add more algebra flashcards as needed
];

export const DATA = [
  { id: "0", title: "Chemistry", cards: chemistryFlashcards },
  { id: "1", title: "Psych 301", cards: psych301Flashcards },
  {
    id: "2",
    title: "Computer Science",
    cards: introToComputerScienceFlashcards,
  },
  { id: "3", title: "Algebra", cards: algebraFlashcards },
];
