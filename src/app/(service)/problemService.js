const fackQuestions = {
  "What is the capital of France?": {
    answers: ["Paris"],
    mnemonics: [
      "Paris rhymes with 'pair of keys', which can unlock the gates to the city of lights.",
    ],
    notes: ["Paris is also known for its significant contributions to art, fashion, and cuisine."],
  },
  "What is the boiling point of water?": {
    answers: ["100 degrees Celsius"],
    mnemonics: [
      "'Boiling point' sounds like 'boiling joint', imagine water boiling at a joint family dinner at 100 degrees.",
    ],
    notes: ["This is at standard atmospheric pressure."],
  },
  "What is the chemical symbol for gold?": {
    answers: ["Au"],
    mnemonics: [
      "'Au' sounds like 'ow', something you might exclaim when finding gold because it's so valuable.",
    ],
    notes: ["Gold has been a valuable resource for jewelry and economics for centuries."],
  },
  "Who wrote 'To Kill a Mockingbird'?": {
    answers: ["Harper Lee"],
    mnemonics: ["'Harper' sounds like 'harp', and a musician could sing about the mockingbird."],
    notes: ["This novel was published in 1960 and is famous for its themes of racial injustice."],
  },
  "What is the capital of Spain?": {
    answers: ["Madrid"],
    mnemonics: [
      "'Madrid' sounds similar to 'mad ride', which could remind you of the bustling streets of Spain's capital.",
    ],
    notes: ["Madrid is the third largest city in the European Union."],
  },
  "What is the formula for the area of a circle?": {
    answers: ["πr²"],
    mnemonics: ["'Pie Are Squared' sounds like a math themed bakery treat."],
    notes: ["The 'r' stands for radius of the circle."],
  },
  "Who discovered penicillin?": {
    answers: ["Alexander Fleming"],
    mnemonics: [
      "Fleming sounds like 'flaming', linking to the idea of something revolutionary or 'catching fire'.",
    ],
    notes: ["Penicillin was discovered in 1928 and it marked the beginning of modern antibiotics."],
  },
  "What year did the Titanic sink?": {
    answers: ["1912"],
    mnemonics: ["Remember '1912' by associating it with '1 night, 9, 1 too many icebergs'."],
    notes: ["The Titanic sank on its maiden voyage from Southampton to New York City."],
  },
  "What is the hardest natural substance on Earth?": {
    answers: ["Diamond"],
    mnemonics: ["'Diamond' sounds like 'die hard', representing its unmatched hardness."],
    notes: ["Diamonds are a crystalline form of carbon and are used in jewelry and cutting tools."],
  },
  "What is the speed of light?": {
    answers: ["299,792,458 meters per second"],
    mnemonics: ["Think '299,792,458', as '2 shy of 300 million meters', rushing per second."],
    notes: ["The speed of light in vacuum is a fundamental constant in physics."],
  },
  "What is the powerhouse of the cell?": {
    answers: ["Mitochondria"],
    mnemonics: ["'Mighty chondria' powers the cell."],
    notes: ["Mitochondria generate most of the cell's supply of adenosine triphosphate (ATP)."],
  },
  "Who painted the Mona Lisa?": {
    answers: ["Leonardo da Vinci"],
    mnemonics: [
      "'Leo's nardo' sounds like 'lizard', a creature known for its keen observational gaze, much like Leonardo's while painting.",
    ],
    notes: ["The Mona Lisa is housed in the Louvre Museum in Paris."],
  },
  "What element has the atomic number 1?": {
    answers: ["Hydrogen"],
    mnemonics: ["'Hydro-gen', like 'high drone', flying number one in the periodic table."],
    notes: ["Hydrogen is the most abundant chemical substance in the universe."],
  },
  "What was the main cause of World War I?": {
    answers: ["Assassination of Archduke Franz Ferdinand"],
    mnemonics: [
      "'Franz' sounds like 'frantic', leading to a frantic series of events sparking the war.",
    ],
    notes: ["His assassination in Sarajevo in 1914 set off a chain of events that led to the war."],
  },
  "Who is the author of 'Pride and Prejudice'?": {
    answers: ["Jane Austen"],
    mnemonics: ["'Jane' sounds like 'plain', but her intricate plots are anything but."],
    notes: [
      "This novel is noted for its witty and satirical exploration of the nature of courtship.",
    ],
  },
  "What is the largest planet in our solar system?": {
    answers: ["Jupiter"],
    mnemonics: ["'Jupiter', like 'Jumbo Peter', dominates with its massive size."],
    notes: ["Jupiter is a gas giant and does not have a true surface."],
  },
  "Who discovered America?": {
    answers: ["Christopher Columbus"],
    mnemonics: ["'Columbus' sounds like 'column bus', transporting the old world to the new."],
    notes: [
      "Although not the first explorer to reach the Americas, his voyages led to widespread awareness of the continent in Europe.",
    ],
  },
  "What causes seasons on Earth?": {
    answers: ["The tilt of the Earth's axis"],
    mnemonics: ["'Tilt' as in the Earth slants its 'hat' at the sun, changing the seasons."],
    notes: ["The tilt of Earth's axis is about 23.5 degrees relative to its orbit around the sun."],
  },
  "What is the smallest bone in the human body?": {
    answers: ["Stapes"],
    mnemonics: ["'Stapes' sounds like 'staples', tiny yet essential in the structure of the ear."],
    notes: [
      "The stapes is located in the middle ear and is involved in the conduction of sound vibrations to the inner ear.",
    ],
  },
  "What language has the most native speakers worldwide?": {
    answers: ["Mandarin Chinese"],
    mnemonics: [
      "'Mandarin' sounds like 'man drain', as if drawing in the most people with its linguistic flow.",
    ],
    notes: ["Mandarin is one of the several varieties of Chinese spoken mainly in China."],
  },
  "What is the symbol for silver on the periodic table?": {
    answers: ["Ag"],
    mnemonics: ["'Ag' for 'Aged goods', fitting for a precious metal."],
    notes: ["Silver has been used for making coins and jewelry for thousands of years."],
  },
  "Who wrote '1984'?": {
    answers: ["George Orwell"],
    mnemonics: ["'Orwell' sounds like 'or well', pondering the deep well of dystopian ideas."],
    notes: ["1984 is a novel about totalitarianism and surveillance."],
  },
}

export async function getProblems() {
  return fackQuestions
}

export async function addProblem(problem) {}

export async function updateProblem(id, updatedData) {}

export async function deleteProblem(id) {}

export async function getProblembyid(id) {}
