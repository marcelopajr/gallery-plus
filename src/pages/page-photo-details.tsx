import { useParams } from 'react-router';
import Container from '../components/container';
import Text from '../components/text';
import type { Photo } from '../contexts/photos/models/photo';
import Skeleton from '../components/skeleton';
import PhotosNavigator from '../contexts/photos/components/photos-navigator';
import ImagePreview from '../components/image-preview';
import Button from '../components/button';

export default function PagePhotoDetails() {
  const { id } = useParams();
  const isLoadingPhoto = false;
  const photo = {
    id: '1',
    title: 'Sample Photo',
    imageId: 'portrait-tower.png',
    albums: [
      { id: '1', title: 'Sample Album 1' },
      { id: '2', title: 'Sample Album 2' },
      { id: '3', title: 'Sample Album 3' },
    ],
  } as Photo;

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {!isLoadingPhoto ? (
          <Text variant="heading-large">{photo.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}

        <PhotosNavigator loading={isLoadingPhoto} />
      </header>

      <div className="grid grid-cols-[21rem] gap-24">
        <div className="space-y-3">
          {!isLoadingPhoto ? (
            <ImagePreview
              src={`/images/${photo?.imageId}`}
              title={photo?.title}
              imageClassName="h-[21rem]"
            />
          ) : (
            <Skeleton className="h-[21rem]" />
          )}

          {!isLoadingPhoto ? (
            <Button variant="destructive">Delete</Button>
          ) : (
            <Skeleton className="w-20 h-10" />
          )}
        </div>
      </div>
    </Container>
  );
}
