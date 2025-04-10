interface ImageContainerProps {
  imageUrl: string;
  imageDescription: string;
  alt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  imageUrl,
  imageDescription,
  alt,
}) => {
  return (
<div className="justify-center place-self-center">
  <div className="max-w-lg bg-white rounded-xl">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-auto rounded-xl bg-white"
      />
      <div className="italic text-center text-sm text-gray-500 mt-2 bg-white rounded-xl pb-2">
        {imageDescription}
      </div>
  </div>
</div>

  );
};
export default ImageContainer;
