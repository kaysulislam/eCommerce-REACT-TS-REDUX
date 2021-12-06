interface IProps {
  src: string;
  imgHeight: number;
  imgWidth: number;
}

function MainImage(props: IProps) {
  const { src, imgHeight, imgWidth } = props;

  return (
    <div>
      <img
        src={require('../../assets/images/'.concat(src)).default}
        alt="Product"
        height={imgHeight}
        width={imgWidth}
      ></img>
    </div>
  );
}
export default MainImage;
