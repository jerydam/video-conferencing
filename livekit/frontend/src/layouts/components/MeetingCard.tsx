import ImageFallback from "@/layouts/helpers/ImageFallback";
import { plainify } from "@/lib/textConverter";
import { MeetingCardType } from "@/types";
import Link from "next/link";

const MeetingCard = ({ data }: { data: MeetingCardType }) => {
  const { title, image } = data;
  return (
    <div className="rounded bg-theme-light p-8 text-center dark:bg-darkmode-theme-light">
      {image && (
        <ImageFallback
          className="mx-auto mb-6 rounded"
          src={image}
          alt={title}
          width={120}
          height={120}
        />
      )}
      <h4 className="mb-3">
        <Link href={'#'}>{title}</Link>
      </h4>
      <p className="mb-4">{plainify(data.description)}</p>
    </div>
  );
};

export default MeetingCard;
