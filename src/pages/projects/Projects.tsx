import { useSelector } from "react-redux";
import { RootState } from "state/store";
import {
  ContainerOuter,
  ContainerInner,
  Header,
  ImageGallery,
  ImagePopup,
  Modal,
  PageBlurb,
  Spacer,
} from "components";
import { pageProjectsText } from "../../constants";
import { projectGalleries } from "constants/galleries";

const Projects = () => {
  const { isOpen } = useSelector((store: RootState) => store.modal);
  const { gallery, currentIndex } = useSelector(
    (store: RootState) => store.galleryReducer
  );

  return (
    <ContainerOuter>
      {isOpen && (
        <Modal>
          <ImagePopup gallery={gallery} index={currentIndex} />
        </Modal>
      )}
      <Header />
      <ContainerInner>
        <Spacer height={40} />
        <PageBlurb
          title={pageProjectsText.TITLE}
          text={pageProjectsText.TEXT}
        />
        <Spacer height={20} />
        <ImageGallery imageGalleries={projectGalleries} />
      </ContainerInner>
    </ContainerOuter>
  );
};

export default Projects;
