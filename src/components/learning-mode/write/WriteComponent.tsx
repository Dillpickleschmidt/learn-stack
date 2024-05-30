import { useEffect, useMemo, useState } from "react"
import { View } from "react-native"
import { Text } from "@/components/ui/text"
import { useLearningModeContext } from "@/context/LearningModeContext"
import { handleWrittenAnswer, presentWriteOptions } from "./write"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSONWithAnswerCategories } from "@/types"

type WriteComponentProps = {
  data: JSONWithAnswerCategories
  shuffleInput?: boolean
}

export default function WriteComponent({ data, shuffleInput = true }: WriteComponentProps) {
  const { setCorrectEntry, setIsAnswerCorrect, setHasUserAnswered, enabledAnswerCategories } =
    useLearningModeContext()

  const correctEntry = useMemo(() => presentWriteOptions(data, shuffleInput), [data])
  const [userAnswer, setUserAnswer] = useState<string>("")

  useEffect(() => {
    setCorrectEntry(correctEntry)
    setUserAnswer("")
  }, [correctEntry])

  const handleInput = (userAnswer: string) => {
    setIsAnswerCorrect(handleWrittenAnswer(userAnswer, correctEntry, enabledAnswerCategories))
    setHasUserAnswered(true)

    // Flatten the enabled answers from all categories for logging
    const enabledAnswers = correctEntry.answerCategories
      .filter((category) => enabledAnswerCategories.includes(category.category))
      .flatMap((category) => category.answers)

    console.log("User answer: ", userAnswer)
    console.log("Correct answer: ", enabledAnswers.join(", "))
  }

  return (
    <View className="mt-4">
      <Text>Type your answer</Text>
      <Input
        value={userAnswer}
        onChangeText={(e) => setUserAnswer(e)}
        aria-labelledbyledBy="userAnswerInput"
        aria-errormessage="userAnswerInputError"
      />
      <Button onPress={() => handleInput(userAnswer)} className="my-2">
        <Text>Submit</Text>
      </Button>
    </View>
  )
}
