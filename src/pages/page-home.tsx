import Container from '../components/container';
import AlbumsFilter from '../contexts/albums/components/albums-filter';
import useAlbums from '../contexts/albums/hooks/use-albums';
import PhotosList from '../contexts/photos/components/photos-list';

export default function PageHome() {
  const { albums, isLoadingAlbums } = useAlbums();

  return (
    <Container>
      <AlbumsFilter
        albums={albums}
        loading={isLoadingAlbums}
        className="mb-9"
      />

      <PhotosList
        photos={[
          {
            id: '1',
            title: 'Sample Photo',
            imageId: 'portrait-tower.png',
            albums: [
              { id: '1', title: 'Sample Album 1' },
              { id: '2', title: 'Sample Album 2' },
              { id: '3', title: 'Sample Album 3' },
            ],
          },
          {
            id: '2',
            title: 'Sample Photo',
            imageId: 'portrait-tower.png',
            albums: [
              { id: '1', title: 'Sample Album 1' },
              { id: '2', title: 'Sample Album 2' },
              { id: '3', title: 'Sample Album 3' },
            ],
          },
        ]}
      />
    </Container>
  );
}
