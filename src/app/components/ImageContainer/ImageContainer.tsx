interface ImageContainerProps {
  imageUrl: string;
  imageDescription: string;
  alt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl, imageDescription, alt }) => {
  return (
    <div className="w-full relative overflow-hidden place-self-center py-4">
      <div className="flex transition-transform duration-500 ease-in-out">
        <div className="flex-shrink-0 w-full m-4">
          <img
            src={imageUrl}
            className="w-full h-auto max-h-128 object-contain rounded-2xl"
            alt={alt}
          />
          <div className={"text-center font-serif font-light"}>
            {imageDescription}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageContainer;
