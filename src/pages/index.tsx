import {
  Picture,
  Calendar,
  Clock,
  Location,
  UserGroup,
  Currency,
} from "@/ui/icons";

import { Checkbox } from "@/ui/checkbox";
import * as Label from "@radix-ui/react-label";
import { RadioGroup } from "@/ui/radiogroup";
import { Badge } from "@/ui/badge";

export default function Home() {
  return (
    <form>
      <div className="mt-24 pl-8">
        <section className="flex gap-6">
          <section className="pt-8 w-3/7">
            <input
              type="text"
              className="text-5xl bg-purple text-white text-extrabold px-3 py-1 w-full"
              value="Untilted Event"
            />
            <div className="w-full mt-6 flex gap-4">
              <div className="flex items-center">
                <Label.Root htmlFor="date">
                  <Calendar size={48} />
                </Label.Root>
                <input
                  type="date"
                  placeholder="date"
                  className="px-2 h-10 rounded text-3xl shadow-sm"
                />
              </div>
              <div className="flex items-center">
                <Label.Root htmlFor="date">
                  <Clock size={48} />
                </Label.Root>
                <input
                  type="time"
                  placeholder="date"
                  className="px-2 h-10 rounded w-full text-3xl shadow-sm"
                />
              </div>
            </div>
            <div className="flex items-center w-full mt-4 gap-2">
              <Label.Root htmlFor="date">
                <Location size={24} />
              </Label.Root>
              <input
                type="text"
                placeholder="Location"
                className="px-2 h-10 rounded w-full shadow-sm"
              />
            </div>
            <div className="flex gap-8 mt-2">
              <div className="flex items-center gap-2">
                <Label.Root htmlFor="date">
                  <UserGroup size={24} />
                </Label.Root>
                <input
                  type="text"
                  placeholder="max capacity"
                  className="px-2 h-10 w-full rounded shadow-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <Label.Root>
                  <Currency size={24} />
                </Label.Root>
                <input
                  type="text"
                  placeholder="cost per person"
                  className="px-2 h-10 w-full rounded shadow-sm"
                />
              </div>
            </div>
          </section>
          <section
            className="h-[445px] rounded-bl-[64px] rounded-tr-[64px]
          border-dashed border bg-gray-600/10 border-white/100 flex items-center justify-center shadow-sm flex-grow"
          >
            <button className="text-darkblue font-semibold flex items-center gap-4 text-xl">
              <Picture size={24} />
              Add a banner
            </button>
          </section>
        </section>
        <div className="w-1/2 mt-8">
          <textarea
            placeholder="Description of your event"
            className="w-full rounded p-3"
            rows={10}
          ></textarea>
        </div>
        <section className="p-8 rounded bg-white space-y-6 mt-8 w-1/2 shadow-sm">
          <h3 className="text-purple bg-yellow text-3xl w-fit font-bold p-1">
            Settings
          </h3>
          <div className="flex items-center gap-2">
            <Checkbox />
            <span>I want to approve attendees</span>
          </div>
          <div className="space-y-2">
            <Label.Root className="text-gray-700 font-medium">
              Privacy
            </Label.Root>
            <RadioGroup.Root className="flex items-center gap-8">
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
            <label htmlFor="">Tag your social</label>
            <p className="mt-1 font-light text-gray-600">
              Pick tags for our curation engine to work its magic
            </p>
            <div className="flex items-center mt-6">
              <Badge content="Engineering" primary onClose={() => {}} />
            </div>
            <div className="flex items-center mt-2">
              <Badge content="Product" />
              <Badge content="Marketing" />
              <Badge content="Design" />
            </div>
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
