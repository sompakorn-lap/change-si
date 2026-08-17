import PurposeForm from "./components/PurposeForm"
import PurposeView from "./components/PurposeView"
import VoteProgressionBar from "./components/VoteProgressionCard"

function App() {
  return (
    <div>
      <PurposeForm />
      <PurposeView title="ประเด็นที่ 1" details="รายละเอียดประเด็นที่ 1"/>
      <PurposeView title="ประเด็นที่ 2" details="รายละเอียดประเด็นที่ 2"/>
      <PurposeView title="ประเด็นที่ 3" details="รายละเอียดประเด็นที่ 3"/>

      <VoteProgressionBar
        agreement={18}
        disagreement={12}
        minVotes={48}
      />
    </div>
  )
}

export default App