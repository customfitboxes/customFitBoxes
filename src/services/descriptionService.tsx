import imageUrlBuilder from "@sanity/image-url";

export const builder = imageUrlBuilder({
  projectId: "hktnmaz3", // Replace with your Sanity project ID
  dataset: "production", // Replace with your Sanity dataset name
});

const renderBlock = (block: any) => {
  if (block._type === "block" && block.children) {
    return block.children.map(renderSpan);
  }
  return null;
};

const renderSpan = (span: any) => {
  if (span._type === "span") {
    return <span key={span._key}>{span.text}</span>;
  }
  return null;
};

export const renderDescription = (description: any) => {
  if (description && description.length > 0) {
    return description.map((block: any) => (
      <p key={block._key}>{renderBlock(block)}</p>
    ));
  }
};

export const getImg = (imageWithAlt: any) => {
  if (imageWithAlt && imageWithAlt.image && imageWithAlt.image.asset) {
    const imageRef = imageWithAlt.image.asset._ref;
    const imageUrl = builder.image(imageRef).url();
    return { url: imageUrl, alt: imageWithAlt.alt };
  }
  return { url: "", alt: "" };
};

export const getIcon = (iconWithAlt: any) => {
  if (iconWithAlt && iconWithAlt.icon && iconWithAlt.icon.asset) {
    const imageRef = iconWithAlt.icon.asset._ref;
    const imageUrl = builder.image(imageRef).url();
    return { url: imageUrl, alt: iconWithAlt.alt };
  }
  return { url: "", alt: "" };
};

export function createArrayOfSets(arr:any) {
  const result = [];

  for (let i = 0; i < arr.length; i += 3) {
    const set = arr.slice(i, i + 3);
    result.push(set);
  }

  return result;
}