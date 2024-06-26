import { useEffect, useMemo, useState } from "react"
import { View } from "react-native"
import { handleMultipleChoiceSelection, presentMultipleChoiceOptions } from "./multiple-choice"
import { Button } from "@/components/ui/button"
import { Text } from "@/components/ui/text"
import { useLearningModeContext } from "@/context/LearningModeContext"
import { EntryWithCardProperties } from "@/types"

type MultipleChoiceProps = {
  data: EntryWithCardProperties[]
  shuffleInput?: boolean
}

export default function MultipleChoice({ data, shuffleInput = true }: MultipleChoiceProps) {
  const {
    setCorrectEntry,
    setIsAnswerCorrect,
    hasUserAnswered,
    setHasUserAnswered,
    enabledAnswerCategories,
    currentCardIndex,
  } = useLearningModeContext()

  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(null)

  const choices = useMemo(
    () => presentMultipleChoiceOptions(data, shuffleInput, currentCardIndex),
    [data, currentCardIndex],
  )

  useEffect(() => {
    console.log(choices.correctOption.key)
    setCorrectEntry(choices.correctOption)
  }, [choices, setCorrectEntry])

  const handleSelection = (selection: string, index: number) => {
    const isCorrect = handleMultipleChoiceSelection(choices, selection)
    setIsAnswerCorrect(isCorrect)
    setHasUserAnswered(true)
    setSelectedButtonIndex(index)
  }

  const correctAnswer = choices.correctOption.answerCategories
    .filter((category) => enabledAnswerCategories.includes(category.category))
    .flatMap((category) => category.answers)

  return (
    <View className="mt-4">
      <Text className={`${hasUserAnswered && "text-white"}`}>Multiple Choice</Text>
      {choices.options.map((option, index) => {
        // Flatten the enabled answers from all categories
        const enabledAnswers = option.answerCategories
          .filter((category) => enabledAnswerCategories.includes(category.category))
          .flatMap((category) => category.answers)

        // Pick the first answer from the enabled answers array (each answer in the array is equally valid)
        const firstAnswer = enabledAnswers[0]

        const isCorrect = correctAnswer.includes(firstAnswer)
        const isSelected = selectedButtonIndex === index

        return (
          <Button
            key={index}
            onPress={() => handleSelection(firstAnswer, index)}
            disabled={hasUserAnswered}
            className={`${
              hasUserAnswered
                ? isCorrect
                  ? "justify-center border-r-8 border-green-400 bg-white disabled:opacity-100"
                  : isSelected
                    ? "justify-center border-r-8 border-red-400 bg-white disabled:opacity-100"
                    : "bg-white disabled:opacity-60"
                : "disabled:opacity-60"
            } my-2 xl:h-16`}
          >
            <Text
              className={`${
                hasUserAnswered
                  ? isCorrect
                    ? "font-interblack !text-xl text-[#46d246]"
                    : isSelected
                      ? "font-interblack text-red-500"
                      : ""
                  : ""
              }`}
            >
              {enabledAnswers.join(", ")}
            </Text>
          </Button>
        )
      })}
    </View>
  )
}
