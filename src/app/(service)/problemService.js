const fackQuestions = {
    "What is the capital of France?": {
      "answer": ["Paris"],
      "mnemonics": ["Paris rhymes with 'pair of keys', which can unlock the gates to the city of lights."],
      "notes": ["Paris is also known for its significant contributions to art, fashion, and cuisine."]
    },
    "What is the boiling point of water?": {
      "answer": ["100 degrees Celsius"],
      "mnemonics": ["'Boiling point' sounds like 'boiling joint', imagine water boiling at a joint family dinner at 100 degrees."],
      "notes": ["This is at standard atmospheric pressure."]
    },
    "What is the chemical symbol for gold?": {
      "answer": ["Au"],
      "mnemonics": ["'Au' sounds like 'ow', something you might exclaim when finding gold because it's so valuable."],
      "notes": ["Gold has been a valuable resource for jewelry and economics for centuries."]
    },
    "Who wrote 'To Kill a Mockingbird'?": {
      "answer": ["Harper Lee"],
      "mnemonics": ["'Harper' sounds like 'harp', and a musician could sing about the mockingbird."],
      "notes": ["This novel was published in 1960 and is famous for its themes of racial injustice."]
    }
  }
  

export async function getProblems() {
    return fackQuestions;
}

export async function addProblem(problem) {
}

export async function updateProblem(id, updatedData) {
}

export async function deleteProblem(id) {
}

export async function getProblembyid(id) {
}