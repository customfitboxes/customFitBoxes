import { PortableText } from "@portabletext/react";

export const BlogDetails = (props: any) => {
  const block = {
    h1: ({ children }: any) => (
      <h1 className="text-3xl fw_600 mb-2 mt-4 primaryText2">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl fw_600 mb-2 mt-4 primaryText2">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl fw_600 mb-2 mt-4 primaryText2">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg fw_600 mb-2 mt-4 primaryText2">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-base fw_600 mb-2 mt-4 primaryText2">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-sm fw_600 mb-2 mt-4 primaryText2">{children}</h6>
    ),
    p: ({ children }: any) => (
      <p className="text-base fw_600 mb-2 mt-4 primaryText2">{children}</p>
    ),
  };
  return (
    <div className="mt-8">
      <PortableText value={props.blog.description} components={{ block }} />
    </div>
  );
};
