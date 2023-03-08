import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Picture } from "@/ui/icons";
import { UseFormReturnType } from "@mantine/form";
import { Form } from "./types";

const BANNER_URLS = [
  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg",
  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_2.jpg",
  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_3.jpg",
  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_4.jpg",
  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_5.jpg",
  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_6.jpg",
  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg",
  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg",
  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg",
  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg",
];

interface Props {
  form: UseFormReturnType<Form>;
}

export const BannerDialog = ({ form }: Props) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");
  return (
    <div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="text-darkblue font-semibold flex items-center gap-4 text-xl"
          >
            <Picture size={24} />
            Add a banner
          </button>
        </Dialog.Trigger>
        <Dialog.Portal container={container}>
          <Dialog.Overlay className="bg-gray-600/70 fixed inset-0 z-10" />
          <Dialog.Content className="font-sans bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[75vh] rounded shadow p-3 flex flex-col z-10">
            <Dialog.Title className="font-medium text-gray-700 text-lg pb-2">
              Choose a banner
            </Dialog.Title>
            <hr className="text-gray-700" />
            <div className="grow">
              <div className="flex gap-3 flex-wrap pt-5">
                {BANNER_URLS.map((el) => (
                  <BannerFrame
                    url={el}
                    key={el}
                    isSelected={el === selectedUrl}
                    onClick={() => setSelectedUrl(el)}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-end px-4 gap-2">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="cursor-pointer bg-gray-100 text-gray-700 px-2 py-1 rounded shadow-sm font-medium"
                >
                  Close
                </button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button
                  onClick={() => {
                    form.setFieldValue("banner", selectedUrl);
                    setOpen(false);
                  }}
                  type="button"
                  className="cursor-pointer bg-yellow text-purple px-2 py-1 rounded-sm shadow font-medium"
                >
                  Save
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div ref={setContainer} />
    </div>
  );
};

export const BannerFrame = ({
  url,
  isSelected,
  onClick,
}: {
  url: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick}>
      <img
        src={url}
        alt="banner"
        className={`h-24 w-48 object-cover rounded shadow ${
          isSelected ? "border-2 border-purple" : ""
        }`}
      />
    </div>
  );
};
