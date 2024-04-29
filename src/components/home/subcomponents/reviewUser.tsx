import { getImg } from "@/services/descriptionService";

export const ReviewUser = (props: any) => {
  return (
    props.user && (
      <div
        onClick={() => props.setTab(props.user.reviewerName)}
        className="flex h-20 w-full cursor-pointer items-center gap-x-4 rounded-lg px-5 md:w-80"
        style={{
          background: "#F8F8F8",
          boxShadow:
            props.tab === props.user.reviewerName
              ? "0px 0px 15px 8px #E7E4E4"
              : "0px 0px 8px 1px #E7E4E4",
        }}
      >
        <img
          src={getImg(props.user.userImage).url}
          alt={getImg(props.user.userImage).alt}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <p className="fw_600 text-sm">{props.user.reviewerName}</p>
          <p className="text-xs">{props.user.reviewerDesignation}</p>
        </div>
      </div>
    )
  );
};
