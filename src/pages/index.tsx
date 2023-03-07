import { Calendar, Clock, Location, UserGroup, Currency } from "@/ui/icons";

import * as Label from "@radix-ui/react-label";
import { Checkbox } from "@/ui/checkbox";
import { RadioGroup } from "@/ui/radiogroup";
import { isNotEmpty, useForm } from "@mantine/form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BannerDialog } from "@/ui/banner-dialog";
import { Form } from "@/types";
import { TagSelect } from "@/ui/tag-select";
import { Input } from "@/ui/input";

export default function Home() {
  const form = useForm<Form>({
    initialValues: {
      title: "Untitled Event",
      startAt: new Date(),
      venue: "",
      capacity: 0,
      price: 0,
      description: "",
      banner: "",
      isManualApprove: false,
      privacy: "",
      tags: [],
    },
    validate: {
      title: isNotEmpty("Please enter your event title"),
      venue: isNotEmpty("Please enter your venue"),
      description: isNotEmpty("Please enter your event description"),
      privacy: isNotEmpty("Please select your audience type"),
      tags: (value) =>
        value.length < 1
          ? "Please select at least 1 tags for our engine"
          : null,
      banner: isNotEmpty("Please select banner for your event"),
    },
  });
  return (
    <form onSubmit={form.onSubmit((v) => console.log(v))}>
      <div className="mt-24 pl-8">
        <section className="flex gap-6">
          <section className="pt-8 w-5/12">
            <Input
              type="text"
              id="title"
              className="text-5xl bg-purple text-white text-extrabold px-3 py-1 w-full"
              {...form.getInputProps("title")}
            />
            <div className="w-full mt-6 flex gap-4">
              <div className="flex items-center">
                <Label.Root htmlFor="startAt_date">
                  <Calendar size={48} className="text-darkblue" />
                </Label.Root>
                <DatePicker
                  selected={form.values.startAt}
                  onChange={(v) =>
                    form.setFieldValue("startAt", v ?? new Date())
                  }
                  customInput={
                    <Input
                      id="startAt_date"
                      //trick to nicely size button base on date format
                      size={"mm/dd/yyyy".length}
                      className="px-2 h-10 rounded text-xl shadow-sm"
                    />
                  }
                />
              </div>
              <div className="flex items-center">
                <Label.Root htmlFor="startAt_time">
                  <Clock size={48} className="text-darkblue" />
                </Label.Root>
                <DatePicker
                  selected={form.values.startAt}
                  onChange={(date) =>
                    form.setFieldValue("startAt", date ?? new Date())
                  }
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  customInput={
                    <Input
                      id="startAt_time"
                      size={"hh:mm aa".length}
                      className="px-2 h-10 rounded text-xl shadow-sm"
                    />
                  }
                />
              </div>
            </div>
            <div className="flex items-center w-full mt-4 gap-2">
              <Label.Root htmlFor="venue">
                <Location size={24} className="text-darkblue" />
              </Label.Root>
              <Input
                type="text"
                id="venue"
                placeholder="Location"
                className="px-2 h-10 rounded w-full shadow-sm"
                {...form.getInputProps("venue")}
              />
            </div>
            <div className="flex justify-between gap-8 mt-2">
              <div className="flex items-center gap-2">
                <Label.Root htmlFor="capacity">
                  <UserGroup size={24} className="text-darkblue" />
                </Label.Root>
                <Input
                  type="number"
                  id="capacity"
                  placeholder="Max capacity"
                  min={0}
                  className="px-2 h-10 w-full rounded shadow-sm"
                  {...form.getInputProps("capacity")}
                />
              </div>
              <div className="flex items-center gap-2">
                <Label.Root htmlFor="price">
                  <Currency size={24} className="text-darkblue" />
                </Label.Root>
                <Input
                  id="price"
                  type="number"
                  min={0}
                  placeholder="Cost per person"
                  className="px-2 h-10 w-full rounded shadow-sm"
                />
              </div>
            </div>
          </section>
          <section
            className="h-[445px] rounded-bl-[64px] rounded-tr-[64px]
          border-dashed border bg-gray-600/10 border-white/100 flex items-center justify-center shadow-sm flex-grow overflow-hidden"
          >
            {form.values.banner ? (
              <img
                src={form.values.banner}
                alt="banner"
                className="h-[445px] w-full object-cover"
              />
            ) : (
              <div>
                <BannerDialog form={form} />
                <span className="text-sm text-red-700">
                  {form.errors.banner}
                </span>
              </div>
            )}
          </section>
        </section>
        <div className="w-1/2 mt-8 space-y-2">
          <div className="flex items-baseline gap-4">
            <Label.Root
              className="font-medium text-gray-700"
              htmlFor="description"
            >
              Description
            </Label.Root>
            <span className="text-sm text-red-700">
              {form.errors.description}
            </span>
          </div>
          <textarea
            id="description"
            placeholder="Description of your event"
            className="w-full rounded p-3"
            rows={10}
            {...form.getInputProps("description")}
          ></textarea>
        </div>
        <section className="p-8 rounded bg-white space-y-6 mt-8 w-1/2 shadow-sm">
          <h3 className="text-purple bg-yellow text-3xl w-fit font-bold p-1">
            Settings
          </h3>
          <div className="flex items-center gap-2">
            <Checkbox
              id="isManualApprove"
              {...form.getInputProps("isManualApprove")}
            />
            <Label.Root htmlFor="isManualApprove">
              I want to approve attendees
            </Label.Root>
          </div>
          <div className="space-y-2">
            <div className="flex items-baseline gap-4 ">
              <Label.Root className="text-gray-700 font-medium">
                Privacy
              </Label.Root>
              <span className="text-sm text-red-700">
                {form.errors.privacy}
              </span>
            </div>
            <RadioGroup.Root
              className="flex items-center gap-8"
              value={form.values.privacy}
              onValueChange={(e) => form.setFieldValue("privacy", e)}
            >
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="Public" id="public" />
                <Label.Root
                  htmlFor="public"
                  className="text-gray-600 font-light"
                >
                  Public
                </Label.Root>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="curated_audience" id="curated" />
                <Label.Root
                  htmlFor="curated"
                  className="text-gray-600 font-light"
                >
                  Curated Audience
                </Label.Root>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="community_only" id="community" />
                <Label.Root
                  htmlFor="community"
                  className="text-gray-600 font-light"
                >
                  Community Only
                </Label.Root>
              </div>
            </RadioGroup.Root>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <Label.Root>Tag your social</Label.Root>
              <span className="text-sm text-red-700">{form.errors.tags}</span>
            </div>
            <p className="mt-1 font-light text-gray-600">
              Pick tags for our curation engine to work its magic
            </p>
            <TagSelect form={form} />
          </div>
        </section>
        <input
          type="submit"
          className="w-1/2 mt-8 bg-yellow text-purple h-12 rounded font-semibold uppercase shadow-sm"
          value="create social"
        />
      </div>
    </form>
  );
}
