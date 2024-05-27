export type VocabEntry = {
  answers: string[]
  mnemonics?: string[]
  notes?: string[]
}
export type VocabData = Record<string, VocabEntry>

export type UniversalJSONData = Record<string, any>
