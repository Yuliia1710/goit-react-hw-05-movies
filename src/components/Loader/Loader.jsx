import { ThreeCircles } from 'react-loader-spinner';
import { LoaderWrap, StyledLoader } from './Loader.styled';
import { createPortal } from 'react-dom';

const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <LoaderWrap>
      <StyledLoader>
        <ThreeCircles
          height="200"
          width="200"
          color="red"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </StyledLoader>
    </LoaderWrap>,
    loaderRoot
  );
};

export default Loader;
