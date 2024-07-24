import { useState } from "react"
import { DangerButton, MaxLabel, NaturalButton, SubmitButton } from "./components/ui"

function App() {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => { setCounter(counter + 1) }
  const decreaseByOne = () => { setCounter(counter - 1) }
  const setToZero = () => { setCounter(0) }
  return(
    <div className="w-screen h-screen p-2 bg-gradient-to-b from-gray-700 to-black">
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex-col">
          <MaxLabel>
            {counter}
          </MaxLabel>
          <div className="grid md:grid-cols-3 mt-5 gap-4">
            <div>
              <SubmitButton onClick = {increaseByOne}>
                plus
              </SubmitButton>
            </div>
            <div>
              <DangerButton onClick = {decreaseByOne}>
                minus
              </DangerButton>
            </div>
            <div>
              <NaturalButton onClick = {setToZero}>
                zero
              </NaturalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


