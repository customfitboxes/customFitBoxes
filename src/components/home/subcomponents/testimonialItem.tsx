import { getImg } from "@/services/descriptionService";

export const TestimonialItem = (props: any) => {
  return (
    <div
      style={{ background: "#F5F5F5" }}
      className="rounded-xl px-5 py-5 relative h-72"
    >
      <img
        src={getImg(props.data.userImage).url}
        alt={getImg(props.data.userImage).alt}
        className="h-20 w-20 rounded-full object-cover absolute -top-8 transform -translate-x-1/2 left-1/2"
      />
      <div className="pt-14">
       <div className="h-28">
       <p className="text-xs text-center fw_600 mb-2">{props.data.title}</p>
        <p className="text-xs text-center four_lines_elipsis">{props.data.review}</p>
       </div>
       <div className="mt-4 h-10">
       <span className="primaryText block text-lg fw_600 text-center">{props.data.reviewerName}</span>
        <p className="primaryText text-sm fw_400 text-center">{props.data.reviewerDesignation}</p>
       </div>
      </div>
    </div>
  );
};
