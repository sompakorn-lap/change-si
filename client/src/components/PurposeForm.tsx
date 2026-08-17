import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form"
import * as v from "valibot";

const purposeSchema = v.object({
  title: v.string(),
  details: v.string()
});

function PurposeForm() {

  const { register, handleSubmit } = useForm({
    resolver: valibotResolver(purposeSchema)
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <label>หัวข้อ</label>
        <input type="text" {...register("title")} />
      </div>
      <div>
        <label>รายละเอียด</label>
        <textarea {...register("details")} />
      </div>
      <div>
        <button type="submit">ส่ง</button>
      </div>
    </form>
  )
}

export default PurposeForm