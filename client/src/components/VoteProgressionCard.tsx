type VoteProgressionCardProps = {
  agreement: number;
  disagreement: number;
  minVotes: number;
};

function VoteProgressionCard({
  agreement,
  disagreement,
  minVotes,
}: VoteProgressionCardProps) {
  const total = Math.max(agreement + disagreement, minVotes);
  const agreementPercent = (agreement / total) * 100;
  const disagreementPercent = (disagreement / total) * 100;

  return (
    <section>
      <div style={{ background: "#f5f5f5", display: "flow-root", textAlign: "center" }}>
        <div
          style={{
            background: "#0f0",
            width: `${agreementPercent}%`,
            float: "left",
          }}
        >
          {agreementPercent.toPrecision(4)}
        </div>
        <div
          style={{
            background: "#f00",
            width: `${disagreementPercent}%`,
            float: "left",
          }}
        >
          {disagreementPercent.toPrecision(4)}
        </div>
      </div>
      <ul>
        <li>เห็นด้วย: {agreement} ({agreementPercent.toPrecision(4)}%)</li>
        <li>ไม่เห็นด้วย: {disagreement} ({disagreementPercent.toPrecision(4)}%)</li>
        <li>จำนวนขั้นต่ำที่ต้องการ: {minVotes}</li>
      </ul>
    </section>
  );
}

export default VoteProgressionCard;
