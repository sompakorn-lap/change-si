type PurposeViewProps = {
  title: string;
  details: string;
};

function PurposeView({ title, details }: PurposeViewProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{details}</p>
    </div>
  )
}

export default PurposeView