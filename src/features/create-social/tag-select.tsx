import { UseFormReturnType } from "@mantine/form";
import { Form } from "./types";
import { Badge } from "@/ui/badge";

interface Props {
  form: UseFormReturnType<Form>;
}

const TAGS = ["Engineering", "Product", "Marketing", "Design"];

export const TagSelect = ({ form }: Props) => {
  return (
    <>
      <div className="flex items-center mt-6 gap-2">
        {form.values.tags.map((el) => (
          <Badge
            key={el}
            content={el}
            primary
            onClose={() =>
              form.removeListItem(
                "tags",
                form.values.tags.findIndex((i) => i === el)
              )
            }
          />
        ))}
      </div>
      <div className="flex items-center mt-2 gap-2">
        {TAGS.filter((el) => !form.values.tags.includes(el)).map((el) => (
          <Badge
            key={el}
            onClick={() => form.insertListItem("tags", el)}
            content={el}
          />
        ))}
      </div>
    </>
  );
};
