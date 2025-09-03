import Container from '../components/container';
import PhotosList from '../contexts/photos/components/photos-list';

export default function PageHome() {
  return (
    <Container>
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
